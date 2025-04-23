import Image from "next/image";
import React from "react";
import { FaCartShopping, FaCodeCompare, FaHeart } from "react-icons/fa6";

// Define props interface
interface ProductCardProps {
  title: string;
  price: string;
  url?: string | undefined;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, url }) => {
  return (
    <div className="w-full bg-white p-2 max-w-[370px] mx-auto">
      <Image
        // src="/newarrivel/p1.png"
        src={url}
        width={370}
        height={370}
        alt="Product"
        className="mx-auto"
      />
      <div className="relative">
        <div className="flex justify-between items-center mt-6 relative group">
          <p className="text-[20px] font-bold">{title}</p>
          <p className="font-normal text-base text-nonactive">${price}</p>
          <div className="absolute -top-[152px] left-0 w-full opacity-0 group-hover:opacity-100 bg-white h-[152px] transition-all duration-300 ease-in-out z-10">
            <nav className="py-6 pr-7">
              <ul className="font-normal text-base flex flex-col text-right text-nonactive cursor-pointer gap-5">
                <li className="flex justify-end items-center gap-5 hover:font-bold hover:text-text-bold">
                  Add to Wish List <FaHeart />
                </li>
                <li className="flex justify-end items-center gap-5 hover:font-bold hover:text-text-bold">
                  Compare <FaCodeCompare />
                </li>
                <li className="flex justify-end items-center gap-5 hover:font-bold hover:text-text-bold">
                  Add to Cart <FaCartShopping />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="font-normal text-nonactive text-base">Black</p>
      </div>
    </div>
  );
};

export default ProductCard;
