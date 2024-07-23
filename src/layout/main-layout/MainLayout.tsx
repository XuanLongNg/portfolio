"use client";
import MainLayoutStyle from "@/layout/main-layout/main-layout.style";
import Header from "@/components/layout/main-layout/header/Header";
import Footer from "@/components/layout/main-layout/footer/Footer";
import { Layout } from "antd";
import Decorator from "@/components/layout/main-layout/decorator/Decorator";
import Mail from "@/components/layout/main-layout/mail/Mail";

const { Content } = Layout;
const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyle>
      <Header className="header" />
      <Decorator className="decorator" />
      <Mail className="mail" />
      <Content>{children}</Content>
      <Footer />
    </MainLayoutStyle>
  );
};
export default MainLayout;
