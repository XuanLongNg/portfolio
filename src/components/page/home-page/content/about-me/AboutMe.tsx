"use client";
import AboutMeStyle from "@/components/page/home-page/content/about-me/about-me.style";
import { Col, Image, Row, Tag, Typography } from "antd";
import { ESectionHome } from "@/common/enums/section.enum";
import { useTheme } from "next-themes";
import TitleDivider from "@/components/common/title-divider/TitleDivider";

const introduction =
  "Hi there, I'm Long. I'm a 4th-year student at the Institute of Posts and Telecommunications Technology, with hands-on experience in Web Development. Over the past year, I have gained valuable experience working on various web projects, both professionally and within the IT community in Vietnam. My passion for web development has led me to explore both front-end and back-end technologies, and I am now focused on becoming a Full Stack Developer. My goal is to continue building my skills and expertise in developing and deploying comprehensive web applications that deliver value and impact.";
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
  const { theme, setTheme } = useTheme();

  return (
    <div id={ESectionHome.ABOUT}>
      <AboutMeStyle>
        <TitleDivider orientation={"left"}>About me</TitleDivider>

        <Row className="d-flex container-content">
          <Col
            lg={14}
            md={12}
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
              {introduction}
              <br />
              {skills.map((skill) => (
                <Tag key={skill.text} color={skill.color}>
                  {skill.text}
                </Tag>
              ))}
            </Typography.Text>
          </Col>
          <Col lg={10} md={12} className={"d-flex justify-content-center"}>
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
    </div>
  );
};
export default AboutMe;
