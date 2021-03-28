import Link from "next/link";
import { Layout } from "../components/layout";
import { Title } from "../components/title";

const Home = ({ articles }) => {
  return (
    <Layout>
      <div>
        <Title title="new articles" />

        {articles.map((article) => (
          <div key={article.sys.id}>
            <div className="container max-w-xl m-auto items-center">
              <div className="w-full flex flex-col mb-8 px-3">
                <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
                  <Link href={"/articles/" + article.fields.slug}>
                    <a>
                      <img
                        className="w-full"
                        src={"https:" + article.fields.image.fields.file.url}
                        alt=""
                      />
                      <div className="p-6 flex flex-col justify-between">
                        <h3 className="font-medium text-gray-900 mb-4 leading-normal">
                          {article.fields.title}
                        </h3>
                        <p className="inline-flex items-center">
                          {article.fields.date}
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "article",
  });
  return {
    props: {
      articles: data.items,
    },
  };
}

export default Home;
