import Link from "next/link";
import { Layout } from "../components/layout";
import { Title } from "../components/title";
import { DateComponent } from "../components/date";

const Home = ({ blogs }) => {
  console.log(blogs);
  return (
    <Layout>
      <Title title="new articles" />
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <div className="container max-w-xl m-auto items-center">
              <div className="w-full flex flex-col mb-8 px-3">
                <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
                  <Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
                    <div>
                      <a>
                        <img className="w-full" src={blog.image.url} alt="" />
                        <div className="p-6 flex flex-col justify-between">
                          <h2 className="font-plus font-medium text-gray-900 mb-4 leading-normal">
                            {blog.title}
                          </h2>
                          <div>
                            <p className="inline-flex items-center">
                              <DateComponent dateString={blog.publishedAt} />
                            </p>
                            {blog.tags.map((tag) => (
                              <div key={tag.id}>
                                <span>{tag.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
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
  const res = await fetch(process.env.ENDPOINT + "/blogs", key);
  const data = await res.json();
  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
