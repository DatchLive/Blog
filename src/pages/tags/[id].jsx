import Link from "next/link";
import { Layout } from "src/components/layout";
import { Title } from "src/components/title";
import { DateComponent } from "src/components/date";
import { TagComponent } from "src/components/tag";

export default function Article({ blogs, tag }) {
  return (
    <Layout>
      <div>
        <Title title={tag.name} />
        {blogs.map((blog) => (
          <div key={blog.id}>
            <div className="container max-w-xl m-auto items-center">
              <div className="w-full flex flex-col mb-8 px-3">
                <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
                  <Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
                    <div className="cursor-pointer">
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
