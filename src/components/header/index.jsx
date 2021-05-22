import { NavBar } from "src/components/navigation";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full text-white bg-pale-green">
      <div className="text-center">
        <h1 className="pt-8 text-4xl uppercase  font-courgette">
          Wise Life Log
        </h1>
        <h2 className="text-sm font-plus">〜賢く生きるための情報を発信！〜</h2>
        <NavBar />
      </div>
    </header>
  );
};
