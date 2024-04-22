import Homepage from "@/app/page";
import Link from "next/link";

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
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
        </Link>
        <Link href="/"></Link>
      </div>
      {/* responsive menu */}
      <div className=""></div>
    </div>
  );
};

export default Navbar;
