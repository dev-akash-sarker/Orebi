"use client";
import { useOutsideClick } from "@/app/hooks/useOutsideclick";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const Header: FC = () => {
  const [isopen, setIsopen] = React.useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const openmenu = (): void => {
    setIsopen(!isopen);
  };
  interface Menu {
    id?: number;
    pagename: string;
    pagelink: string;
  }

  const menu: Menu[] = [
    {
      id: 0,
      pagename: "home",
      pagelink: "/",
    },
    {
      id: 1,
      pagename: "shop",
      pagelink: "/shop",
    },
    {
      id: 2,
      pagename: "about",
      pagelink: "/about",
    },
    {
      id: 3,
      pagename: "contact",
      pagelink: "/contact",
    },
    {
      id: 4,
      pagename: "journal",
      pagelink: "/journal",
    },
  ];

  useOutsideClick(menuRef, () => setIsopen(false));
  return (
    <>
      <div className="container mx-auto relative">
        {isopen && (
          <div className=" absolute w-full h-[800px] blur-2xl bg-white z-20"></div>
        )}
        <nav className="flex justify-between items-center py-8 px-0 sm:px-4 lg:px-40 relative">
          <div>
            <Link href="/">
              <Image src="/logo/logo.png" width={65} height={15} alt="orebi" />
            </Link>
          </div>
          <ul className=" flex justify-start items-center gap-10 xs:hidden lg:flex">
            {menu.map((item) => (
              <li key={item.id}>
                <Link href={item.pagelink} className="capitalize">
                  {item.pagename}
                </Link>
              </li>
            ))}
          </ul>
          <button className="block lg:hidden" onClick={() => openmenu()}>
            {isopen ? <FaBars /> : <FaBars />}
          </button>
          {isopen && (
            <div
              ref={menuRef}
              className="bg-red-400 absolute top-0 right-0 w-full md:w-[400px] h-screen z-50 lg:hidden"
            >
              <button
                onClick={() => setIsopen(false)}
                className="absolute right-8 top-8 cursor-pointer z-[1000]"
              >
                <RiCloseLargeFill
                  fontSize={22}
                  className=" font-normal hover:text-[25px]"
                />
              </button>
              <nav className="flex justify-between items-center py-8 pl-10 relative">
                <ul className=" flex flex-col gap-10 mt-10 w-full">
                  {menu.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.pagelink}
                        className="capitalize hover:font-bold"
                      >
                        {item.pagename}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
