import Link from "next/link";
import React from "react";

const Button = ({ title, pad, url }) => {
  return (
    <Link href={url} className="no-underline">
      <div
        className={`w-max ${pad} border-none bg-[#53c28b] text-white cursor-pointer rounded-md `}
      >
        {title}
      </div>
    </Link>
  );
};

export default Button;
