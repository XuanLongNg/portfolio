import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (window && window.scrollY) {
      const position = window.scrollY;
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
