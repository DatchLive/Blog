import Link from "next/link";
import { Layout } from "../components/layout";
import { Title } from "../components/title";
// import { DateComponent } from "../components/date";

const Home = ({ blogs }) => {
  return (
    <Layout>
      <div>
        <Title title="new articles" />

        <div>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
                <a>
                  <h2>{blog.title}</h2>
                </a>
              </Link>
              {/* {blog.tags.map((tag) => (
                <React.Fragment key={tag.id}>
                  <span>{tag.name}</span>
                </React.Fragment>
              ))} */}
            </li>
          ))}
        </div>

        {/* {articles.map((article) => (
          <div key={article.sys.id}>
            <div className="container max-w-xl m-auto items-center">
              <div className="w-full flex flex-col mb-8 px-3">
                <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
                  <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
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
                          <DateComponent dateString={article.fields.date} />
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch(process.env.ENDPOINT + "/blogs", key);
  const data = await res.json();
  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
