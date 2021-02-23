import { CardItem, CardList } from "@/components/Card";
import Layout from "@/components/Layout";
import postsData from "@/lib/postsData";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <h1 className={styles.title}>Home</h1>

      {postsData.map((item) => (
        <CardList>
          <CardItem
            key={item.slug}
            slug={item.slug}
            title={item.title}
            content={item.content}
            date={item.date.toISOString()}
          />
        </CardList>
      ))}
    </Layout>
  );
}
