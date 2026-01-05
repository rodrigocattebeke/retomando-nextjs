import React from "react";
import styles from "./NewsCard.module.css";
import Image from "next/image";
import Link from "next/link";

export const NewsCard = ({ title, category, imageURL, newsId }) => {
  return (
    <article className={styles.newsCard}>
      <Link href={`./news/${title}?id=${newsId}`} className={styles.newsImgContainer}>
        <Image src={imageURL} alt={`Imagen de ${title}`} width={100} height={80} />
      </Link>
      <div className={styles.newsBody}>
        <span className={styles.newsType}>{category.toUpperCase()}</span>
        <Link href={`./news/${title}?id=${newsId}`} className={styles.newsTitle}>
          <h2>{title}</h2>
        </Link>
      </div>
    </article>
  );
};
