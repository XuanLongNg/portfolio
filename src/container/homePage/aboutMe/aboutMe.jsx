import { SectionHome } from "../../../configs/constant";
import Style from "./style";
import { Divider, Image } from "antd";
import avatar from "../../../assets/z4072164143770_71972f838b03628554f12dff4cfb6d44.jpg";
import useViewport from "../../../hooks/useViewport";
import { useEffect, useState } from "react";
const introduction =
  "Hi there, I'm Long. I'm a 3rd year student at the Institute of Posts and Telecommunications Technology. I got interested in Web Development, and I am trying to learn and become a Web Developer. Currently, I am working at Code Mely - an IT community in Vietnam.";
const goal =
  "My career goal is to be a Web developer. I want to develop the ability to work on both front-end and back-end side of web application to be able to build and deploy comprehensive products.";
const image =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/09328b69-10c8-410c-b03c-2518e32318b9_beluga.jpg?alt=media&token=a813bd79-d9cd-4017-ae34-22b4aa8abd51";

const AboutMe = () => {
  const { isMobile, isTablet, isDesktop } = useViewport();
  const renderPc = (
    <div className="d-flex justify-content-around container-content">
      <div
        className="card-image"
        data-aos="fade-down"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
        //   data-aos-anchor-placement="top-bottom"
      >
        <Image height={"300px"} src={avatar} preview={false} />
      </div>
      <div
        className="content"
        data-aos="fade-down"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <h2 className="title">Long Nguyen Xuan</h2>
        <p>
          {introduction} <br /> {goal}
        </p>
      </div>
    </div>
  );
  const renderMobile = (
    <div className="container-content">
      <div
        className="card-image"
        data-aos="fade-down"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <Image height={"300px"} src={avatar} preview={false} />
      </div>
      <div
        className="content"
        data-aos="fade-down"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <h2 className="title">Long Nguyen Xuan</h2>
        <p>
          {introduction} <br /> {goal}
        </p>
      </div>
    </div>
  );
  return (
    <Style id={SectionHome.ABOUT}>
      <div className="container-title">
        <Divider className="title-divider">About me</Divider>
      </div>
      {isMobile && renderMobile}
      {(isTablet || isDesktop) && renderPc}
    </Style>
  );
};
export default AboutMe;
