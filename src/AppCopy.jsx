import Main from "./components/Main";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import Summary from "./components/Summary";

import { useEffect, useState } from "react";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];
const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const App = () => {
  const [movies, setMovies] = useState([]);
  const [whatched, setWhatched] = useState(tempWatchedData);
  const search = "peaky";
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=63c230f2&s=${search}`
      );
      const data = await res.json();
      setMovies(() => data.Search);
    }
    getData();
  }, [movies]);
  return (
    <>
      <Nav movies={movies}>
        <Logo />
        <Search />
      </Nav>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <Summary whatched={whatched} />
          <WatchedList whatched={whatched} />
        </Box>
      </Main>
    </>
  );
};

export default App;
