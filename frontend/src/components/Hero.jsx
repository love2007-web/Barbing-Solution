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
          <div className="flex justify-center items-center font-montserrat text-white px-5 text-center">
            <p className="text-5xl font-bold mt-[350px]">
              Cutting-Edge Styles for Modern Gentlemen
            </p>
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
          <div className="flex justify-center items-center font-montserrat text-white px-5 text-center">
            <p className="text-5xl font-bold mt-[350px]">
              Your Signature Style, Our Expertise
            </p>
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
          <div className="flex justify-center items-center font-montserrat text-white px-5 text-center">
            <p className="text-5xl font-bold mt-[350px]">
              Unleash Your Inner Swagger
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`mx-2 rounded-full w-3 h-3 ${
            currentImage === 1 ? "bg-black" : "bg-gray-400"
          }`}
          onClick={() => handleImageChange(1)}
        ></button>
        <button
          className={`mx-2 rounded-full w-3 h-3 ${
            currentImage === 2 ? "bg-black" : "bg-gray-400"
          }`}
          onClick={() => handleImageChange(2)}
        ></button>
        <button
          className={`mx-2 rounded-full w-3 h-3 ${
            currentImage === 3 ? "bg-black" : "bg-gray-400"
          }`}
          onClick={() => handleImageChange(3)}
        ></button>
      </div>
    </>
  );
};

export default Hero;
