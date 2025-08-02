"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* login form */}
      <form className="flex flex-col gap-3 w-[300px] " onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          className="outline-none border p-3 rounded-md "
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="outline-none border p-3 rounded-md "
        />
        <button className="bg-[#53c28b] p-3 text-[#eee] rounded-md cursor-pointer ">
          Login
        </button>
      </form>

      <hr className="w-[300px] my-4" />

      <div className="mb-2">
        {/* login link */}
        <Link
          href={"/dashboard/register"}
          className="underline hover:text-[#eee] transition-all duration-100 ease-in-out "
        >
          Don't have an account
        </Link>
      </div>

      <div className="flex flex-col items-center">
        {/* login with others */}
        <h1 className="mb-2 ">Login With</h1>
        <button
          onClick={() => signIn("google")}
          className="flex items-center cursor-pointer "
        >
          {" "}
          <Image src="/google.png" alt="google" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default Login;
