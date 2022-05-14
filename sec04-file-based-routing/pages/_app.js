import "../styles/globals.css";
import { Layout } from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="あなたのスキルアップに役立つイベントが見つかります"
        ></meta>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
