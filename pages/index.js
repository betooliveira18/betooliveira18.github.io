import Layout from "../components/Layout";
import Card from "../components/Card";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import ListPosts from "../components/ListPosts";
import data from "../data.json";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const listPosts = {
    title: data.map.new_posts,
    posts: allPostsData.slice(0, 3),
  };
  return (
    <Layout home>
      <Card data={data.presentation} />
      <ListPosts listPosts={{ ...listPosts }}>
        <Link href="/posts/">...</Link>
      </ListPosts>
    </Layout>
  );
}
