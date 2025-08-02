import Link from "next/link";
import React from "react";

// Metadata
export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

const Portfolio = () => {
  return (
    <div>
      <h1 className="mx-0 my-5 text-3xl ">Choose a gallery</h1>
      <div className="flex gap-5">
        <Link
          href="/portfolio/illustrations"
          className="relative border-2 border-[#bbb] rounded-lg w-[250px] h-[300px] hover:text-[#53c28b] transition-all duration-200 ease-in  "
          style={{
            backgroundImage: "url(/illustration.png)",
            backgroundSize: "cover",
          }}
        >
          <span className="absolute bottom-3 right-3 text-xl font-semibold ">
            Illustration
          </span>
        </Link>

        <Link
          href="/portfolio/websites"
          className="relative border-2 border-[#bbb] rounded-lg w-[250px] h-[300px] hover:text-[#53c28b] transition-all duration-200 ease-in "
          style={{
            backgroundImage: "url(/websites.jpg)",
            backgroundSize: "cover",
          }}
        >
          <span className="absolute bottom-3 right-3 text-xl font-semibold ">
            Website
          </span>
        </Link>

        <Link
          href="/portfolio/application"
          className="relative border-2 border-[#bbb] rounded-lg w-[250px] h-[300px] hover:text-[#53c28b] transition-all duration-200 ease-in "
          style={{
            backgroundImage: "url(/apps.jpg)",
            backgroundSize: "cover",
          }}
        >
          <span className="absolute bottom-3 right-3 text-xl font-semibold ">
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
