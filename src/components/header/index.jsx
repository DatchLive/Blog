import { NavBar } from "src/components/navigation";

export const Header = () => {
    return (
        <header className="bg-blue-100">
            <div className="w-full max-w-5xl pt-8 pb-1 m-auto px-9">
                <h1 className="pb-8 text-4xl font-bold">Wise Life Log</h1>
                <NavBar />
            </div>
        </header>
    );
};
