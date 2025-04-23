"use client";
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import { FaCartShopping, FaCodeCompare, FaHeart } from "react-icons/fa6";
import ProductCard from "../product";

const Newarrivel: React.FC = () => {
  const isNewArrival = (date: string): boolean => {
    const today = new Date();
    const addedDate = new Date(date);
    const diffTime = today.getTime() - addedDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= 15;
  };
  type Product = {
    title: string;
    price: string;
    url: string;
    date: string;
  };

  const products: Product[] = [
    {
      title: "Basic Crew Neck Teesss",
      price: "44",
      url: "/newarrivel/p1.png",
      date: "2025-04-28",
    },
    {
      title: "Classic Polo Shirt",
      price: "52",
      url: "/newarrivel/p1.png",
      date: "2025-04-25",
    },
    {
      title: "Slim Fit Jeans",
      price: "60",
      url: "/newarrivel/p1.png",
      date: "2025-04-22",
    },
  ];

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="px-4 lg:px-40 pt-[30px] pb-[29px]">
        <h3 className="font-bold text-[39px] text-text-bold mb-12">
          New Arrivals
        </h3>

        <Slider {...settings}>
          {products
            .filter((product) => isNewArrival(product.date))
            .map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                url={product.url}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Newarrivel;
