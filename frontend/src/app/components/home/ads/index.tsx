import Image from "next/image";
import React from "react";

export default function Ads() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1200px] w-full px-4 mx-auto">
      <Image
        src="/ads/Ad_1.png"
        width={780}
        height={780}
        alt="ad 1"
        className="row-span-2 object-cover w-full h-full"
      />
      <Image
        src="/ads/Ad_2.png"
        width={780}
        height={370}
        alt="ad 2"
        className="row-span-1 object-cover w-full h-full"
      />
      <Image
        src="/ads/Ad_3.png"
        width={780}
        height={370}
        alt="ad 3"
        className="row-span-1 object-cover w-full h-full"
      />
    </div>
  );
}
