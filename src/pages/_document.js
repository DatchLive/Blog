import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Courgette&family=M+PLUS+1p:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-pale-yellow font-mono">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
