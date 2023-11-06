import React, { useState, useEffect } from "react";
import slider1 from "../images/slider01.jpg";
import slider2 from "../images/slider02.jpg";
import slider3 from "../images/slider03.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        if (prevImage === 1) {
          return 2;
        } else if (prevImage === 2) {
          return 3;
        } else {
          return 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="w-[414px] h-screen left-[414px] abosolute overflow-hidden"
          style={{
            display: currentImage === 1 ? "block" : "none",
            zIndex: currentImage === 1 ? "2" : "0",
          }}
        >
          <img
            src={slider1}
            className="absolute left-[-508.605px] top-[0px] z-[-1] max-w-none h-[896px] w-[1431.21px] md:left-0"
            alt=""
          />
        </div>
        <div
          className="w-[414px] h-screen left-[414px] abosolute overflow-hidden"
          style={{
            display: currentImage === 2 ? "block" : "none",
            zIndex: currentImage === 1 ? "2" : "0",
          }}
        >
          <img
            src={slider2}
            className="absolute left-[-508.605px] top-[0px] z-[-1] max-w-none h-[896px] w-[1431.21px] md:left-0"
            alt=""
          />
        </div>
        <div
          className="w-[414px] h-screen left-[414px] abosolute overflow-hidden"
          style={{
            display: currentImage === 3 ? "block" : "none",
            zIndex: currentImage === 1 ? "2" : "0",
          }}
        >
          <img
            src={slider3}
            className="absolute left-[-508.605px] top-[0px] z-[-1] max-w-none h-[896px] w-[1431.21px] md:left-0"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
