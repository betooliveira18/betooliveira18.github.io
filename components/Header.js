import Link from "next/link";
import styles from "./header.module.css";
import utilStyles from "../styles/utils.module.css";

const Navbar = ({ title, menu }) => {
  return (
    <nav className={styles.navbar}>
      <h1>
        <Link href="/"><a className={`${utilStyles.headingMd} ${styles.headerTitle}`}>{title}</a></Link>
      </h1>
      <ul className={utilStyles.listInline}>
        {menu.map((item) => (
          <li key={item.name}>
            <a href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <a className={`${utilStyles.btn} ${utilStyles.btnDownload}`} href="/">
            {" "}
            CV Download
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default function Header({ data }) {
  const { title, menu } = data;

  return (
    <header className={styles.header}>
      <Navbar title={title} menu={menu} />
    </header>
  );
}
