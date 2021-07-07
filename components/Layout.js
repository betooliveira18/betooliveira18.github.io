import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import utilStyles from "../styles/utils.module.css";
import data from '../data.json';

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={utilStyles.grid}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Blog :: Ediberto B.O</title>
      </Head>
      <Header data={data.header} />
      <div className={styles.container}>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <main>{children}</main>
      </div>
      <Footer data={data.footer}/>
    </div>
  );
}
