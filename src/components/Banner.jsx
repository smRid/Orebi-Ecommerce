import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "./layer/Image";

const Banner = () => {
  let [active, setActive] = useState(0);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i == active
            ? {
                color: "#262626",
                borderRight: "2px #262626 solid",
                padding: "9px 10px 9px 0",
              }
            : {
                color: "transparent",
                borderRight: "2px white solid",
                padding: "9px 10px 9px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 600,
        settings: {},
      },
      {
        breakpoint: 480,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "20px",
                transform: "translateX(-50%)",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`text-xs ${
                i == active
                  ? "text-[#262626] border-b-2 border-[#262626] px-1.5 pb-1"
                  : "text-transparent border-b-2 border-[#ffffff] px-1.5 pb-1"
              }`}
              
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="  text-center">
          <Image className="w-full" src="src/assets/banner.jpg" href="#" />
        </div>
        <div className="  text-center">
          <Image className="w-full" src="src/assets/banner.jpg" href="#" />
        </div>
        <div className="  text-center">
          <Image className="w-full" src="src/assets/banner.jpg" href="#" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
