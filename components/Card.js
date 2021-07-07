import styles from "./card.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Card({data}) {
  const { title, subtitle, link } = data
  return (
    <div className={styles.card}>
      <h2 className={utilStyles.headingXl}>{title}</h2>
      <h3 className={utilStyles.headingLg}>{subtitle}</h3>
      <br />
      <p className={utilStyles.headingMg}>
        {link[0].text} <Link href="/about">{link[0].key}</Link>.
      </p>
      <p className={utilStyles.headingMg}>
      {link[1].text}<a href="/contact">{link[1].key}</a>.
      </p>
    </div>
  );
}
