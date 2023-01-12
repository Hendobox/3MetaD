import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.title}>
      <Head>
        <title>3MetaD Minting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
