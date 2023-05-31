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
      technical: [
        "Typescript",
        "ReactJs",
        "NodeJs",
        "ExpressJs",
        "Ant Design",
        "Firebase Realtime",
      ],
    },
    {
      title: "React Portfolio",
      description: "The Portfolio project built with react",
      link: "https://github.com/XuanLongNg/portfolio.git",
      technical: ["React", "Rive", "Ant Design"],
    },
    {
      title: "Fireboy & Watergirl",
      description:
        "Project clone of Fireboy & Watergirl game with main functions and map creation function",
      link: "https://github.com/XuanLongNg/Fireboy-and-Watergirl.git",
      technical: ["Python", "Pygame"],
    },
  ]);
  return (
    <Style id={SectionHome.PROJECT}>
      <div className="container-title">
        <Divider className="title-divider">Project</Divider>
      </div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <a href={item.link}>
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
      <div data-aos="fade-down" data-aos-easing="ease-in-out">
        <p>Hello</p>
      </div>
    </Style>
  );
};
export default Project;
