import news from "@/dev/news.json";

export const getSingleNews = async (newsId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/news?id=${newsId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
};
