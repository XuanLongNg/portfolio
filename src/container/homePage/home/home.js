import { Avatar, Card, Image, Space, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;
const url =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/09328b69-10c8-410c-b03c-2518e32318b9_beluga.jpg?alt=media&token=a813bd79-d9cd-4017-ae34-22b4aa8abd51";
const image =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/8ac1b16c-45f7-47be-b0ab-42efd4384ad8_38787437_2182226505394320_5722229089314537472_n.jpg?alt=media&token=b66e1541-b193-43eb-8b1e-28aad81dba03";
const introduction =
  "Mục tiêu nghề nghiệp của tôi là trở thành một lập trình viên Web. Tôi muốn phát triển khả năng làm việc trên cả phía front-end và back-end của ứng dụng web để có thể xây dựng và triển khai các sản phẩm toàn diện";
const Home = () => {
  return (
    <Space size={16} wrap className="d-flex flex-row">
      <div>
        <Avatar src={url} size="large" />
        <Title>Hi, I'm Long.</Title>
        <Text>{introduction}</Text>
      </div>
      <Image width={240} src={image} />
    </Space>
  );
};
export default Home;
