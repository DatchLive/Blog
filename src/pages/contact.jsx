import { Layout } from 'src/components/layout'
import { Title } from 'src/components/title'
import { useForm } from 'react-hook-form'

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ reValidateMode: 'onSubmit' })
    const onSubmit = (data) => console.log(data)

    return (
        <Layout>
            <Title title="Contact" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span className="mr-3 font-plus">お名前</span>
                    {errors?.name && (
                        <span className="text-xs text-red-500">入力必須</span>
                    )}
                    <input
                        {...register('name', { required: true })}
                        className="block w-full px-1.5 py-2 mb-8 leading-tight text-gray-900 bg-white border border-gray-900 rounded appearance-none focus:outline-none focus:border-gray-900"
                        type="text"
                    />
                    <span className="mr-3 font-plus">メールアドレス</span>
                    {errors?.email && (
                        <span className="text-xs text-red-500">入力必須</span>
                    )}
                    <input
                        {...register('email', { required: true })}
                        className="block w-full px-1.5 py-2 mb-8 leading-tight text-gray-900 bg-white border border-gray-900 rounded appearance-none focus:outline-none focus:border-gray-900"
                        type="text"
                    />
                    <span className="mr-3 font-plus">お問い合わせ内容</span>
                    {errors?.email && (
                        <span className="text-xs text-red-500">入力必須</span>
                    )}
                    <textarea
                        {...register('contents', { required: true })}
                        className="block w-full h-48 px-1.5 py-2 mb-12 leading-tight text-gray-900 bg-white border border-gray-900 rounded appearance-none resize-none no-resize focus:outline-none focus:border-gray-900"
                    />
                    <div className="text-center">
                        <input
                            type="submit"
                            className="px-3 py-1 text-gray-500 duration-300 bg-gray-200 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-500"
                        />
                    </div>
                </form>
            </div>
        </Layout>
    )
}
