import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({params}) {
  const post = await getData(params.id);

  return{
    title: post.title,
    description: post.desc
  }
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  // If data is not found, notFound() will trigger the 404 page
  if (!data) return null;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div key={data._id || data.id}>
        {/* Info */}
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <p className="text-sm my-5">{data.desc}</p>

            <div className="flex items-center gap-3">
              <Image
                src={data.img || "/1.png"}
                alt="Author avatar"
                height={40}
                width={40}
                className="rounded-full"
              />
              <span>{data.username}</span>
            </div>
          </div>
          <div className="flex-1 h-[300px] w-[200px] relative">
            <Image
              src={data.img || "/illustration.png"}
              fill={true}
              alt="Post image"
              className="object-cover"
            />
          </div>
        </div>

        {/* content */}
        <div className="mt-8">
          <p className="whitespace-pre-line">{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
