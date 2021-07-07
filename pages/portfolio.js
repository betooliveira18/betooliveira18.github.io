import Layout, { siteTitle } from "../components/Layout";
import data from "../data.json";
import utilStyles from "../styles/utils.module.css";

export default function Portfolio({ allPostsData }) {
  return (
    <Layout home>
      <h1 className={utilStyles.headingXl}>Portifolio</h1>
    </Layout>
  );
}
