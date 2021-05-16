import Link from "next/link";
import { Layout } from "src/components/layout";
import { Title } from "src/components/title";
import { DateComponent } from "src/components/date";
import { CategoryBtn } from "src/components/category";

export default function Article({ blogs, tag }) {
  return (
    <Layout>
      <div>
        <Title title={tag.name} />
        <div className="grid grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div className="overflow-hidden rounded-lg shadow flex flex-col h-full hover:shadow-md duration-300">
                <Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
                  <div className="block flex-1 cursor-pointer">
                    <img src={blog.image.url} alt="" />
                    <h2 className="font-bold leading-normal px-3 py-2">
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
