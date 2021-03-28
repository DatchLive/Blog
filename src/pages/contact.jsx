import { Layout } from "../components/layout";
import { Title } from "../components/title";

export default function Contact() {
  return (
    <Layout>
      <Title title="contact" />
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="nick"
        type="text"
      ></input>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="nick"
        type="text"
      ></input>
      <textarea
        class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
        id="message"
      ></textarea>
    </Layout>
  );
}
