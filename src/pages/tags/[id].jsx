import Link from 'next/link'
import { client } from 'src/libs/client'
import { Layout } from 'src/components/layout'
import { Title } from 'src/components/title'
import { DateComponent } from 'src/components/date'
import { CategoryBtn } from 'src/components/category'

export default function Article({ blogs, categories }) {
    return (
        <Layout>
            <div>
                <Title title={categories.name} />
                <div className="grid grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id}>
                            <div className="flex flex-col h-full overflow-hidden duration-300 rounded-lg shadow hover:shadow-md">
                                <Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
                                    <div className="flex-1 block cursor-pointer">
                                        <img src={blog.image.url} alt="" />
                                        <h2 className="px-3 py-2 font-bold leading-normal">
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
    )
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'tags' })
    const paths = data.contents.map((content) => `/tags/${content.id}`)
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id

    const blog = await client.get({
        endpoint: 'blogs',
        queries: {
            filters: `tags[contains]${id}`,
        },
    })

    const category = await client.get({ endpoint: 'tags' }) //カテゴリ一覧取得

    return {
        props: {
            blogs: blog.contents,
            categories: category.contents,
        },
    }
}
