import React, { useEffect, useState } from "react";

const useMobile = (breakPoint = 768) => {
  const [isMobile, setisMobile] = useState(window.innerWidth < breakPoint);


  const handleResize = () => {
    const check = window.innerWidth < breakPoint;
    setisMobile(check);
  };



  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[isMobile]);

  return [isMobile];
};
  export default useMobile;