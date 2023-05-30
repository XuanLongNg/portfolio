import { Avatar, Card, Image, Typography } from "antd";
import Style from "./styles";
import {
  GithubOutlined,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { SectionHome } from "../../../configs/constant";
import Rive from "rive-react";
import riveAnimation from "../../../assets/astronauta.riv";
import riveAnimation1 from "../../../assets/new_file.riv";
import { motion } from "framer-motion";
const { Title, Paragraph, Text } = Typography;
const url =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/09328b69-10c8-410c-b03c-2518e32318b9_beluga.jpg?alt=media&token=a813bd79-d9cd-4017-ae34-22b4aa8abd51";
const image =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/09328b69-10c8-410c-b03c-2518e32318b9_beluga.jpg?alt=media&token=a813bd79-d9cd-4017-ae34-22b4aa8abd51";
const introduction =
  "Mục tiêu nghề nghiệp của tôi là trở thành một lập trình viên Web. Tôi muốn phát triển khả năng làm việc trên cả phía front-end và back-end của ứng dụng web để có thể xây dựng và triển khai các sản phẩm toàn diện";
const Home = () => {
  return (
    <Style id={SectionHome.HOME} className="d-flex flex-row">
      <div className="content">
        <Avatar src={url} size="large" />
        <Title>Hi, I'm Long.</Title>
        <Text>{introduction}</Text>
        <div className="container-icon">
          <motion.a
            href="https://github.com/XuanLongNg"
            style={{
              color: "white",
              // backgroundColor: "gray",
            }}
            className="icon box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            target="_blank"
          >
            <GithubOutlined className="icon" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/XuanLongNXL"
            style={{
              color: "white",
              // backgroundColor: "gray",
            }}
            className="icon box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            target="_blank"
          >
            <FacebookFilled className="icon" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/long-nguyen-35172623b/"
            target="_blank"
            style={{
              color: "white",
              // backgroundColor: "gray",
            }}
            className="icon box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <LinkedinFilled className="icon" />
          </motion.a>
        </div>
      </div>
      <div className="card-image">
        <Rive src={riveAnimation} />
      </div>
    </Style>
  );
};
export default Home;
