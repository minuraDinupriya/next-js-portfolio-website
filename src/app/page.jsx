import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* image container */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" className="object-contain" fill></Image>
      </div>
      {/* text container */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        {/* tittle */}
        <p className="text-4xl font-bold md:text-6xl">
          Versatile Freelance Software Developer
        </p>
        {/* desctription */}
        <p className="md:text-xl">
          Hire me for expert freelance software development services tailored to
          your needs. With a focus on quality, efficiency, and innovation, I
          deliver custom solutions across web, mobile, and desktop platforms.
          Let's turn your ideas into reality and propel your business forward
          together!
        </p>
        {/* buttons */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
