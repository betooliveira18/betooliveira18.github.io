import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";


const Posts = ({posts}) => {
  return (
    <ul className={utilStyles.list}>
      {posts.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.colorlightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  );
};
export default function ListPosts({ listPosts, children }) {
  const {title, posts} = listPosts
  return (
    <section className={utilStyles.padding1px}>
      <h2 className={utilStyles.headingXl}>{title}:</h2>
      <Posts posts={posts} />
      {children}
    </section>
  );
}
