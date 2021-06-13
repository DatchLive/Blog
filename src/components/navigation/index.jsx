import Link from "next/link";

const NAVINFO = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];

export const NavBar = () => {
    return (
        <nav className="">
            {NAVINFO.map((info) => {
                return (
                    <Link href={info.url} key={info.title}>
                        <a className="pb-3 mr-4 font-bold text-gray-500 uppercase duration-300 y-2 hover:text-black">
                            {info.title}
                        </a>
                    </Link>
                );
            })}
        </nav>
    );
};
