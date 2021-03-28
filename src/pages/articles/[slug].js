import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Layout } from "../../components/layout";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "article",
  });
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: data.items[0],
    },
  };
}

export default function Article({ article }) {
  return (
    <Layout>
      <div>
        <h1>{article.fields.title}</h1>
        <div>
          {documentToReactComponents(article.fields.content, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img src={"https:" + node.data.target.fields.file.url} />
              ),
            },
          })}
        </div>
      </div>
    </Layout>
  );
}
