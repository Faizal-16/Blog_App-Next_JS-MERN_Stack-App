import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import Post from "../../../../models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const posts = await Post.findById(id);

    // You need to stringify the posts before sending them as response
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error); // It's good practice to log the error
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    // You need to stringify the posts before sending them as response
    return new NextResponse("Post has been deleted", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error); // It's good practice to log the error
    return new NextResponse("Database Error!", { status: 500 });
  }
};