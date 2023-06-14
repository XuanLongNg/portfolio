import { Card, Divider, List, Tag } from "antd";
import Style from "./style";
import { SectionHome } from "../../../configs/constant";
import { useEffect, useState } from "react";
import useViewport from "../../../hooks/useViewport";

const Project = () => {
  const [data, setData] = useState([
    {
      title: "Webchat",
      description:
        "Webchat is a real-time messaging application that allows users to send and receive messages instantly",
      link: "https://github.com/XuanLongNg/Webchat.git",
      technical: ["ReactJs", "ExpressJs", "Firebase Realtime"],
    },
    {
      title: "React Portfolio",
      description: "The Portfolio project built with react",
      link: "https://github.com/XuanLongNg/portfolio.git",
      technical: ["ReactJs", "Rive", "Ant Design"],
    },
    {
      title: "Fireboy & Watergirl",
      description:
        "Project clone of Fireboy & Watergirl game with main functions and map creation function",
      link: "https://github.com/XuanLongNg/Fireboy-and-Watergirl.git",
      technical: ["Python", "Pygame"],
    },
    {
      title: "Library Web",
      description:
        "A library website with the function of buying and selling books for users and managing books for admin",
      link: "https://github.com/XuanLongNg/library_management.git",
      technical: ["ReactJs", "ExpressJs", "MySql"],
    },
  ]);
  const { isMobile, isTablet, isDesktop } = useViewport();

  const renderPc = (
    <Style>
      <div className="container-title">
        <Divider className="title-divider">Project</Divider>
      </div>
      <List
        className="list-card"
        grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            className="item"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
          >
            <a className="card" href={item.link}>
              <Card title={item.title}>
                <p className="description">{item.description}</p>
                <div className="tag-icon">
                  {item.technical.map((item) => {
                    return (
                      <Tag className="tag-name" color="#2db7f5">
                        {item}
                      </Tag>
                    );
                  })}
                </div>
              </Card>
            </a>
          </List.Item>
        )}
      />
    </Style>
  );
  const renderMobile = (
    <Style>
      <div className="container-title">
        <Divider className="title-divider">Project</Divider>
      </div>
      <List
        className="list-card"
        grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            className="item"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
          >
            <a className="card" href={item.link}>
              <Card title={item.title}>
                <p className="description">{item.description}</p>
                <div className="tag-icon">
                  {item.technical.map((item) => {
                    return (
                      <Tag className="tag-name" color="#2db7f5">
                        {item}
                      </Tag>
                    );
                  })}
                </div>
              </Card>
            </a>
          </List.Item>
        )}
      />
    </Style>
  );
  return (
    <div id={SectionHome.PROJECT}>
      {isMobile && renderMobile}
      {(isTablet || isDesktop) && renderPc}
    </div>
  );
};
export default Project;
