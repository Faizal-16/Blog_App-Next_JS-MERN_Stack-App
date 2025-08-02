import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Metadata
export const metadata = {
  title: "Blog Page",
  description: "Here you can see our blog",
};

const Blog = async () => {
  const data = await getData();

  return (
    <div>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} key={item.id}>
          <div className={`flex gap-10 mt-12 mb-24  `}>
            {/* image */}
            <div className="">
              <Image
                src={item.img}
                alt="Hero Image"
                height={400}
                width={250}
                className="object-contain"
              />
            </div>

            {/* content */}
            <div className=" flex flex-col gap-5 justify-center ">
              <h1 className="text-5xl ">{item.title}</h1>
              <p className="text-xl">{item.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
