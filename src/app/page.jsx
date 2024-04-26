import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* image container */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="" className="object-contain" fill ></Image>
      </div>
      {/* text container */}
      <div className="h-1/2"></div>
      {/* button container */}
    </div>
  );
};

export default Homepage;
