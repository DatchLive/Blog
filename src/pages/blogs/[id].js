import { Layout } from "../../components/layout";

export default function Article({ blog }) {
  return (
    <Layout>
      <div>
        <h1>{blog.title}</h1>
        <div>
          {blog.tags.map((tag) => (
            <li key={tag.id}>
              <span>{tag.name}</span>
            </li>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch("https://wiselifelog.microcms.io/api/v1/blogs", key);
  const repos = await res.json();
  const paths = repos.contents.map((repo) => `/blogs/${repo.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch(
    `https://wiselifelog.microcms.io/api/v1/blogs/${id}`,
    key
  );
  const blog = await res.json();
  return {
    props: {
      blog: blog,
    },
  };
};
