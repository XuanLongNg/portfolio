"use client";
import {Avatar, Button} from "antd";
import {FacebookFilled, GithubOutlined, LinkedinFilled,} from "@ant-design/icons";
import {motion} from "framer-motion";
import HomeStyle, {HomeStyleMobile} from "@/components/page/home-page/content/home/home.style";
import useViewport from "@/hooks/common/useViewPort";
import Rive from "@rive-app/react-canvas";
import {ESectionHome} from "@/common/enums/section.enum";

const url_cv =
    "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/CV%20-%20Long%20Nguyen%20Xuan.pdf?alt=media&token=1b6eb0e6-4438-4d18-a42c-23583a69c5e4";
const introduction =
    "Welcome to my landing page! I'm a budding web developer with a strong desire to learn and grow in this fast-paced field. Although I may not have professional experience yet, I am dedicated to developing my front-end and back-end development abilities. I am eager to work on exciting projects and gain hands-on experience. Let's connect and explore the possibilities of working together!";
const Home = () => {
    const {isMobile, isTablet, isDesktop} = useViewport();
    const renderPc = (
        <HomeStyle className="d-flex flex-row">
            <div className="content d-flex flex-column">
                <Avatar
                    className="avatar"
                    style={{marginBottom: "1em"}}
                    src={'/assets/avatar.jpg'}
                    size="large"
                />

                <div className="title">
                    <img
                        src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=4000&pause=500&color=2DB7F5&width=435&lines=Hi%2C+I'm+Long.;You+wanna+find+me.;+Check+it+out."
                        alt="Typing SVG"
                    />
                </div>
                <p className="introduce">{introduction}</p>

                <div className="container-icon d-flex">
                    <motion.a
                        href="https://github.com/XuanLongNg"
                        style={{
                            color: "white",
                            // backgroundColor: "gray",
                        }}
                        whileHover={{scale: 1.2, originX: 0, originY: 0}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        target="_blank"
                    >
                        <GithubOutlined className="icon-social"/>
                    </motion.a>
                    <motion.a
                        href="https://www.facebook.com/XuanLongNXL"
                        style={{
                            color: "white",
                        }}
                        whileHover={{scale: 1.2, originX: 0, originY: 0}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        target="_blank"
                    >
                        <FacebookFilled className="icon-social"/>
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/ng-xuan-long/"
                        target="_blank"
                        style={{
                            color: "white",
                        }}
                        whileHover={{scale: 1.2, originX: 0, originY: 0}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                    >
                        <LinkedinFilled className="icon-social"/>
                    </motion.a>
                </div>
                <motion.a
                    className="motion-btn"
                    href={url_cv}
                    whileHover={{scale: 1.2, originX: 0, originY: 0}}
                    whileTap={{scale: 0.9}}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                        duration: 0.4,
                    }}
                >
                    <Button type="primary" className="btn-get-cv">
                        Get my cv
                    </Button>
                </motion.a>
            </div>

            <div className="card-image">
                <Rive src={"/assets/astronaut_final.riv"}/>
            </div>
        </HomeStyle>
    );
    const renderMobile = (
        <HomeStyleMobile className="d-flex flex-row">
            <div className="content d-flex flex-column">
                <div className="title">
                    <img
                        src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=4000&pause=500&color=2DB7F5&width=435&lines=Hi%2C+I'm+Long.;You+wanna+find+me.;+Check+it+out."
                        alt="Typing SVG"
                    />
                </div>
                <p className="introduce">{introduction}</p>
                <motion.a
                    className="motion-btn"
                    href={url_cv}
                    whileHover={{scale: 1.05, originX: 0, originY: 0}}
                    whileTap={{scale: 0.9}}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                        duration: 0.4,
                    }}
                >
                    <Button type="primary" className="btn-get-cv">
                        Get my cv
                    </Button>
                </motion.a>
                <div className="container-icon d-flex">
                    <motion.a
                        href="https://github.com/XuanLongNg"
                        style={{
                            color: "white",
                        }}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        target="_blank"
                    >
                        <GithubOutlined className="icon-social"/>
                    </motion.a>
                    <motion.a
                        href="https://www.facebook.com/XuanLongNXL"
                        style={{
                            color: "white",
                        }}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        target="_blank"
                    >
                        <FacebookFilled className="icon-social"/>
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/long-nguyen-35172623b/"
                        target="_blank"
                        style={{
                            color: "white",
                        }}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                    >
                        <LinkedinFilled className="icon-social"/>
                    </motion.a>
                </div>
            </div>
        </HomeStyleMobile>
    );
    return (
        <div style={{minHeight: "300px"}} id={ESectionHome.HOME}>
            {isMobile && renderMobile}
            {(isTablet || isDesktop) && renderPc}
        </div>
    );
};
export default Home;
