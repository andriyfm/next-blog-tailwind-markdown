import Head from "next/head";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>
      </main>

      <Footer />
    </div>
  );
}
