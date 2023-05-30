import { Layout } from "antd";
import Home from "../../container/homePage/home/home";
import AboutMe from "../../container/homePage/aboutMe/aboutMe";
import Project from "../../container/homePage/project/Project";
import Contact from "../../container/homePage/contact/contact";

const Body = () => {
  return (
    <Layout.Content>
      <Home />
      <AboutMe />
      <Project />
      <Contact />
    </Layout.Content>
  );
};
export default Body;
