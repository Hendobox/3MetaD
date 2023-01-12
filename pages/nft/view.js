import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function ViewItem({ cover, description, id }) {
  return (
    <div>
      <div>
        <h1>View Page</h1>
        <h2>
          <Link href="/">Return to Home!</Link>
        </h2>
      </div>
      <div className={styles.grid}>
        <img className={styles.itemcover} src={cover} alt={"image cover"} />
        <div className={styles.description}>
          <hi>{description}</hi>
          Token ID: {id}
        </div>
      </div>
    </div>
  );
}
