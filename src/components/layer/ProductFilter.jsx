import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ProductFilter = ({ catTitle }) => {
  let [show, setShow] = useState(false);
  let [showheading, setShowheading] = useState(false);
  let [show2, setShow2] = useState(false);
  return (
    <div>
      <h3
        onClick={() => setShowheading(!showheading)}
        className="font-DM text-xl text-[#262626] font-bold mb-8 flex justify-between items-center"
      >
        {catTitle}
        <GoTriangleRight className={`transition-all duration-300 ${showheading?"rotate-90":"rotate-0"}`}/>
      </h3>
      {showheading && (
        <ul className="flex flex-col gap-y-5">
          <li
            className="relative overflow-hidden pb-5 border-b border-[#F0F0F0]"
            onClick={() => setShow(!show)}
          >
            <Link className="flex justify-between relative font-DM text-base leading-7 text-[#767676]">
              <span>Category 1</span>{" "}
              <FaPlus
                className={`absolute top-1/2 transition-all duration-300 translate-y-[-50%] right-0 ${
                  show ? "opacity-0 invisible" : "opacity-100 visible rotate-90"
                }`}
              />{" "}
              <FaMinus
                className={`absolute top-1/2  translate-y-[-50%] right-0 ${
                  show ? "opacity-100 visible" : "opacity-0 invisible"
                } `}
              />
            </Link>

            <ul
              className={` transition-all duration-500 
            ${show ? "static" : "absolute translate-x-[-100%] invisible"}`}
            >
              <li>
                <Link className="text-base  text-[#767676] pl-4 block">
                  Sub Category
                </Link>
              </li>
              <li>
                <Link className="text-base  text-[#767676] pl-4 block">
                  Sub Category
                </Link>
              </li>
              <li>
                <Link className="text-base  text-[#767676] pl-4 block">
                  Sub Category
                </Link>
              </li>
            </ul>
          </li>
          <li className=" pb-5 border-b border-[#F0F0F0]">
            <Link className="flex justify-between relative font-DM text-base leading-7 text-[#767676]">
              <span>Category 1</span>
            </Link>
          </li>
          <li
            className="relative overflow-hidden  pb-5 border-b border-[#F0F0F0]"
            onClick={() => setShow2(!show2)}
          >
            <Link className="flex justify-between relative font-DM text-base leading-7 text-[#767676]">
              <span>Category 1</span>{" "}
              <FaPlus
                className={`absolute top-1/2 transition-all duration-300 translate-y-[-50%] right-0 ${
                  show2
                    ? "opacity-0 invisible"
                    : "opacity-100 visible rotate-90"
                }`}
              />{" "}
              <FaMinus
                className={`absolute top-1/2  translate-y-[-50%] right-0 ${
                  show2 ? "opacity-100 visible" : "opacity-0 invisible"
                } `}
              />
            </Link>

            <ul
              className={` transition-all duration-500  flex flex-col gap-y-5
            ${show2 ? "static" : "absolute translate-x-[-100%] invisible"}`}
            >
              <li className=" pb-5 border-b border-[#F0F0F0]">
                <Link className="text-base  text-[#767676] pl-4 block">
                  Sub Category
                </Link>
              </li>
              <li className=" pb-5 border-b border-[#F0F0F0]">
                <Link className="text-base  text-[#767676] pl-4 block">
                  Sub Category
                </Link>
              </li>
              <li className=" pb-5 border-b border-[#F0F0F0]">
                <Link className="text-base  text-[#767676] pl-4 block">
                  Sub Category
                </Link>
              </li>
            </ul>
          </li>
          <li className=" pb-5 border-b border-[#F0F0F0]">
            <Link className="flex justify-between relative font-DM text-base leading-7 text-[#767676]">
              <span>Category 1</span>
            </Link>
          </li>
          <li className=" pb-5 border-b border-[#F0F0F0]">
            <Link className="flex justify-between relative font-DM text-base leading-7 text-[#767676]">
              <span>Category 1</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProductFilter