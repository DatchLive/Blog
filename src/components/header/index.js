import { NavBar } from "../navigation";

export const Header = () => {
  return (
    <header className="bg-pale-green text-white fixed top-0 w-full">
      <div className="text-center">
        <h1 className=" font-courgette text-4xl uppercase pt-8">
          Wise Life Log
        </h1>
        <h2 className="font-mono text-sm">〜賢く生きるための情報を発信！〜</h2>
        <NavBar />
      </div>
    </header>
  );
};
