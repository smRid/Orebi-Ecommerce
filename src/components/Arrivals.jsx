import React from "react";
import Container from "./layer/Container";
import ProductItem from "./layer/ProductItem";
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft  } from "react-icons/fa";
import Title from "./layer/Title";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute right-5 top-1/2 translate-y-[-50%] rounded-full bg-[#c7c7c7] !flex justify-center items-center'
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
        <FaLongArrowAltRight/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute left-5 top-1/2 translate-y-[-50%] rounded-full bg-[#c7c7c7] !flex justify-center items-center z-10'
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
        <FaLongArrowAltLeft />
    </div>
  );
}



const Arrivals = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="pt-32">
      <Container>
        <Title text='New Arrivals'/>
      </Container>

      <Container className='max-w-[1640px]'>
      <div>
        <Slider {...settings}>
          <div>
          <ProductItem className='mx-auto' offer='10%'/>
          </div>
          <div>
          <ProductItem className='mx-auto' offer='New'/>
          </div>
          <div>
          <ProductItem className='mx-auto' offer='15%'/>
          </div>
          <div>
          <ProductItem className='mx-auto' offer='New'/>
          </div>
          <div>
          <ProductItem className='mx-auto' offer='50%'/>
          </div>
        </Slider>
      </div>
      </Container>

    </div>
  );
};

export default Arrivals;
