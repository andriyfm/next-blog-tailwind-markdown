import { Fragment, ReactChild, ReactElement } from "react";
import Head from "next/head";
import Footer from "../Footer";
import Nav from "../Nav";
import styles from "./styles.module.css";

interface Props {
  title: string;
  children: ReactChild;
}

export default function Layout(props: Props): ReactElement {
  return (
    <Fragment>
      <div className={styles.container}>
        <Head>
          <title>{props.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <main className={styles.main}>{props.children}</main>

        <Footer />
      </div>
    </Fragment>
  );
}
