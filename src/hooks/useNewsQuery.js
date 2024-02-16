import { useEffect, useState } from "react";

export default function useNewsQuery({ category } = { category: "general" }) {
  const [news, setNews] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    let ignore = false;

    const fetchNews = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/v2/top-headlines?category=${category}`
        );

        if (!response.ok) {
          throw new Error("Failed to load news.");
        }

        if (ignore) {
          return;
        }

        const jsonData = await response.json();

        setNews(jsonData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchNews();

    return () => (ignore = true);
  }, [category]);

  return { news, isError, isLoading };
}
