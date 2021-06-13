import { Layout } from "src/components/layout";
import { client } from "src/libs/client";
import { DateComponent } from "src/components/date";
import { CategoryBtn } from "src/components/category";
import { SnsShare } from "src/components/snsshare";

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
            <SnsShare title={blog.title} url={blog.id} />
        </Layout>
    );
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blogs" });
    const paths = data.contents.map((content) => `/blogs/${content.id}`);
    return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const blog = await client.get({ endpoint: "blogs", contentId: id });
    return {
        props: {
            blog: blog,
        },
    };
};
