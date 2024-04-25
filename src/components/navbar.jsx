import Homepage from "@/app/page";
import Link from "next/link";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* logo */}
      <div className="">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold  flex items-center justify-center"
        >
          <span className="text-white mr-1">Minura</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
        <Link href="/"></Link>
      </div>
      {/* responsive menu */}
      {/* menu button */}
      <button className="flex flex-col justify-between w-10 h-8">
        <div className="w-10 h-1 bg-black rounded"></div>
        <div className="w-10 h-1 bg-black rounded"></div>
        <div className="w-10 h-1 bg-black rounded"></div>
      </button>
      {/* menu list */}
      <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
        {links.map((link, index) => (
          <Link href={link.url} key={index}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
