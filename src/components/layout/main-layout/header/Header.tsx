"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import HeaderStyle from "@/components/layout/main-layout/header/header.style";
import { ESectionHome } from "@/common/enums/section.enum";
import useScrollPosition from "@/hooks/common/useScrollPosition";
import clsx from "clsx";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import Button from "@/components/common/button/Button";
import React from "react";

export interface INavItem {
  value: ESectionHome;
  label: string;
  icon?: React.ReactNode;
}
const navItems: INavItem[] = [
  {
    value: ESectionHome.HOME,
    label: "Home",
  },
  {
    value: ESectionHome.ABOUT,
    label: "About Me",
  },
  {
    value: ESectionHome.PROJECT,
    label: "Project",
  },
  {
    value: ESectionHome.EXPERIENCE,
    label: "Experience",
  },
  {
    value: ESectionHome.CONTACT,
    label: "Contact",
  },
] as const;

const Header = () => {
  const scroll = useScrollPosition();
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  const classHeader = clsx("d-flex align-items-center", {
    ["on-scroll"]: scroll >= 150,
  });
  return (
    <HeaderStyle className={classHeader}>
      <motion.div
        className={
          "d-flex justify-content-between align-items-center group-action"
        }
        animate={{
          y: ["-200%", "0%"],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5],
        }}
      >
        <Image
          src={theme === "dark" ? "/neil-logo-white.svg" : "/neil-logo.svg"}
          width={100}
          height={50}
          alt="Logo"
        />
        <div className="d-flex flex-wrap justify-content-around list-header">
          {navItems.map((item) => {
            return (
              <Link
                key={item.value}
                activeClass="active"
                smooth={true}
                offset={-100}
                spy={true}
                to={item.value}
                duration={100}
              >
                <Button className="box" type={"text"}>
                  {item.icon} {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
        <Button
          shape={"circle"}
          type={"text"}
          className={"btn-theme"}
          onClick={handleChangeTheme}
        >
          {theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
        </Button>
        {/*{view === EResponsive.MOBILE && <MenuOutlined />}*/}
      </motion.div>
    </HeaderStyle>
  );
};
export default Header;
