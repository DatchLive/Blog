const BlogId = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>

      <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
    </main>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch("https://wiselifelog.microcms.io/api/v1/blogs/", key);
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

export default BlogId;
