import { NewsCard } from "@/components/news/newsCard/NewsCard";
import styles from "./NewsList.module.css";

export const NewsList = ({ title, initialNews }) => {
  return (
    <section>
      <h3>{title}</h3>
      <div className={styles.sectionGridContainer}>
        {initialNews.map((n, i) => (
          <NewsCard title={n.title} imageURL={n.image_url} category={n.category[0]} key={i} />
        ))}
      </div>
    </section>
  );
};
