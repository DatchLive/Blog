import { Layout } from "../components/layout";
import { Profile } from "../components/profile";
import { Title } from "../components/title";
import { SocialMedia } from "../components/socialmedia";

export default function About() {
  return (
    <Layout>
      <Title title="about" />
      <div className="mb-16">
        <Profile
          src="datch"
          alt="だっち写真"
          name="だっち"
          introduce="1992年生まれ28歳。新卒で自動車メーカーに入社し、サスペンション機構設計を担当。学生時代にYouTubeチャンネル「DatchLiveTv」を開設し、現在チャンネル登録者5000人↑、総再生回数120万回↑まで成長。2020年より映像制作も始め、Webデザイン・プログラミング学習を始める。"
        />
        <SocialMedia
          twitter="https://twitter.com/datchlive"
          instagram="https://www.instagram.com/datchlive/"
        />
      </div>
      <Profile
        src="koyumi"
        alt="こゆみ写真"
        name="こゆみ"
        introduce="自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文"
      />
      <SocialMedia
        twitter="https://twitter.com/datchlive"
        instagram="https://www.instagram.com/datchlive/"
      />
    </Layout>
  );
}
