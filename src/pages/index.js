import Link from "next/link";
import { Layout } from "../components/layout";

const Home = ({ blog }) => {
  return (
    <Layout>
      <div>
        {blog.map((blog) => (
          <div key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <a>
                <img src={blog?.image?.url ?? ""} alt="" />
                <h2>{blog.title}</h2>
              </a>
            </Link>
            {blog.tags.map((tag) => (
              <li className="list-none" key={tag.id}>
                <span>{tag.name}</span>
              </li>
            ))}
            <span>{blog.publishedAt}</span>
          </div>
        ))}
      </div>
    </Layout>
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
