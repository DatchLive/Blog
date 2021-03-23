import Link from "next/link";

const Home = ({ blog }) => {
  return (
    <div>
      {blog.map((blog) => (
        <div key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>
            <a>
              <h2>{blog.title}</h2>
            </a>
          </Link>
          {blog.tags.map((tag) => (
            <li className="list-none" key={tag.id}>
              <span>{tag.name}</span>
            </li>
          ))}

          <img src={blog?.image?.url ?? ""} alt="" />

          <span>{blog.publishedAt}</span>
        </div>
      ))}
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
      blog: data.contents,
    },
  };
};

export default Home;
