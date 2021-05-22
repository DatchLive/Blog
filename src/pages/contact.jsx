import { Layout } from 'src/components/layout'
import { BtnComponent } from 'src/components/btn'
import { Title } from 'src/components/title'

export default function Contact() {
    return (
        <Layout>
            <Title title="contact" />
            <div>
                <span className="font-plus">お名前</span>
                <input
                    className="block w-full px-4 py-2 mb-8 leading-tight text-gray-900 bg-white border border-gray-900 rounded appearance-none focus:outline-none focus:border-gray-900"
                    id="nick"
                    type="text"
                ></input>
                <span className="font-plus">メールアドレス</span>
                <input
                    className="block w-full px-4 py-2 mb-8 leading-tight text-gray-900 bg-white border border-gray-900 rounded appearance-none focus:outline-none focus:border-gray-900"
                    id="mail"
                    type="text"
                ></input>
                <span className="font-plus">お問い合わせ内容</span>
                <textarea
                    className="block w-full h-48 px-4 py-3 mb-12 leading-tight text-gray-900 bg-white border border-gray-900 rounded appearance-none resize-none no-resize focus:outline-none focus:border-gray-900"
                    id="message"
                ></textarea>

                <div className="text-center">
                    <BtnComponent btnText="送信" />
                </div>
            </div>
        </Layout>
    )
}
