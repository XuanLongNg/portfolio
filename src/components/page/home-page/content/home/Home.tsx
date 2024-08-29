"use client";
import HomeStyle from "@/components/page/home-page/content/home/home.style";
import useViewport from "@/hooks/common/useViewPort";
import Rive from "@rive-app/react-canvas";
import { ESectionHome } from "@/common/enums/section.enum";
import { useTheme } from "next-themes";
import {
  COLOR_TEXT_HIGH_LIGHT_DARK,
  COLOR_TEXT_HIGH_LIGHT_LIGHT,
} from "@/common/constants/colors.constant";

const url_cv =
  "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/CV%20-%20Long%20Nguyen%20Xuan.pdf?alt=media&token=1b6eb0e6-4438-4d18-a42c-23583a69c5e4";
const introduction =
  "Welcome to my landing page! I'm a budding web developer with a strong desire to learn and grow in this fast-paced field. Although I may not have professional experience yet, I am dedicated to developing my front-end and back-end development abilities. I am eager to work on exciting projects and gain hands-on experience. Let's connect and explore the possibilities of working together!";
const Home = () => {
  const { theme, setTheme } = useTheme();
  const getSrcSvg = (color) => {
    const colorWithoutSharp = color.substring(1);
    return `https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=4000&pause=500&color=${colorWithoutSharp}&center=true&width=435&lines=Hi%2C+I'm+Long.;You+wanna+find+me.;+Check+it+out.`;
  };
  const { view } = useViewport();

  return (
    <div id={ESectionHome.HOME}>
      <HomeStyle className="d-flex flex-column align-items-center">
        <div className="card-image">
          {theme === "light" && (
            <Rive
              data-hide-on-theme={"dark"}
              src={"/assets/astronaut_light.riv"}
            />
          )}
          {theme === "dark" && (
            <Rive
              data-hide-on-theme={"light"}
              src={"/assets/astronaut_dark.riv"}
            />
          )}
        </div>
        <div className="title">
          <img
            src={getSrcSvg(
              theme === "dark"
                ? COLOR_TEXT_HIGH_LIGHT_DARK
                : COLOR_TEXT_HIGH_LIGHT_LIGHT,
            )}
            alt="Typing SVG"
          />
        </div>
      </HomeStyle>
    </div>
  );
};
export default Home;
