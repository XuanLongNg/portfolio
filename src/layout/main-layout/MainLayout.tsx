"use client";
import MainLayoutStyle from "@/layout/main-layout/main-layout.style";
import Header from "@/components/page/home-page/header/Header";
import Body from "@/components/page/home-page/content/Content";
import Footer from "@/components/page/home-page/footer/Footer";

const MainLayout = ({children}) => {
    return (
        <MainLayoutStyle>
            <Header className="header"/>
            <Body/>
            {children}
            <Footer/>
        </MainLayoutStyle>
    );
};
export default MainLayout;
