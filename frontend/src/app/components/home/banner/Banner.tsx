"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const [dotActive, setDotActive] = useState<number>(0);

  const settings: Settings = {
    dots: true,
    beforeChange: (_prev, next) => setDotActive(next),
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "60%",
          transform: "translateY(-50%)",
          left: "8%",
          width: "50%",
        }}
      >
        <ul style={{ margin: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px black solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "10px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "2%",
              }}
            >
              <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px black solid",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="bg-[#F5F7F9]">
      <Slider
        className="sliderbanner w-full sm:container mx-auto"
        {...settings}
      >
        {["bannerone.png", "bannertwo.png", "bannerone.png"].map(
          (banner, index) => (
            <Link className=" w-full" href="#" key={index}>
              <div className="w-full h-[200px] sm:w-full sm:h-[400px] lg:w-[1599px] lg:h-[597px] bg-[#F5F7F9] mx-auto">
                <Image
                  src={`/banner/${banner}`}
                  fill
                  className="w-auto h-auto"
                  alt={banner.replace(".png", "")}
                />
              </div>
            </Link>
          )
        )}
      </Slider>
    </div>
  );
}
