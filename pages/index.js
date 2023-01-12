import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "./header";
import { initWeb3 } from "./utils.js";

export default function Home() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);

  const init = async () => {
    const web3 = await initWeb3();
    const accounts = await web3.eth.getAccounts();

    setWeb3(web3);
    setAccounts(accounts);
  };

  const disconnect = () => {
    setWeb3(undefined);
    setAccounts(undefined);
  };

  useEffect(() => {
    const triggerAlreadyInjectedWeb3 = async () => {
      if (window.ethereum) {
        if (
          window.ethereum.selectedAddress &&
          window.ethereum.networkVersion === "1"
        ) {
          await init();
          window.ethereum.on("accountsChanged", (accounts) => {
            setAccounts(accounts);
          });
        }
      }
    };
    triggerAlreadyInjectedWeb3();
  }, []);

  useEffect(() => {}, [web3, accounts]);

  return (
    <>
      {typeof accounts !== "undefined" ? (
        <div className={styles.background}>
          <div className={styles.container}>
            <Header />
            <button onClick={disconnect}>Disconnect Web3 Wallet</button>

            <div className={styles.grid}>
              <Link href="/nft/mint" className={styles.card}>
                <h3>Mint &rarr;</h3>
                <p>This is where to mint your 3MetaD NFT</p>
              </Link>
              <Link href="/nft/view" className={styles.card}>
                <h3>View &rarr;</h3>
                <p>This is where to check your minted 3MetaD NFT</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.background}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <button onClick={init}>Connect Web3 Wallet</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
