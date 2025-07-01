import { useState, useEffect } from "react";

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function getData() {
      try {
        setError("");
        setIsLoader(true);
        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=63c230f2&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error("somthing went wrong");
        }
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        } else {
          setMovies(() => data.Search || []);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoader(false);
      }
    }
    getData();
    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoader, error };
};

export default useMovies;
