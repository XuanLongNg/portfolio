import TextArea from "antd/es/input/TextArea";
import { SectionHome } from "../../../configs/constant";
import Style, { StyleMobile } from "./style";
import { Button, Divider, Form, Image, Input, notification } from "antd";
import Rive from "rive-react";
import riveAnimation from "../../../assets/astronaut_with_moon_final.riv";
import { MailOutlined } from "@ant-design/icons";
import useViewport from "../../../hooks/useViewport";
import { useEffect, useState } from "react";
import { RegexEmail } from "../../../utils/regexEmail";
import sendEmail from "../../../utils/nodemail";
const description =
  "I'm available for freelance work. Connect with me via the social networking sites or by email below. If you have a question or want to say hi, please fill in the form below and submit it, I'll try my best to get back to you!";
const email = "ngxuanlong2002@gmail.com";
const Contact = () => {
  const { isMobile, isTablet, isDesktop } = useViewport();

  const onFinish = async (value) => {
    console.log(value);
    sendEmail(value);
    notification.success({
      message: "Success!",
      style: { zIndex: 1000, marginTop: "4em" },
    });
  };
  const renderPc = (
    <Style>
      <div className="container-title">
        <Divider className="title-divider">Contact me</Divider>
      </div>

      <div className="d-flex container">
        <div className="animation">
          <Rive src={riveAnimation} />
        </div>
        <div className="send-message">
          <p className="description">{description}</p>
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
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter something" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter something",
                },
                {
                  pattern: RegexEmail,
                  message: "Your email address is invalid",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="subject"
              rules={[{ required: true, message: "Please enter something" }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "Please enter something" }]}
            >
              <TextArea placeholder="Message" rows={4} />
            </Form.Item>
            <Form.Item className="d-flex flex-row-reverse">
              <Button type="primary" className="btn-send" htmlType="submit">
                Send messages
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Style>
  );
  const renderMobile = (
    <StyleMobile>
      <div className="container-title">
        <Divider className="title-divider">Contact me</Divider>
      </div>
      <div className=" container">
        <div className="animation">
          <Rive src={riveAnimation} />
        </div>
        <div className="send-message">
          <p className="description">{description}</p>
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
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter something" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter something",
                },
                {
                  pattern: RegexEmail,
                  message: "Your email address is invalid",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="subject"
              rules={[{ required: true, message: "Please enter something" }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "Please enter something" }]}
            >
              <TextArea placeholder="Message" rows={4} />
            </Form.Item>
            <Form.Item className="d-flex flex-row-reverse">
              <Button type="primary" className="btn-send" htmlType="submit">
                Send messages
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StyleMobile>
  );
  return (
    <div id={SectionHome.CONTACT}>
      {isMobile && renderMobile}
      {(isTablet || isDesktop) && renderPc}
    </div>
  );
};

export default Contact;
