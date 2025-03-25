import Image from "next/image";
import React from "react";

export default function Ads() {
  return (
    <div className="grid grid-cols-2 gap-10 w-[1200px] mx-auto">
      <Image
        src="/ads/Ad_1.png"
        width={780}
        height={780}
        alt="first"
        className=" row-span-2 object-cover"
      />
      <Image
        src="/ads/Ad_2.png"
        width={780}
        height={370}
        alt="first"
        className=" row-span-1 object-cover"
      />
      <Image
        src="/ads/Ad_3.png"
        width={780}
        height={370}
        alt="first"
        className=" row-span-1 object-cover"
      />
    </div>
  );
}
