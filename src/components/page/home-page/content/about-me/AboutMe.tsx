"use client";
import AboutMeStyle, {
  AboutMeStyleMobile,
} from "@/components/page/home-page/content/about-me/about-me.style";
import { Col, Divider, Image, Row, Tag, Typography } from "antd";
import { ESectionHome } from "@/common/enums/section.enum";
import useViewport from "@/hooks/common/useViewPort";
import { useTheme } from "next-themes";
import TitleDivider from "@/components/common/title-divider/TitleDivider";

const introduction =
  "Hi there, I'm Long. I'm a 3rd year student at the Institute of Posts and Telecommunications Technology. I got interested in Web Development, and I am trying to learn and become a Web Developer. Currently, I am working at Code Mely - an IT community in Vietnam.";
const goal =
  "My career goal is to be a Web developer. I want to develop the ability to work on both front-end and back-end side of web application to be able to build and deploy comprehensive products.";
const image =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/09328b69-10c8-410c-b03c-2518e32318b9_beluga.jpg?alt=media&token=a813bd79-d9cd-4017-ae34-22b4aa8abd51";

export interface ISkillPreview {
  text: string;
  color: string;
}
const skills: ISkillPreview[] = [
  {
    text: "Front-end",
    color: "#2db7f5",
  },
  {
    text: "Back-end",
    color: "#87d068",
  },
  {
    text: "Devops ",
    color: "#ff5500",
  },
];

const AboutMe = () => {
  const { isMobile, isTablet, isDesktop } = useViewport();
  const { theme, setTheme } = useTheme();

  const renderPc = (
    <AboutMeStyle>
      <TitleDivider orientation={"left"}>About me</TitleDivider>

      <Row className="d-flex container-content">
        <Col
          span={14}
          className="content"
          data-aos="fade-down"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <Typography.Title level={2} className="title">
            Long Nguyen Xuan
          </Typography.Title>
          <Typography.Text className={"text-introduce"}>
            {introduction} <br /> {goal}
            <br />
            {skills.map((skill) => (
              <Tag color={skill.color}>{skill.text}</Tag>
            ))}
          </Typography.Text>
        </Col>
        <Col span={10} className={"d-flex justify-content-center"}>
          <div
            className="card-image"
            data-aos="fade-down"
            data-aos-duration="5000"
            data-aos-easing="ease-in-out"
            //   data-aos-anchor-placement="top-bottom"
          >
            <div className={"decor-image decor-1"}></div>
            <div className={"decor-image decor-2"}></div>
            <Image
              height={"300px"}
              width={"225px"}
              src={"/assets/avatar.jpg"}
              preview={false}
            ></Image>
          </div>
        </Col>
      </Row>
    </AboutMeStyle>
  );
  const renderMobile = (
    <AboutMeStyleMobile>
      <div className="container-title">
        <Divider className="title-divider">About me</Divider>
      </div>
      <div className="container-content">
        <div
          className="card-image"
          data-aos="fade-down"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <Image height={"300px"} src={"/assets/avatar.jpg"} preview={false} />
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
    </AboutMeStyleMobile>
  );
  return (
    <div id={ESectionHome.ABOUT}>
      {isMobile && renderMobile}
      {(isTablet || isDesktop) && renderPc}
    </div>
  );
};
export default AboutMe;
