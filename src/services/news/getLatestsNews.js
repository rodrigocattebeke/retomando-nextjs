export const getLatestsNews = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/news");
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
};
