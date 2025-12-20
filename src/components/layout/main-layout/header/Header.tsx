"use client";

// import { Link } from "react-scroll";
import {motion} from "framer-motion";
import {ESectionHome} from "@/common/enums/section.enum";
import useScrollPosition from "@/hooks/common/useScrollPosition";
import clsx from "clsx";
import Image from "next/image";
import {useTheme} from "next-themes";
// import { MoonOutlined, SunOutlined } from "@ant-design/icons";
// import Button from "@/components/common/button/Button";
import React from "react";
import {Button} from "@/base/components/ui/button";
import SunIcon from "@/components/common/icon/sun";
import MenuIcon from "@/components/common/icon/menu";
import {TYPE_TYPOGRAPHY, Typography} from "@/base/components/ui/typography";

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
    const {theme, setTheme} = useTheme();
    const handleChangeTheme = () => {
        if (theme === "dark") setTheme("light");
        else setTheme("dark");
    };
    const classHeader = clsx(
        "flex items-center",
        {["on-scroll"]: scroll >= 150},
    );
    return (
        <div className={"!px-14 h-16 flex items-center justify-between w-screen"}>
            <motion.div
                className={
                    "flex justify-between items-center w-screen"
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
                    src={"/neil-logo-white.svg"}
                    width={100}
                    height={50}
                    alt="Logo"
                />
                <div className={"flex gap-1"}>
                    <Button variant={"ghost"} className={"rounded-[50%] w-9"}>
                        <Typography variant={TYPE_TYPOGRAPHY.P}>EN</Typography>
                    </Button>
                    <Button variant={"ghost"} className={"rounded-[50%] w-9"}>
                        <SunIcon className={"text-white"}/>
                    </Button>
                    <Button variant={"ghost"} className={"rounded-[50%] w-9"}>
                        <MenuIcon className={"text-white"}/>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};
export default Header;
