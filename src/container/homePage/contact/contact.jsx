import TextArea from "antd/es/input/TextArea";
import { SectionHome } from "../../../configs/constant";
import Style from "./style";
import { Button, Divider, Form, Image, Input } from "antd";
const Contact = () => {
  return (
    <Style id={SectionHome.CONTACT}>
      <div className="container-title">
        <Divider className="title-divider">Contact</Divider>
      </div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Subject">
          <Input />
        </Form.Item>
        <Form.Item label="Message">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button>Send a message</Button>
        </Form.Item>
      </Form>
    </Style>
  );
};

export default Contact;
