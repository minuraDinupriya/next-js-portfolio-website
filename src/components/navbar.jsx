import Homepage from "@/app/page";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* logo */}
      <div className="">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold"
        >
          <span className="text-white ">Minura</span>
        </Link>
        <Link href="/">
          <span className="w-12 h-8 rounded bg-white text-black">.dev</span>
        </Link>
      </div>
      {/* responsive menu */}
      <div className=""></div>
    </div>
  );
};

export default Navbar;
