import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Post from "../../../models/Post.js";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username ? { username } : {});

    // You need to stringify the posts before sending them as response
    return new NextResponse(JSON.stringify(posts), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error); // It's good practice to log the error
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const POST = async (request) => {
  
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    // You need to stringify the posts before sending them as response
    return new NextResponse("Post has been created"), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error(error); // It's good practice to log the error
    return new NextResponse("Database Error!", { status: 500 });
  }
};
