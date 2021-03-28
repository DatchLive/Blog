import Link from "next/link";
import { Title } from "../title";
import { Profile } from "../profile";
import { SocialMedia } from "../socialmedia";

export const Footer = () => {
  return (
    <footer className="text-center">
      <div className="mx-4"></div>

      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/2 sm:pr-8 sm:py-8">
              <Title title="editor" />
              <Profile
                src="couple"
                alt="だっち/こゆみ写真"
                name="だっち / こゆみ"
                introduce="1992年生まれ同士の共働き夫婦。ガジェット好きのだっち(夫)と食べるコトが好きなこゆみ(妻)が賢く生きるための知恵を発信中！共通の趣味は「社交ダンス」。"
              />
              <p className="mb-6">
                詳しいプロフィールは
                <Link href="/about">
                  <span className="border-b-2 border-black cursor-pointer">
                    こちら
                  </span>
                </Link>
                。
              </p>
              <p>SNSも更新中♪</p>
              <SocialMedia
                twitter="https://nerdcave.com/tailwind-cheat-sheet"
                instagram=""
              />
            </div>
            <div class="sm:w-1/2 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div className="text-center">
                <Title title="contact" />
                <p className="mb-4">お問い合わせはこちら</p>

                <Link href="/contact">
                  <button className="text-white bg-brack px-8 py-3 rounded-md mb-4">
                    問い合わせ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <small className="font-serif pb-4">
        Copyright &copy; <span className="uppercase">wise life log</span> All
        Rights Reserved.
      </small>
    </footer>
  );
};
