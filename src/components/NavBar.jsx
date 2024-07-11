import React from "react";
import { logo } from "../assets";
import { NavLinks } from "../constants";
import { Search, Heart, ShoppingBag} from "lucide-react";
import Discount from "./Discount";

const NavBar = () => {
  return (
    <section className="flex flex-col">
        <div className="flex justify-between items-center bg-red-300 p-[10px]">
            <img className="" src={logo} width={100} alt="Logo" />
            <div>
                <ul className="lg:flex hidden">
                    {NavLinks.map((NavLinks) => (
                        <li key={NavLinks.id} className="pl-[30px] text-[12px]"><a href="" className="">{NavLinks.title}</a></li>
                    ))}
                </ul>
            </div>
            <div className="flex lg:relative">
                <Search className="lg:absolute right-[220px] top-[6px] z-10 font-bold" size={12} />
                <input className="rounded-[50px] w-[150px] px-[10px] pl-[25px] text-[10px] border-none outline-none relative z-0 py-[5px] font-bold lg:flex hidden" placeholder="Search" type="search" />

                <div className="flex ml-[50px] items-center">
                    <Heart className="ml-[10px]" size={15} />
                    <ShoppingBag className="ml-[10px]" size={15} />
                </div>
            </div>
        </div>

        <Discount />
    </section>
  )
}

export default NavBar;