"use client";

import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: "",
    content: "",
  });

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session.status, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          username: session?.data?.user?.name,
        }),
      });
      mutate(); // Revalidate the SWR cache
      if (res.ok) {
        setFormData({
          title: "",
          desc: "",
          img: "",
          content: "",
        });
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleDelete = async (id)=>{
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      mutate();
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === "authenticated") {
    return (
      <div className="flex gap-24 ">
        {/* posts */}
        <div className="post flex-1 ">
          {isLoading
            ? "Loading..."
            : error
            ? "Failed to load posts"
            : data?.map((post) => (
                <div
                  className="post flex items-center justify-between my-10 "
                  key={post._id}
                >
                  <div className="imgContainer h-24 w-48 relative ">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={200}
                      height={100}
                      className="object-covere"
                    />
                  </div>
                  <h2 className="postTitle">{post.title}</h2>
                  <span className="delete cursor-pointer " onClick={() => handleDelete(post._id)} >
                    <Trash2 className="text-red-500" />
                  </span>
                </div>
              ))}
        </div>

        {/* form */}
        <div className="form flex-1 flex flex-col gap-5 ">
          <h1 className="text-2xl font-bold text-center ">Add New Post</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              className="p-2 border border-[#bbb] rounded-md outline-none "
              type="text"
              placeholder="Title (min 5 chars)"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 border border-[#bbb] rounded-md outline-none "
              type="text"
              placeholder="Description (min 10 chars)"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 border border-[#bbb] rounded-md outline-none "
              type="text"
              placeholder="Image URL"
              name="img"
              value={formData.img}
              onChange={handleChange}
              required
            />
            <textarea
              className="p-2 border border-[#bbb] rounded-md outline-none "
              placeholder="Content (min 20 chars)"
              name="content"
              cols={30}
              rows={10}
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#53c28b] p-4 cursor-pointer text-[#eee] rounded-md "
            >
              Add post
            </button>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export default Dashboard;
