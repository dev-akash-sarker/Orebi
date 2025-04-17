"use client";
import Image from "next/image";
import React from "react";
import { FaCartShopping, FaCodeCompare, FaHeart } from "react-icons/fa6";

export default function Newarrivel() {
  return (
    <>
      <div className="container mx-auto">
        <div className="px-0 lg:px-40  pt-[30px] pb-[29px]">
          <h3 className=" font-bold text-[39px] text-text-bold mb-12">
            New arrivel
          </h3>
          <div>
            <div className=" w-[370] h-[465] bg-white">
              <Image
                src={"/newarrivel/p1.png"}
                width={370}
                height={370}
                alt="abc"
              />
              <div className=" relative">
                <div className="flex justify-between items-center mt-6 relative group">
                  <p className=" text-[20px] font-bold">Basic Crew Neck Tee</p>
                  <p className=" font-normal text-base leading-[30px] text-nonactive">
                    $44.00
                  </p>
                  <div className=" absolute -top-[152px] left-0 w-full opacity-0 group-hover:opacity-100 bg-white h-[152px] transition-all duration-300 ease-in-out">
                    <nav className="py-6 pr-7">
                      <ul className=" font-normal text-base flex flex-col text-right text-nonactive cursor-pointer gap-5">
                        <li className=" flex justify-end items-center gap-5 hover:font-bold hover:text-text-bold">
                          Add to Wish List <FaHeart color="black" />
                        </li>
                        <li className=" flex justify-end items-center gap-5 hover:font-bold hover:text-text-bold">
                          Compare <FaCodeCompare color="black" />
                        </li>
                        <li className=" flex justify-end items-center gap-5 hover:font-bold hover:text-text-bold">
                          Add to Cart <FaCartShopping color="black" />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <p className=" font-normal text-nonactive text-base">Black</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
