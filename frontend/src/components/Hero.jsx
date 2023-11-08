import React, { useState, useEffect } from "react";
import slider2 from "../images/slider01.jpg";
import slider1 from "../images/slider02.jpg";
import slider3 from "../images/slider03.jpg";
import '../styles/hero.css'

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

  const handleImageChange = (imageNumber) => {
    setCurrentImage(imageNumber);
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="w-[414px] h-screen left-[414px] abosolute items-center overflow-hidden"
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
          <div className="flex justify-center items-center absolute top-1/3 text-white px-1 text-center">
            <div>
              <p className="text-5xl font-bold mt-[] font-montez">
                Cutting-Edge Styles for Modern Gentlemen
              </p>
              <button className="mt-10 border border-white px-4 py-2 pointer tracking-wider">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[414px] h-screen left-[414px] abosolute overflow-hidden"
          style={{
            display: currentImage === 2 ? "block" : "none",
            zIndex: currentImage === 2 ? "2" : "0",
          }}
        >
          <img
            src={slider2}
            className="absolute left-[-508.605px] top-[0px] z-[-1] max-w-none h-[896px] w-[1431.21px] md:left-0"
            alt=""
          />
          <div className="flex justify-center items-center absolute top-[40%] text-white px-1 text-center">
            <div>
              <p className="text-5xl font-bold mt-[] font-montez">
                Your Signature Style, Our Expertise
              </p>
              <button className="mt-10 border border-white px-4 py-2 pointer tracking-wider">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[414px] h-screen left-[414px] abosolute overflow-hidden"
          style={{
            display: currentImage === 3 ? "block" : "none",
            zIndex: currentImage === 3 ? "2" : "0",
          }}
        >
          <img
            src={slider3}
            className="absolute left-[-508.605px] top-[0px] z-[-1] max-w-none h-[896px] w-[1431.21px] md:left-0"
            alt=""
          />
          <div className="flex justify-center text-white absolute top-1/3 px-1 text-center">
            <div>
              <p className="text-5xl font-bold mt-[] font-montez">
                Unleash Your Inner Swagger
              </p>
              <button className="mt-10 border border-white px-4 py-2 pointer tracking-wider">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-4 absolute bottom-3">
            <button
              className={`mx-2 rounded-full border-2 border-white w-3 h-3 ${
                currentImage === 1 ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => handleImageChange(1)}
            ></button>
            <button
              className={`mx-2 rounded-full border-2 border-white w-3 h-3 ${
                currentImage === 2 ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => handleImageChange(2)}
            ></button>
            <button
              className={`mx-2 rounded-full border-2 border-white w-3 h-3 ${
                currentImage === 3 ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => handleImageChange(3)}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
