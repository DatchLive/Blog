import Link from "next/link";
import { NavBar } from "../navigation";

export const Header = () => {
  return (
    <header className="bg-green-700 text-white fixed w-full">
      <div className="text-center">
        <h1 className=" text-4xl uppercase pt-8">Wise Life Log</h1>
        <h2>〜賢く生きるための情報を発信！〜</h2>
        <NavBar />
      </div>
    </header>
  );
};
