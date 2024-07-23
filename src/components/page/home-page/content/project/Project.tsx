"use client";

import { Carousel, Col, Image, Row, Space, Tag, Typography } from "antd";
import { useState } from "react";
import useViewport from "@/hooks/common/useViewPort";
import ProjectStyle from "@/components/page/home-page/content/project/project.style";
import { ESectionHome } from "@/common/enums/section.enum";
import TitleDivider from "@/components/common/title-divider/TitleDivider";
import BlurImage from "@/components/common/Image/BlurImage/BlurImage";
import Button from "@/components/common/button/Button";
import { LinkOutlined } from "@ant-design/icons";
import { skillsConstant } from "@/common/constants/skill.constant";

const sliders = [
  {
    title: "Webchat",
    description:
      "Webchat is a real-time messaging application that allows users to send and receive messages instantly",
    link: "https://github.com/XuanLongNg/Webchat.git",
    technical: [
      skillsConstant.typescript,
      skillsConstant.react,
      skillsConstant["ant-design"],
      skillsConstant["express-js"],
      skillsConstant["firebase-realtime"],
      skillsConstant["firebase-firestore"],
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/Screenshot%202024-07-24%20022015.png?alt=media&token=d6a9777b-d11b-454a-8dd5-eed728cd95b5",
  },
  {
    title: "Portfolio",
    description: "The Portfolio project built with react",
    link: "https://github.com/XuanLongNg/portfolio.git",
    technical: [
      skillsConstant.react,
      skillsConstant.rive,
      skillsConstant["ant-design"],
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/Screenshot%202024-07-24%20011904.png?alt=media&token=38cc0d82-3ae0-4854-8195-128dfd8f451f",
  },
  {
    title: "Fireboy & Watergirl",
    description:
      "Project clone of Fireboy & Watergirl game with main functions and map creation function",
    link: "https://github.com/XuanLongNg/Fireboy-and-Watergirl.git",
    technical: [skillsConstant.python],
    image:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/images.jpg?alt=media&token=b2c8294b-17cb-45f9-ad04-c1af4d15ef64",
  },
  {
    title: "Library Web",
    description:
      "A library website with the function of buying and selling books for users and managing books for admin",
    link: "https://github.com/XuanLongNg/library_management.git",
    technical: [
      skillsConstant.react,
      skillsConstant["express-js"],
      skillsConstant.mysql,
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/Screenshot%202024-07-24%20021403.png?alt=media&token=b5de810b-3efb-4dc1-9668-206a30e5fc02",
  },
];
const Project = () => {
  const [data, setData] = useState();
  const { isMobile, isTablet, isDesktop } = useViewport();

  return (
    <div id={ESectionHome.PROJECT} className="d-flex">
      <ProjectStyle>
        <TitleDivider>My project</TitleDivider>
        <Carousel className={"slider"} autoplaySpeed={5000}>
          {sliders.map((item) => (
            <Space className="box">
              <Row>
                <Col
                  className={
                    "text-group d-flex flex-column justify-content-between"
                  }
                  span={13}
                >
                  <Space className={"d-flex flex-column align-items-start"}>
                    <Typography.Title level={2} className={"title-card"}>
                      {item.title}
                    </Typography.Title>
                    <Typography.Text className="title-description">
                      {item.description}
                    </Typography.Text>
                    <Space
                      wrap
                      justify={"start"}
                      align={"start"}
                      className="tag-icon"
                    >
                      {item.technical.map((item) => {
                        return (
                          <Tag
                            style={{ marginBottom: "2px" }}
                            className="tag-name"
                            color={item.color}
                          >
                            {item.label}
                          </Tag>
                        );
                      })}
                    </Space>
                  </Space>
                  <Button
                    href={item.link}
                    className={"btn-redirect"}
                    type={"primary"}
                  >
                    <LinkOutlined />
                    View
                  </Button>
                </Col>
                <Col span={1}></Col>
                <Col className={"image-group"} span={10}>
                  <BlurImage className={"image-bg"} url={item.image} />
                  <Image
                    className={"image-project"}
                    src={item.image}
                    alt={"preview"}
                    preview={false}
                  />
                </Col>
              </Row>
            </Space>
          ))}
        </Carousel>
      </ProjectStyle>
    </div>
  );
};
export default Project;
