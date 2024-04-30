"use client";

import { motion } from "framer-motion";

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

  const topVariants = {
    closed: { rorate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rorate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2,
      },
    },
  };

  const listItemVarients={
    closed:{
      x:-10,
      opacity:0
    },
    opened:{
      x:0,
      opacity:1
    }
  }

  return (
    <div className="h-full flex items-center justify-between motion.">
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
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* menu list */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40"
          >
            {links.map((link, index) => (
              <motion.div variants={listItemVarients} className="" key={index}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
