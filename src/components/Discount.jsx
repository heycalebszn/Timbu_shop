import React from "react";
import { sneakers } from "../assets";

const Discount = () => {
  return (
    <div className="block">
    <div className="bg-red-500 w-[100%] lg:mt-[5px] flex text-center items-center justify-center py-[10px]">
        <p className="pr-[5px] text-[12px]">Get 28% Off Your First Order Today</p>
        <a href="#" className="text-[12px]">Order now!</a>
    </div>
    <div className="mt-[20px] flex justify-center items-center">
        <img className="w-[649px]" src={sneakers} width={649} alt="" />
        </div>
    </div>
  )
}

export default Discount;