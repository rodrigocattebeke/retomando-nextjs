import { NewsList } from "@/components/news/newsList/NewsList";
import { getLatestsNews } from "@/services/news/getLatestsNews";
import React from "react";

export const metadata = {
  title: "Noticias",
  description: "Las últimas noticias de latinoamerica en un solo lugar",
};

export default async function News() {
  const news = await getLatestsNews();
  return (
    <div>
      <h1>Portal de noticias</h1>
      <NewsList title="Lo Último" news={news.results} />
    </div>
  );
}
