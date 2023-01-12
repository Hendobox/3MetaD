import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Mint() {
  const [canMint, setCanMint] = useState(true);
  const handelClick = () => {
    alert("Minted");
  };

  return (
    <div>
      <div>
        <h1>Mint Page</h1>
        <h2>
          <Link href="/">Return to Home!</Link>
        </h2>
      </div>
      <div>
        {canMint ? (
          <div className={styles.card}>
            <h1 className={styles.description}>Mint 3MetaD NFT &rarr;</h1>
            <div></div>
            <button onClick={handelClick}>Mint</button>
          </div>
        ) : (
          <hi className={styles.description}>Already minted 3MetaD</hi>
        )}
      </div>
    </div>
  );
}
