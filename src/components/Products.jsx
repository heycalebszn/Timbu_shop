import React from 'react'
import { products } from '../constants'
import { Star, ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <section className="ml-[100px] mt-[10px]">
            <div>
                {products.map((products) => (
                    <div key={products.id} className="">
                        <img className="w-[150px] px-0 py-0 m-0 bg-red-300" src={products.image} alt={products.name} />
                        <h3 className="text-[12px] font-[700] mt-[10px]">{products.title}</h3>
                        <div className="flex items-center mt-[5px]">
                        <p className="text-[12px]">{products.price}</p>
                        <span className="ml-[10px]"><ArrowRight size={12} fontWeight={900} /></span>
                        </div>
                        <div className="flex mt-[10px]">
                        <span className="flex gap-2">
                          <Star className="" size={12} />
                          <Star size={12} />
                          <Star size={12} />
                          <Star size={12} />
                          </span>
                        </div>
                    </div>
                ))}
            </div>
    </section>
  )
}

export default Products;