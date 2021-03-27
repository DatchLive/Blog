import Link from "next/link";
import { Layout } from "../components/layout";

const Home = ({ articles }) => {
  console.log(articles);
  return (
    <Layout>
      <ul>
        {articles.map((article) => (
          <li key={article.sys.id}>
            <Link href={"/articles/" + article.fields.slug}>
              <a>{article.fields.title}</a>
            </Link>
          </li>
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
