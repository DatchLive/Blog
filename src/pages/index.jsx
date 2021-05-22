import Link from "next/link";
import { Layout } from "src/components/layout";
import { Title } from "src/components/title";
import { DateComponent } from "src/components/date";
import { CategoryBtn } from "src/components/category";
import { ProfileCard } from "src/components/profilecard";

const Home = ({ blogs, categories }) => {
  return (
    <Layout>
      <Title title="New Articles" />
      <div className="grid grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <div className="flex flex-col h-full overflow-hidden duration-300 rounded-lg shadow hover:shadow-md">
              <Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
                <div className="flex-1 block cursor-pointer">
                  <img src={blog.image.url} alt="" />
                  <h2 className="px-3 py-2 font-semibold leading-normal">
                    {blog.title}
                  </h2>
                </div>
              </Link>
              <div>
                {blog.tags.map((tag) => (
                  <div key={tag.id} className="px-3 py-1">
                    <CategoryBtn categoryTitle={tag.name} />
                  </div>
                ))}
              </div>
              <div>
                <DateComponent dateString={blog.publishedAt} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-4 text-lg subpixel-antialiased text-center">
        カテゴリー毎の記事はこちら♪
      </p>
      <div className="text-center sm:flex sm:justify-center">
        {categories.map((cate) => (
          <div key={cate.id} className="p-4">
            <Link href="/tags/[id]" as={`/tags/${cate.id}`}>
              <a>
                <span>{cate.name}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <Title title="Editor" />
      <ProfileCard />
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
    //👇 ISR設定
    revalidate: 1,
  };
};

export default Home;
