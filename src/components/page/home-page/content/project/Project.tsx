"use client";

import { Card, Carousel, Col, Image, Row, Space, Tag, Typography } from "antd";
import ProjectStyle from "@/components/page/home-page/content/project/project.style";
import { ESectionHome } from "@/common/enums/section.enum";
import TitleDivider from "@/components/common/title-divider/TitleDivider";
import BlurImage from "@/components/common/Image/BlurImage/BlurImage";
import Button from "@/components/common/button/Button";
import { LinkOutlined } from "@ant-design/icons";
import { mockProjects } from "@/mock/project";

const { Meta } = Card;

const Project = () => {
  const tablet = (item) => (
    <Card hoverable style={{ width: 240 }} cover={<img src={item.url} />}>
      <Typography.Title level={2} className={"title-card"}>
        {item.title}
      </Typography.Title>
      <Typography.Text className="title-description">
        {item.description}
      </Typography.Text>
      <Space wrap justify={"start"} align={"start"} className="tag-icon">
        {item.technical.map((item) => {
          return (
            <Tag
              key={item.label}
              style={{ marginBottom: "2px" }}
              className="tag-name"
              color={item.color}
            >
              {item.label}
            </Tag>
          );
        })}
      </Space>
    </Card>
  );
  return (
    <div id={ESectionHome.PROJECT} className="d-flex">
      <ProjectStyle>
        <TitleDivider>My project</TitleDivider>
        <Carousel className={"slider"} autoplaySpeed={5000}>
          {mockProjects.map((item) => (
            <Space key={item.title} className="box">
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
                            key={item.label}
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
