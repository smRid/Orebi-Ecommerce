import React from 'react'
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
const ProductPageTop = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="icon flex items-center gap-x-5">
        <div className="w-9 h-9 border border-[#F0F0F0] flex justify-center items-center text-[#737373] hover:bg-[#262626] hover:text-[#FFFFFF] cursor-pointer transition-all duration-300">
          <IoGrid />
        </div>
        <div className="w-9 h-9 border border-[#F0F0F0] flex justify-center items-center text-[#737373] hover:bg-[#262626] hover:text-[#FFFFFF] cursor-pointer transition-all duration-300">
          <FaThList />
        </div>
      </div>
      <div className="right">
        <label className=" font-DM text-base text-[#767676]" for="">
          Sort by:
        </label>
        <select
          name=""
          id=""
          className="w-[239px] py-1 px-5 text-base leading-7 outline-none border border-[#F0F0F0] bg-transparent text-[#767676]"
        >
          <option className="p-7 bg-[#262626]" value="Featured">
            Featured
          </option>
          <option className="p-7 bg-[#262626]" value="Featured">
            Featured
          </option>
          <option className="p-7 bg-[#262626]" value="Featured">
            Featured
          </option>
          <option className="p-7 bg-[#262626]" value="Featured">
            Featured
          </option>
        </select>
        <label className="font-DM text-base text-[#767676]" for="">
          Show:
        </label>
        <select
          name=""
          id=""
          className="w-[139px] py-1 px-5 text-base leading-7 outline-none border border-[#F0F0F0] bg-transparent text-[#767676]"
        >
          <option className="p-7 bg-[#262626]" value="Featured">
            12
          </option>
          <option className="p-7 bg-[#262626]" value="Featured">
            24
          </option>
          <option className="p-7 bg-[#262626]" value="Featured">
            36
          </option>
        </select>
      </div>
    </div>
  );
}

export default ProductPageTop