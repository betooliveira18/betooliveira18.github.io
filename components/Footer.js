
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

export default function Footer({data}) {
  const { response } = data

  return (
    <footer className={styles.footer}>
        <span className={utilStyles.headingMd}>{response}</span>
      </footer>
  )
}