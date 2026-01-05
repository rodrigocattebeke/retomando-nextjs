import { getSingleNews } from "@/services/news/getSingleNews";
import React from "react";

export async function generateMetadata({ searchParams }) {
  const { id } = await searchParams;
  const { results } = await getSingleNews(id);

  const news = results[0];

  return {
    title: news.title,
    description: news.description,
    openGraph: {
      title: news.title,
      description: news.description,
      siteName: "5 Dias Py",
      images: [
        {
          url: news.image_url,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
  };
}

export default async function News({ searchParams }) {
  const { id } = await searchParams;
  const { results } = await getSingleNews(id);
  const news = results[0];
  return (
    <div>
      <h1>Noticia</h1>
      <section></section>
    </div>
  );
}
