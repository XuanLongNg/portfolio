import TextArea from "antd/es/input/TextArea";
import { SectionHome } from "../../../configs/constant";
import Style from "./style";
import { Button, Divider, Form, Image, Input } from "antd";
import Rive from "rive-react";
import riveAnimation from "../../../assets/astronaut_with_moon_final.riv";
import { MailOutlined } from "@ant-design/icons";
import useViewport from "../../../hooks/useViewport";
import { useState } from "react";
const description =
  "I'm available for freelance work. Connect with me via the social networking sites or by email below. If you have a question or want to say hi, please fill in the form below and submit it, I'll try my best to get back to you!";
const email = "ngxuanlong2002@gmail.com";
const Contact = () => {
  const viewPort = useViewport();
  const [device, setDevice] = useState(
    viewPort.width < 768
      ? "mobile"
      : viewPort.width >= 768 && viewPort.width <= 1024
      ? "tablet"
      : "desktop"
  );
  const renderPc = (
    <div className="d-flex container">
      <div className="animation">
        <Rive src={riveAnimation} />
      </div>
      <div className="send-message">
        <p>{description}</p>
        <MailOutlined className="icon-email" /> Email: {email}
        <Form
          className="form-send-message"
          labelCol={{
            span: 16,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item>
            <TextArea placeholder="Message" rows={4} />
          </Form.Item>
          <Form.Item className="d-flex flex-row-reverse">
            <Button type="primary" className="btn-send">
              Send messages
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
  const renderMobile = (
    <div className=" container">
      <div className="animation">
        <Rive src={riveAnimation} />
      </div>
      <div className="send-message">
        <p>{description}</p>
        <MailOutlined className="icon-email" /> Email: {email}
        <Form
          className="form-send-message"
          labelCol={{
            span: 16,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item>
            <TextArea placeholder="Message" rows={4} />
          </Form.Item>
          <Form.Item className="d-flex flex-row-reverse">
            <Button type="primary" className="btn-send">
              Send messages
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
  return (
    <Style id={SectionHome.CONTACT}>
      <div className="container-title">
        <Divider className="title-divider">Contact me</Divider>
      </div>
      {(device === "desktop" || device === "tablet") && renderPc}
      {device === "mobile" && renderMobile}
    </Style>
  );
};

export default Contact;
