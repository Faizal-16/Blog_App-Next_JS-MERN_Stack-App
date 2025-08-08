'use client'
import Image from "next/image";
import { useEffect } from "react";

const BlogsID = () => {
  


  return  <div className="flex flex-col gap-4 p-4">
        <div>
          {/* Info */}
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-4xl font-bold">{"Title"}</h1>
              <p className="text-sm my-5">{"Description"}</p>
  
              <div className="flex items-center gap-3">
                <Image
                  src={"/1.png"}
                  alt="Author avatar"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <span>{"Username"}</span>
              </div>
            </div>
            <div className="flex-1 h-[300px] w-[200px] relative">
              <Image
                src={"/pexels.jpg"}
                fill={true}
                alt="Post image"
                className="object-cover"
              />
            </div>
          </div>
  
          {/* content */}
          <div className="mt-8">
            <p className="whitespace-pre-line">{"Content Should be here "}</p>
          </div>
        </div>
      </div>
};

export default BlogsID;


const data = [
  {
    id: 1,
    title: "Happy Birthday",
    desc: "Happy birthday to you",
    img: "/pexels.jpg",
  },
  {
    id: 2,
    title: "Mountian",
    desc: "Mountain view",
    img: "/pexel-2.jpg",
  },
  {
    id: 3,
    title: "Roses",
    desc: "Rose valley",
    img: "/pexels-3.jpg",
  },
  {
    id: 4,
    title: "Fourth post",
    desc: "This is my fourth post",
    img: "/pexels.jpg",
  },
  {
    id: 5,
    title: "Fifth post",
    desc: "This is my fifth post",
    img: "/pexels.jpg",
  },
  {
    id: 6,
    title: "Sixth post",
    desc: "This is my sixth post",
    img: "/pexels.jpg",
  },
];
