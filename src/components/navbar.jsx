"use client";

import Homepage from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* links */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>

      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold  flex items-center justify-center"
        >
          <span className="text-white mr-1">Minura</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* social */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="/">
          <Image src="/github.png" alt="asdf" width={24} height={24}></Image>
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="asdf" width={24} height={24}></Image>
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="asdf" width={24} height={24}></Image>
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="asdf" width={24} height={24}></Image>
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="asdf" width={24} height={24}></Image>
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="asdf" width={24} height={24}></Image>
        </Link>
      </div>

      {/* responsive menu */}
      <div className="md:hidden">
        {/* menu button */}
        <button
          className="flex flex-col justify-between w-10 h-8 z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* menu list */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {links.map((link, index) => (
              <Link href={link.url} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
