import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

export const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap pb-4">
      <button
        className="absolute top-0 right-0 p-3 hover:bg-green-600 rounded outline-none lg:hidden "
        onClick={handleClick}
      >
        <MenuIcon />
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:flex-row lg:w-auto w-full lg:items-center  flex flex-col ">
          <Link href="/">
            <a className="text-white uppercase lg:w-auto w-full px-3 py-2 rounded  items-center justify-center hover:bg-green-600 ">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-white uppercase lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-green-600 ">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-white uppercase lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-green-600 ">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
