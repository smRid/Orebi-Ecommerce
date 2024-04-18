import React from "react";
import p1 from "../../assets/p1.jpg";
import { FaHeart } from "react-icons/fa";

const ProductItem = ({ offer , className}) => {
  return (
    <div className={`w-[370px] group  ${className}`}>
      <div className="image w-full h-[370px] bg-slate-300 relative overflow-hidden">
        <img className="w-full h-full object-cover" src={p1} alt="" />
        <button className={`absolute left-3 top-3 bg-gray-900 text-gray-200 ${offer ?"px-7":"px-0"} py-2`}>
          {offer}
        </button>
        <div className="overlay w-full py-4 bg-white absolute bottom-0 translate-y-[100%] left-0  group-hover:translate-y-[0] transition-all duration-300">
          <ul>
            <li className="flex items-center justify-end gap-x-3 px-3 text-gray-600 font-semibold hover:text-[#262626] cursor-pointer">
              Add to Wish List <FaHeart className="text-[#262626]" />
            </li>
            <li className="flex items-center justify-end gap-x-3 px-3 text-gray-600 font-semibold hover:text-[#262626] cursor-pointer">
              Compare <FaHeart className="text-[#262626]" />
            </li>
            <li className="flex items-center justify-end gap-x-3 px-3 text-gray-600 font-semibold hover:text-[#262626] cursor-pointer">
              Add to Cart <FaHeart className="text-[#262626]" />
            </li>
          </ul>
        </div>
      </div>

      <div className="text bg-slate-200 p-3">
        <h2 className="flex justify-between font-semibold">
          Basic Crew Neck Tee <p className="text-gray-600">$44.00</p>
        </h2>
        <p>Black</p>
      </div>
    </div>
  );
};

export default ProductItem;
