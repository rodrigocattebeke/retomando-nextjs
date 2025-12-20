import { getSingleNews } from "@/services/news/getSingleNews";
import React from "react";

export async function generateMetadata() {
  const news = await getSingleNews();

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

export default async function News({ params }) {
  const news = await getSingleNews();
  console.log(news);
  return (
    <div>
      <h1>Noticia</h1>
      <section></section>
    </div>
  );
}
