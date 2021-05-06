import { Layout } from "src/components/layout";
import { DateComponent } from "src/components/date";
import { TagComponent } from "src/components/tag";

export default function Article({ blogs, tag }) {
  return (
    <Layout>
      <div>
        <h1>{tag.name}</h1>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <p>{blog.title}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch(process.env.ENDPOINT + "/tags", key);
  const repos = await res.json();
  const paths = repos.contents.map((repo) => `/tags/${repo.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch(
    `https://wiselifelog.microcms.io/api/v1/blogs?filters=tags[contains]${id}`,
    key
  );
  const data = await res.json();

  const resTags = await fetch(
    `https://wiselifelog.microcms.io/api/v1/tags/${id}`,
    key
  );
  const dataTags = await resTags.json();

  return {
    props: {
      blogs: data.contents,
      tag: dataTags,
    },
  };
};
