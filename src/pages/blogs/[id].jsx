import { Layout } from "src/components/layout";
import { DateComponent } from "src/components/date";
import { CategoryBtn } from "src/components/category";

export default function Article({ blog }) {
  return (
    <Layout>
      <div>
        <h1 className="mb-8 text-3xl font-bold text-center font-plus">
          {blog.title}
        </h1>
        <div className="flex justify-between m-auto mb-10">
          {blog.tags.map((tag) => (
            <div key={tag.id}>
              <CategoryBtn categoryTitle={tag.name} />
            </div>
          ))}
          <DateComponent dateString={blog.publishedAt} />
        </div>
        <img className="w-full mb-16" src={blog.image.url} alt="" />
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        ></div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch(process.env.ENDPOINT + "/blogs", key);
  const repos = await res.json();
  const paths = repos.contents.map((repo) => `/blogs/${repo.id}`);
  return { paths, fallback: "blocking" };
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
