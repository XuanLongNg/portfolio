"use client";
import {Layout} from "antd";
import AboutMe from "@/components/page/home-page/content/about-me/AboutMe";
import Project from "@/components/page/home-page/content/project/Project";
import Contact from "@/components/page/home-page/content/contact/Contact";
import Home from "@/components/page/home-page/content/home/Home";

const Body = () => {
    return (
        <Layout.Content>
            <Home/>
            <AboutMe/>
            <Project/>
            <Contact/>
        </Layout.Content>
    );
};
export default Body;
