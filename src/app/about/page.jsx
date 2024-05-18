"use client";
import Brain from "@/components/brain";
import Sign from "@/components/sign";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* About container */}
      <div className="h-full overflow-scroll">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 text-xl flex flex-col gap-24 md:m-32 lg:gap-40 xl:gap-64 lg:w-2/3 xl:w-1/2 lg:pr-0">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Passionate software developer specializing in web and mobile
              applications. Dedicated to crafting elegant solutions through
              code. Experienced in full-stack development and eager to tackle
              new challenges.
            </p>
            <span className="italic">
              If at first you don't succeed, call it version 1.0.
            </span>

            <div className="self-end">
              <Sign></Sign>
            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITTLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
            </div>
            <div className=""></div>
            {/* SKILL SCROLL SVG */}
            <div className="self-end">
              <Sign></Sign>
            </div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div>

              {/* EXPERIENCE LIST ITEM 1*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Intern software developer</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    My first ever industry experience. Learning day by day.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2024 february - present
                  </div>
                  {/* COMPANY NAME */}
                  <div className="p-1 bg-white text-sm font-semibold w-fit">
                    Techcciance
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM 2*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Intern software developer</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    My first ever industry experience. Learning day by day.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2024 february - present
                  </div>
                  {/* COMPANY NAME */}
                  <div className="p-1 bg-white text-sm font-semibold w-fit">
                    Techcciance
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM 3*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Intern software developer</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    My first ever industry experience. Learning day by day.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2024 february - present
                  </div>
                  {/* COMPANY NAME */}
                  <div className="p-1 bg-white text-sm font-semibold w-fit">
                    Techcciance
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

            </div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/2 sticky top-0 z-30">
          {/* <Brain></Brain> */}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
