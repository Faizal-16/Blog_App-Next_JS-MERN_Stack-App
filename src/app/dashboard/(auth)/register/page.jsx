"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 && router.push("/dashboard/login?success=Account has been created");

    } catch (error) {
      setErr(true);
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      {/* login form */}
      <form className="flex flex-col gap-3 w-[300px] " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          className="outline-none border p-3 rounded-md "
        />
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
          Register
        </button>
      </form>

      {/* error message */}
      {err && <span>Something went wrong</span>}

      {/* login link */}
      <Link
        href={"/dashboard/login"}
        className="underline hover:text-[#eee] transition-all duration-100 ease-in-out "
      >
        All ready have an account
      </Link>
    </div>
  );
};

export default Register;
