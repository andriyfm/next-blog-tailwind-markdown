import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import styles from "./styles.module.css";

interface CardList {
  children: ReactNode;
}

export function CardList(props: CardList): ReactElement {
  return <div className={styles.cardList}>{props.children}</div>;
}

interface CardItem {
  title: string;
  content: string;
  date: string;
  slug: string;
}

export function CardItem(props: CardItem): ReactElement {
  return (
    <Link href={`/${props.slug}`}>
      <a className={styles.cardItem}>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <small>{props.date}</small>
        <p className={styles.cardContent}>{props.content}</p>
      </a>
    </Link>
  );
}
