import Link from "next/link";
import Head from "next/head";
import Layout from '../../components/Layout'
import ListPosts from "../../components/ListPosts";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Post({allPostsData}) {
  const listPosts = {title: "Postagens", posts: allPostsData}
  return (
    <Layout home>
      <Head>
        <title>Blog :: List Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListPosts listPosts={ {...listPosts} }/>
    </Layout>
  );
}
