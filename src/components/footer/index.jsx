import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title } from "../title";
import { Profile } from "../profile";

export const Footer = () => {
  return (
    <footer className="text-center">
      <div className="mx-4 mb-16">
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
        <ul className="flex justify-center">
          <li>
            <a href="https://qiita.com/sasigume/items/4d082457b2e42af976df">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </li>
        </ul>
      </div>

      <div className="mb-16">
        <Title title="category" />

        <div>
          <h4 className="text-2xl mb-4">Category</h4>
          <ul>
            <li>カテゴリ詳細</li>
            <li>カテゴリ詳細</li>
            <li>カテゴリ詳細</li>
          </ul>
        </div>
      </div>

      <div>
        <Title title="contact" />
        <p className="mb-4">お問い合わせはこちら</p>

        <Link href="/contact">
          <button className="text-white bg-gray-800 px-8 py-3 rounded-md mb-4">
            問い合わせ
          </button>
        </Link>
      </div>
      <small className="font-serif">
        Copyright &copy; <span className="uppercase">wise life log</span> All
        Rights Reserved.
      </small>
    </footer>
  );
};
