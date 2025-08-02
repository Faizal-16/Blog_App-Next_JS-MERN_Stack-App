import Image from "next/image";
import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      name: "facebook",
      img: "/1.png",
    },
    {
      id: 2,
      name: "instagram",
      img: "/2.png",
    },
    {
      id: 3,
      name: "twitter",
      img: "/3.png",
    },
    {
      id: 4,
      name: "youtube",
      img: "/4.png",
    },
  ];
  return (
    <div className="h-12 w-full flex items-center justify-between">
      <div className="text-sm">© 2025 Faizal. All rights reserved</div>
      {/* <div className="flex items-center gap-5 cursor-pointer">
        {links.map((link) => (
          <Image src={link.img} key={link.id} alt={link.name} width={20} height={20} />
        ))}
      </div> */}
    </div>
  );
};

export default Footer;
