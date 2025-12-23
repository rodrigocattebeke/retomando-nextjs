export const getLatestsNews = async ({ page } = {}) => {
  const BASE_URL = "http://localhost:3000/api/news";
  let url = BASE_URL;

  if (page) {
    url += `?page=${page}`;
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
};
