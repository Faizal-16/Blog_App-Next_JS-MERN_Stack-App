"use client";

import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blogs",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <div className="h-28 w-full flex items-center justify-between">
      <Link href="/" className="">
        <h1 className="text-3xl text-[#53C28B] font-bold ">Blog App</h1>
      </Link>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} id={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" ? (
          <button
            onClick={signOut}
            className="py-1 px-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-lg "
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => signOut({ callbackUrl: "/dashboard/login" })}
            className="py-1 px-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-lg "
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
