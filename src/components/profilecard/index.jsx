import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PROFINFO = [
  {
    name: "だっち",
    descripiton: "YouTuberやっています。",
    icon: "datch",
    twitter: "https://twitter.com/datchlive",
    instagram: "https://www.instagram.com/datchlive/",
    youtube: "https://www.youtube.com/user/datchlivetv",
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
            className="flex items-center justify-between p-6 mb-5 bg-white rounded-lg shadow"
            key={item.name}
          >
            <div className="flex">
              <div className="mr-4">
                <img
                  className="rounded-full w-28 h-28"
                  src={`/img/${item.icon}.png`}
                  alt={item.name}
                />
              </div>
              <div className="pl-4">
                <h3 className="mt-1 text-xl font-semibold">{item.name}</h3>
                <p className="my-2">{item.descripiton}</p>
                <div className="text-xl text-gray-500">
                  <ul className="flex">
                    <li className="transition hover:text-gray-700">
                      <a href={item.twitter}>
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    {item.instagram && (
                      <li className="px-2 transition hover:text-gray-700">
                        <a href={item.instagram}>
                          <FontAwesomeIcon icon={["fab", "instagram"]} />
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
