"use client";
import Image from "next/image";

const BlogsID = ({ params }) => {
  // Get id from params (assuming your route is like /blogs/[id])
  const { id } = params;

  // Find the blog post with matching id
  const post = data.find((item) => item.id === parseInt(id));

  // If post not found, return a message
  if (!post) {
    return <div className="p-4">404-Post not found</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        {/* Info */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-sm my-5">{post.desc}</p>

            <div className="flex items-center gap-3">
              <Image
                src={"/1.png"}
                alt="Author avatar"
                height={40}
                width={40}
                className="rounded-full"
                loading="lazy"
              />
              <span>{post.username}</span>
            </div>
          </div>
          <div className="flex-1 h-[300px] w-full relative">
            <Image
              src={post.img}
              fill={true}
              alt="Post image"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-10">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsID;

const data = [
  {
    id: 1,
    username: "John Doe",
    title: "Happy Birthday",
    desc: "Happy birthday to you",
    img: "/pexels.jpg",
    content: "This is the full content for the Happy Birthday post...",
  },
  {
    id: 2,
    username: "John Doe",
    title: "Mountian",
    desc: "Mountain view",
    img: "/pexel-2.jpg",
    content: "This is the full content for the Mountain view post...",
  },
  {
    id: 3,
    username: "John Doe",
    title: "Roses",
    desc: "Rose valley",
    img: "/pexels-3.jpg",
    content: "This is the full content for the Rose valley post...",
  },
  {
    id: 4,
    username: "John Doe",
    title: "Fourth post",
    desc: "This is my fourth post",
    img: "/pexels.jpg",
    content: "This is the full content for the fourth post...",
  },
  {
    id: 5,
    username: "John Doe",
    title: "Fifth post",
    desc: "This is my fifth post",
    img: "/pexels.jpg",
    content: "This is the full content for the fifth post...",
  },
  {
    id: 6,
    username: "John Doe",
    title: "Sixth post",
    desc: "This is my sixth post",
    img: "/pexels.jpg",
    content: "This is the full content for the sixth post...",
  },
];
