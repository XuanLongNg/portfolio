import { SectionHome } from "../../configs/constant";
import { Layout, Space } from "antd";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import Style from "./style";
const Header = () => {
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
        <motion.li
          className="box"
          whileHover={{ scale: [null, 1.2, 1.2] }}
          transition={{ duration: 0.4 }}
        >
          {icon} {title}
        </motion.li>
      </Link>
    );
  };
  return (
    <Style className="d-flex justify-content-center">
      <div className="header">
        <motion.ul
          className="d-flex flex-wrap justify-content-around list-header"
          animate={{
            // scale: [2, 1.5, 1],
            y: ["-200%", "0%"],
            opacity: [0, 1, 1],
            // width: ["200%", "150%", "100%"],
            // height: ["50em", "40em", "3em"],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5],
          }}
          style={{ listStyleType: "none" }}
        >
          {NavItem(SectionHome.HOME, "Home")}
          {NavItem(SectionHome.ABOUT, "About Me")}
          {NavItem(SectionHome.PROJECT, "Project")}
          {NavItem(SectionHome.CONTACT, "Contact")}
        </motion.ul>
      </div>
    </Style>
  );
};
export default Header;
