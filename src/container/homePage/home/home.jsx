import { Avatar, Card, Image, Space, Typography } from "antd";
import Style from "./styles";
import {
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;

const url =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/09328b69-10c8-410c-b03c-2518e32318b9_beluga.jpg?alt=media&token=a813bd79-d9cd-4017-ae34-22b4aa8abd51";
const image =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/09328b69-10c8-410c-b03c-2518e32318b9_beluga.jpg?alt=media&token=a813bd79-d9cd-4017-ae34-22b4aa8abd51";
const introduction =
  "Mục tiêu nghề nghiệp của tôi là trở thành một lập trình viên Web. Tôi muốn phát triển khả năng làm việc trên cả phía front-end và back-end của ứng dụng web để có thể xây dựng và triển khai các sản phẩm toàn diện";
const Home = () => {
  return (
    <Style className="d-flex flex-row">
      <div className="content">
        <Avatar src={url} size="large" />
        <Title>Hi, I'm Long.</Title>
        <Text>{introduction}</Text>
        <div className="container-icon">
          <a href="https://github.com/XuanLongNg" target="_blank">
            <GithubOutlined className="icon" />
          </a>
          <a href="https://www.facebook.com/XuanLongNXL" target="_blank">
            <FacebookFilled className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/long-nguyen-35172623b/"
            target="_blank"
          >
            <LinkedinFilled className="icon" />
          </a>
        </div>
      </div>
      <div className="card-image">
        <Image width={240} src={image} />
      </div>
    </Style>
  );
};
export default Home;
