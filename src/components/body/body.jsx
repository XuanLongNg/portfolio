import { Layout } from "antd";
import Home from "../../container/homePage/home/home";
import AboutMe from "../../container/homePage/aboutMe/aboutMe";
import Project from "../../container/homePage/project/Project";

const Body = () => {
  return (
    <Layout.Content>
      <Home />
      <AboutMe />
      <Project />
    </Layout.Content>
  );
};
export default Body;
