"use client";
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
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 text-xl flex flex-col gap-24 md:m-32 lg:gap-40 xl:gap-64">
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
              <svg
                width="202"
                height="82"
                viewBox="0 0 382 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 92C26 80.9268 25.7859 69.4768 30.6667 59.2222C37.3108 45.2629 53.0296 35.0142 68.4444 42.1667C77.8103 46.5124 83.2788 55.7096 87.3333 64.7778C95.2927 82.5794 98.4542 102.325 99.3333 121.667C100.257 141.992 101.073 167.544 91.1111 186.222C90.6083 187.165 90.161 186.611 89.7778 185.667C86.3235 177.154 85.5397 166.656 84.8889 157.667C82.0173 118.003 87.7494 76.8907 102.556 39.9444C106.753 29.4702 111.843 19.2572 118.667 10.2222C120.447 7.86457 124.88 1.87949 128.778 2.44444C132.331 2.95941 135.097 9.29539 136.333 11.5556C142.214 22.3068 147.916 34.1215 149.833 46.3333C155.664 83.4791 126.795 108.697 102.222 131.222C101.695 131.706 99.8094 133.474 100.278 131.444C102.271 122.805 108.897 114.504 115.889 109.333C131.917 97.4792 134.451 133.378 135.333 141.444C136.105 148.499 136.287 155.605 137 162.667C137.089 163.549 137.143 169.915 138.5 171C140.379 172.503 150.659 158.136 151.667 157C161.48 145.937 174.831 134.621 179.111 119.889C180.528 115.012 181.176 107.737 176.444 104.5C168.594 99.1289 162.25 107.831 160.667 114.889C158.258 125.622 160.857 133.913 163.833 143.833C165.115 148.107 167.236 142.25 168.667 139.889C174.895 129.612 181.516 119.086 183.833 107.111C184.804 102.098 188.123 115.685 188.222 116.111C191.361 129.543 192 143.037 192 156.778C192 162.494 191.682 156.483 191.333 154.389C188.214 135.672 187.066 116.545 198 99.8889C201.248 94.9416 204.615 92.9375 206.444 99.6111C211.041 116.373 202.858 132.84 188.333 141.778C171.123 152.368 150.265 157.096 130.889 161.556C94.2006 169.999 56.9528 175.773 20.2778 184.278C19.4297 184.474 -7.64345 194.857 6.22222 186.667C24.1962 176.049 43.9034 169.778 63.8889 164C135.015 143.438 207.863 128.658 279.889 111.667C309.573 104.664 339.175 97.4311 368.667 89.6667C371.578 88.9001 376.48 87 380 87"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
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
              <svg
                width="202"
                height="82"
                viewBox="0 0 382 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 92C26 80.9268 25.7859 69.4768 30.6667 59.2222C37.3108 45.2629 53.0296 35.0142 68.4444 42.1667C77.8103 46.5124 83.2788 55.7096 87.3333 64.7778C95.2927 82.5794 98.4542 102.325 99.3333 121.667C100.257 141.992 101.073 167.544 91.1111 186.222C90.6083 187.165 90.161 186.611 89.7778 185.667C86.3235 177.154 85.5397 166.656 84.8889 157.667C82.0173 118.003 87.7494 76.8907 102.556 39.9444C106.753 29.4702 111.843 19.2572 118.667 10.2222C120.447 7.86457 124.88 1.87949 128.778 2.44444C132.331 2.95941 135.097 9.29539 136.333 11.5556C142.214 22.3068 147.916 34.1215 149.833 46.3333C155.664 83.4791 126.795 108.697 102.222 131.222C101.695 131.706 99.8094 133.474 100.278 131.444C102.271 122.805 108.897 114.504 115.889 109.333C131.917 97.4792 134.451 133.378 135.333 141.444C136.105 148.499 136.287 155.605 137 162.667C137.089 163.549 137.143 169.915 138.5 171C140.379 172.503 150.659 158.136 151.667 157C161.48 145.937 174.831 134.621 179.111 119.889C180.528 115.012 181.176 107.737 176.444 104.5C168.594 99.1289 162.25 107.831 160.667 114.889C158.258 125.622 160.857 133.913 163.833 143.833C165.115 148.107 167.236 142.25 168.667 139.889C174.895 129.612 181.516 119.086 183.833 107.111C184.804 102.098 188.123 115.685 188.222 116.111C191.361 129.543 192 143.037 192 156.778C192 162.494 191.682 156.483 191.333 154.389C188.214 135.672 187.066 116.545 198 99.8889C201.248 94.9416 204.615 92.9375 206.444 99.6111C211.041 116.373 202.858 132.84 188.333 141.778C171.123 152.368 150.265 157.096 130.889 161.556C94.2006 169.999 56.9528 175.773 20.2778 184.278C19.4297 184.474 -7.64345 194.857 6.22222 186.667C24.1962 176.049 43.9034 169.778 63.8889 164C135.015 143.438 207.863 128.658 279.889 111.667C309.573 104.664 339.175 97.4311 368.667 89.6667C371.578 88.9001 376.48 87 380 87"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default About;
