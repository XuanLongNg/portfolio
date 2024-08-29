import { useEffect, useState } from "react";
import { EResponsive } from "@/common/enums/responsive.enum";
import { responsiveConstant } from "@/common/constants/responsive.constant";

const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    view: EResponsive.DESKTOP,
  });

  const handleWindowResize = () => {
    setViewport((prevState) => ({
      ...prevState,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  };

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const { width } = viewport;
    let view;

    Object.keys(responsiveConstant).map((key) => {
      if (
        width > responsiveConstant[key].min &&
        width <= responsiveConstant[key].max
      ) {
        view = key;
      }
    });

    setViewport((prevState) => ({
      ...prevState,
      view,
    }));
  }, [viewport.width]);

  return viewport;
};

export default useViewport;
