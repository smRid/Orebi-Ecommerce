import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import ad1 from "../assets/Ad_1.png";
import ad3 from "../assets/Ad_3.jpg";


const Sale = () => {
  return (
    <div className="pt-44">
      <Container className="flex justify-between ">
        <div className="left w-[780px]  h-[780px]">
          <Image className="w-full h-full object-contain" src={ad1} href="" />
        </div>
        <div className="left w-[780px]  h-[780px] flex flex-col justify-between">
          <div className="child w-full h-[370px] ">
            <Image className="w-full h-full object-cover" src={ad3} href="" />
          </div>
          <div className="child w-full h-[370px] ">
            <Image className="w-full h-full object-cover" src={ad3} href="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sale;
