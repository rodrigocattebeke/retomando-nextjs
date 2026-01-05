"use client";
import { NewsCard } from "@/components/news/newsCard/NewsCard";
import styles from "./NewsList.module.css";
import { useState } from "react";
import { getLatestsNews } from "@/services/news/getLatestsNews";

export const NewsList = ({ title, initialNews, nextPage }) => {
  const [nxtPage, setNextPage] = useState(nextPage);
  const [news, setNews] = useState(initialNews);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadMoreNews = async () => {
    if (loading || !nxtPage) return;
    setError("");
    setLoading(true);
    const res = await getLatestsNews({ page: nxtPage });
    if (res.status === "success") {
      setNews((prev) => [...prev, ...res.results]);
      setNextPage(res.nextPage);
    } else {
      setError(typeof res.error === "string" ? res.error : "Error al cargar");
    }
    setLoading(false);
  };

  return (
    <section>
      <h3>{title}</h3>
      <div className={styles.sectionGridContainer} aria-busy={loading}>
        {news.map((n) => (
          <NewsCard title={n.title} imageURL={n.image_url} category={n.category[0]} newsId={n.article_id} key={n.article_id} />
        ))}
      </div>
      {nxtPage && (
        <div className="d-flex mt-2 flex-column gap-2">
          <button className="btn btn-secondary" onClick={loadMoreNews} disabled={loading}>
            {loading ? "Cargando..." : "Cargar más"}
          </button>
          {error ? <small className="text-center">{error}</small> : ""}
        </div>
      )}
      {!nxtPage && <small className="text-center">No hay más noticias para mostrar</small>}
    </section>
  );
};
