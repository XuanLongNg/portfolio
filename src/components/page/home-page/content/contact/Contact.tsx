"use client";
import TextArea from "antd/es/input/TextArea";
import {Button, Divider, Form, Input, notification} from "antd";
import Rive from '@rive-app/react-canvas';
import {MailOutlined} from "@ant-design/icons";
import {motion} from "framer-motion";
import ContactStyle, {ContactStyleMobile} from "@/components/page/home-page/content/contact/contact.style";
import useViewport from "@/hooks/common/useViewPort";
import sendEmail from "@/common/utils/send-mail.util";
import {RegexEmail} from "@/common/utils/string.util";
import {ESectionHome} from "@/common/enums/section.enum";

const description =
    "I'm available for freelance work. Connect with me via the social networking sites or by email below. If you have a question or want to say hi, please fill in the form below and submit it, I'll try my best to get back to you!";
const email = "ngxuanlong2002@gmail.com";
const Contact = () => {
    const {isMobile, isTablet, isDesktop} = useViewport();

    const onFinish = async (value) => {
        const isSuccess = sendEmail(value);
        if (isSuccess)
            notification.success({
                message: "Success!",
                style: {zIndex: 1000, marginTop: "4em"},
            });
        else
            notification.error({
                message: "Server error!",
                style: {zIndex: 1000, marginTop: "4em"},
            });
    };
    const renderPc = (
        <ContactStyle>
            <div className="container-title">
                <Divider className="title-divider">Contact me</Divider>
            </div>

            <div className="d-flex container">
                <div className="animation">
                    <Rive src={"/assets/astronaut_with_moon_final.riv"}/>
                </div>
                <div className="send-message">
                    <p className="description">{description}</p>
                    <MailOutlined className="icon-email"/> Email: {email}
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
                            rules={[{required: true, message: "Please enter something"}]}
                        >
                            <Input placeholder="Name"/>
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
                            <Input placeholder="Email"/>
                        </Form.Item>
                        <Form.Item
                            name="subject"
                            rules={[{required: true, message: "Please enter something"}]}
                        >
                            <Input placeholder="Subject"/>
                        </Form.Item>
                        <Form.Item
                            name="message"
                            rules={[{required: true, message: "Please enter something"}]}
                        >
                            <TextArea placeholder="Message" rows={4}/>
                        </Form.Item>
                        <Form.Item className="d-flex flex-row-reverse">
                            <motion.div
                                whileHover={{scale: 1.2, translate: "-10%"}}
                                whileTap={{scale: 0.9}}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                    duration: 0.4,
                                }}
                            >
                                <Button type="primary" className="btn-send" htmlType="submit">
                                    Send messages
                                </Button>
                            </motion.div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ContactStyle>
    );
    const renderMobile = (
        <ContactStyleMobile>
            <div className="container-title">
                <Divider className="title-divider">Contact me</Divider>
            </div>
            <div className=" container">
                <div className="animation">
                    <Rive src={"/assets/astronaut_with_moon_final.riv"}/>
                </div>
                <div className="send-message">
                    <p className="description">{description}</p>
                    <MailOutlined className="icon-email"/> Email: {email}
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
                            rules={[{required: true, message: "Please enter something"}]}
                        >
                            <Input placeholder="Name"/>
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
                            <Input placeholder="Email"/>
                        </Form.Item>
                        <Form.Item
                            name="subject"
                            rules={[{required: true, message: "Please enter something"}]}
                        >
                            <Input placeholder="Subject"/>
                        </Form.Item>
                        <Form.Item
                            name="message"
                            rules={[{required: true, message: "Please enter something"}]}
                        >
                            <TextArea placeholder="Message" rows={4}/>
                        </Form.Item>
                        <Form.Item className="d-flex flex-row-reverse">
                            <Button type="primary" className="btn-send" htmlType="submit">
                                Send messages
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ContactStyleMobile>
    );
    return (
        <div id={ESectionHome.CONTACT}>
            {isMobile && renderMobile}
            {(isTablet || isDesktop) && renderPc}
        </div>
    );
};

export default Contact;
