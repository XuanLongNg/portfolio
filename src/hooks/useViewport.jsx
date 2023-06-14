import { useEffect, useState } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const handleWindowResize = () => {
    setViewport((prevState) => ({
      ...prevState,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  };

  useEffect(() => {
    handleWindowResize(); // Lấy kích thước viewport ban đầu

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const { width } = viewport;

    const isMobile = width <= 480;
    const isTablet = width > 480 && width <= 768;
    const isDesktop = width > 768;

    setViewport((prevState) => ({
      ...prevState,
      isMobile,
      isTablet,
      isDesktop,
    }));
  }, [viewport.width]);

  return viewport;
};

export default useViewport;
