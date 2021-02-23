import Layout from "@/components/Layout";
import postsData, { PostData } from "@/lib/postsData";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactElement } from "react";
import styles from "./styles.module.css";

export default function BlogDetail(props: PostData): ReactElement {
  return (
    <Layout title="Blog Detail">
      <h1 className={styles.title}>{props.title}</h1>
      <p>{props.content}</p>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: postsData.find((item) => item.slug === context.params.slug),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: postsData.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
};
