import { Card, Divider, List, Tag } from "antd";
import Style from "./style";
import { SectionHome } from "../../../configs/constant";
import { useState } from "react";

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
  return (
    <Style id={SectionHome.PROJECT}>
      <div className="container-title">
        <Divider className="title-divider">Project</Divider>
      </div>
      <List
        className="list-card"
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            className="item"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
          >
            <a className="card" href={item.link}>
              <Card title={item.title}>
                {item.description}
                <br />
                {item.technical.map((item) => {
                  return <Tag color="#2db7f5">{item}</Tag>;
                })}
              </Card>
            </a>
          </List.Item>
        )}
      />
    </Style>
  );
};
export default Project;
