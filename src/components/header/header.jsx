import { SectionHome } from "../../configs/constant";
import { Layout, Space } from "antd";
import { Link, animateScroll as scroll } from "react-scroll";
import Style from "./style";
const Header = () => {
  console.log(SectionHome);
  const NavItem = (to, title, options) => {
    let { onClick, icon } = options || {};
    return (
      <Link
        activeClass="active"
        smooth={true}
        offset={-100}
        spy={true}
        to={to}
        duration={100}
      >
        <li>
          {icon} {title}
        </li>
      </Link>
    );
  };
  return (
    <Style className="d-flex justify-content-center">
      <div className="header">
        <ul
          className="d-flex flex-wrap justify-content-around list-header"
          style={{ listStyleType: "none" }}
        >
          {NavItem(SectionHome.HOME, "Home")}
          {NavItem(SectionHome.ABOUT, "About Me")}
          {NavItem(SectionHome.PROJECT, "Project")}
          {NavItem(SectionHome.CONTACT, "Contact")}
        </ul>
      </div>
    </Style>
  );
};
export default Header;
