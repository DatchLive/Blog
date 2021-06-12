import Link from 'next/link'
import { CategoryBtn } from 'src/components/category'
import { DateComponent } from 'src/components/date'
import { Layout } from 'src/components/layout'
import { ProfileCard } from 'src/components/profilecard'
import { Title } from 'src/components/title'
import { client } from 'src/libs/client'

const Home = ({ blogs, categories }) => {
    return (
        <Layout>
            <Title title="New Articles" />
            <div className="grid grid-cols-2 gap-8 mb-24 md:grid-cols-3">
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <div className="flex flex-col h-full overflow-hidden duration-300 bg-white rounded-lg shadow hover:shadow-md">
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
                                        <Link href="/tags/[id]" as={`/tags/${tag.id}`}>
                                            <a>
                                                <CategoryBtn categoryTitle={tag.name} />
                                            </a>
                                        </Link>
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
            <Title title="Category" />
            <div className="mb-24 text-center sm:flex sm:justify-center ">
                {categories.map((cate) => (
                    <div
                        key={cate.id}
                        className="p-2 m-2 text-gray-500 duration-300 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-500"
                    >
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
    )
}

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'blogs' }) //記事一覧取得
    const category = await client.get({ endpoint: 'tags' }) //カテゴリ一覧取得

    return {
        props: {
            blogs: data.contents,
            categories: category.contents,
        },
        //👇 ISR設定
        revalidate: 1,
    }
}

export default Home
