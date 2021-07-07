import Layout, { siteTitle } from "../components/Layout";
import data from "../data.json";
import utilStyles from "../styles/utils.module.css";

export default function About({ allPostsData }) {
  const { title } = data.about
  return (
    <Layout home>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <br />
      <p>...</p>
    </Layout>
  );
}