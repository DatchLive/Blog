import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

export const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap pb-4">
      <button
        className="absolute top-2 right-2 p-2 hover:bg-green-100 hover:bg-opacity-50 rounded outline-none lg:hidden "
        onClick={handleClick}
      >
        <MenuIcon className="text-white h-5 w-5" />
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="pt-4 lg:flex-row lg:w-auto lg:justify-center  flex flex-col lg:m-auto">
          <Link href="/">
            <a className="text-white uppercase lg:w-auto w-full px-3 py-2 rounded  items-center justify-center hover:bg-green-100 hover:bg-opacity-50">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-white uppercase lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-green-100 hover:bg-opacity-50">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-white uppercase lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-green-100 hover:bg-opacity-50">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
