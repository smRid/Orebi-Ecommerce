import React, { useState } from 'react'
import Container from './layer/Container'
import Slider from 'react-slick';
import Image from './layer/Image';

const Banner = () => {

  let [active, setActive] = useState(0)

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next)=>{
      setActive(next);
    },

    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={

          i == active ? {
            color: "#262626",
            borderRight: "2px #262626 solid",
            padding: "9px 10px 9px 0"
          } : 
          {
            color: "transparent",
            borderRight: "2px white solid",
            padding: "9px 10px 9px 0"
          }

          }
      >
        0{i + 1}
      </div>
    )
  };

  return (
    <div>
      <Slider {...settings}>
      <div className=' bg-slate-400'>
        <Image className="w-full" src="src/assets/banner.jpg" href="#" />
      </div>
      <div className=' bg-slate-400'>
        <Image className="w-full" src="src/assets/banner.jpg" href="#" />
      </div>
      <div className=' bg-slate-400'>
        <Image className="w-full" src="src/assets/banner.jpg" href="#" />
      </div>

    </Slider>
    </div>
  )
}

export default Banner