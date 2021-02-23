import Layout from "@/components/Layout";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <Layout title="About">
      <h1 className={styles.title}>About</h1>
    </Layout>
  );
}
