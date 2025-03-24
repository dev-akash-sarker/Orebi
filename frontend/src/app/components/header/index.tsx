"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
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
  return (
    <>
      <div className="container mx-auto">
        <nav className=" flex justify-between py-8 md:px-0 lg:px-40">
          <div>
            <Link href="/">
              <Image src="/logo/logo.png" width={65} height={15} alt="orebi" />
            </Link>
          </div>
          <ul className=" flex justify-start items-center gap-10">
            {menu.map((item) => (
              <li key={item.id}>
                <Link href={item.pagelink} className="capitalize">
                  {item.pagename}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
