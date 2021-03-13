const Home = ({ blog }) => {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch(`https://wiselifelog.microcms.io/api/v1/blogs/`, key);
  const data = await res.json();

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
