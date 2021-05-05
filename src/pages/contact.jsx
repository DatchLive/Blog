import { Layout } from "src/components/layout";
import { BtnComponent } from "src/components/btn";
import { Title } from "src/components/title";

export default function Contact() {
  return (
    <Layout>
      <Title title="contact" />
      <div>
        <span className="font-plus">お名前</span>
        <input
          className="appearance-none block w-full bg-white text-gray-900 border border-gray-900 rounded py-2 px-4 mb-8 leading-tight focus:outline-none focus:border-gray-900"
          id="nick"
          type="text"
        ></input>
        <span className="font-plus">メールアドレス</span>
        <input
          className="appearance-none block w-full bg-white text-gray-900 border border-gray-900 rounded py-2 px-4 mb-8 leading-tight focus:outline-none focus:border-gray-900"
          id="mail"
          type="text"
        ></input>
        <span className="font-plus">お問い合わせ内容</span>
        <textarea
          className=" no-resize appearance-none block w-full bg-white text-gray-900 border border-gray-900 rounded py-3 px-4 mb-12 leading-tight focus:outline-none focus:border-gray-900 h-48 resize-none"
          id="message"
        ></textarea>

        <div className="text-center">
          <BtnComponent btnText="送信" />
        </div>
      </div>
    </Layout>
  );
}
