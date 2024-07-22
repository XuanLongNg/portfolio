"use client";

import {Link} from "react-scroll";
import {motion} from "framer-motion";
import HeaderStyle from "@/components/page/home-page/header/header.style";
import {ESectionHome} from "@/common/enums/section.enum";

const Header = () => {
    const NavItem = (to, title, options?) => {
        let {onClick, icon} = options || {};
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
                    whileHover={{scale: [null, 1.2, 1.2]}}
                    transition={{duration: 0.4}}
                >
                    {icon} {title}
                </motion.li>
            </Link>
        );
    };
    return (
        <HeaderStyle className="d-flex justify-content-center">
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
                    style={{listStyleType: "none"}}
                >
                    {NavItem(ESectionHome.HOME, "Home")}
                    {NavItem(ESectionHome.ABOUT, "About Me")}
                    {NavItem(ESectionHome.PROJECT, "Project")}
                    {NavItem(ESectionHome.CONTACT, "Contact")}
                </motion.ul>
            </div>
        </HeaderStyle>
    );
};
export default Header;
