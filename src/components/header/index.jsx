import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-green-400 text-white relative">
      <div className="text-center">
        <h1 className="couragette text-4xl uppercase pt-8">Wise Life Log</h1>
        <h2>〜賢く生きるための情報を発信！〜</h2>
      </div>
      <div>
        <button className="absolute top-3 right-3 md:hidden">
          <MenuIcon />
        </button>
      </div>

      <div>
        <ul className="uppercase md:flex md:justify-around">
          <li>
            <Link href="/">
              <a className="">home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="">about</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
