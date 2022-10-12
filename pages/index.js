import Head from "next/head";
import styles from "../styles/Home.module.css";
// import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <ManualHeader></ManualHeader> */}
      <Header></Header>
      <LotteryEntrance></LotteryEntrance>
    </div>
  );
}
