import { Divider } from "antd";
import Style from "./style";
import { SectionHome } from "../../../configs/constant";

const Project = () => {
  return (
    <Style id={SectionHome.PROJECT}>
      <div className="container-title">
        <Divider className="title-divider">Project</Divider>
      </div>
      <div data-aos="fade-down" data-aos-easing="ease-in-out">
        <p>Hello</p>
      </div>
    </Style>
  );
};
export default Project;
