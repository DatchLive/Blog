import Link from "next/link";
import { Layout } from "../components/layout";

const Home = ({ articles }) => {
  return (
    <Layout>
      <ul>
        {articles.map((article) => (
          <div key={article.sys.id}>
            <li>
              <Link href={"/articles/" + article.fields.slug}>
                <a>
                  <img
                    src={"https:" + article.fields.image.fields.file.url}
                    alt=""
                  />
                  <h3>{article.fields.title}</h3>
                </a>
              </Link>
            </li>
            <li>
              <p>{article.fields.date}</p>
            </li>
          </div>
        ))}
      </ul>
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
