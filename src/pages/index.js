import Link from "next/link";
import { Layout } from "../components/layout";
import { Title } from "../components/title";
import { DateComponent } from "../components/date";
import { BtnComponent } from "../components/btn";
import { TagComponent } from "../components/tag";

const Home = ({ blogs, categories }) => {
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
                            <p className="inline-flex items-center mb-2">
                              <DateComponent dateString={blog.publishedAt} />
                            </p>
                            {blog.tags.map((tag) => (
                              <div key={tag.id} className="text-xs">
                                <TagComponent tagText={tag.name} />
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

      <p className="text-lg text-center mb-4">カテゴリー毎の記事はこちら♪</p>

      <div className="text-center sm:flex sm:justify-center">
        {categories.map((cate) => (
          <div key={cate.id} className="p-4">
            <BtnComponent btnText={cate.name} className="inline-block" />
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

  //👇カテゴリー取得
  const tag = await fetch(process.env.ENDPOINT + "/tags", key);
  const category = await tag.json();

  return {
    props: {
      blogs: data.contents,
      categories: category.contents,
    },
  };
};

export default Home;
