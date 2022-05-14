import Document, { Html, Head, Main, NextScript } from "next/document";

// HTML全体のひな形になる
// Reactコンポーネント外部のタグ追加に利用する
// 便利だが、使いどころは慎重に行った方がよいかも。素直に、コンポーネントに定義したほうが良いとも思える。
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
