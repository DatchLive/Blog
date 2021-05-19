import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Twitter,
  Instagram,
  Youtube,
  Github,
  Zenn,
} from "@icons-pack/react-simple-icons";

const PROFINFO = [
  {
    name: "だっち",
    descripiton: "YouTuberやっています。",
    icon: "datch",
    twitter: "https://twitter.com/datchlive",
    instagram: "https://www.instagram.com/datchlive/",
    youtube: "https://www.youtube.com/user/datchlivetv",
    github: "https://github.com/DatchLive",
    zenn: "https://zenn.dev/datchlive",
  },
  {
    name: "こゆみ",
    descripiton: "Blogやってます。",
    icon: "koyumi",
    twitter: "https://twitter.com/OL_0315",
  },
];

export const ProfileCard = () => {
  return (
    <div>
      {PROFINFO.map((item) => {
        return (
          <div
            className="bg-white p-6 shadow rounded-lg flex justify-between items-center mb-5"
            key={item.name}
          >
            <div className="flex">
              <div className="mr-4">
                <img
                  className="w-28 h-28 rounded-full"
                  src={`/img/${item.icon}.png`}
                  alt={item.name}
                />
              </div>
              <div className="pl-4">
                <h3 className="text-xl font-semibold mt-1">{item.name}</h3>
                <p className="my-2">{item.descripiton}</p>
                <div className="text-xl text-gray-500">
                  <ul className="flex">
                    <li className="pr-2 hover:text-gray-700 transition">
                      <a href={item.twitter}>
                        <Twitter size={22} />
                      </a>
                    </li>
                    {item.instagram && (
                      <li className="px-2 hover:text-gray-700 transition">
                        <a href={item.instagram}>
                          <Instagram size={22} />
                        </a>
                      </li>
                    )}
                    {item.youtube && (
                      <li className="px-2 hover:text-gray-700 transition">
                        <a href={item.youtube}>
                          <Youtube size={22} />
                        </a>
                      </li>
                    )}
                    {item.github && (
                      <li className="px-2 hover:text-gray-700 transition">
                        <a href={item.github}>
                          <Github size={22} />
                        </a>
                      </li>
                    )}
                    {item.zenn && (
                      <li className="px-2 hover:text-gray-700 transition">
                        <a href={item.zenn}>
                          <Zenn size={22} />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
