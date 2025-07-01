import Main from "./components/Main";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import Summary from "./components/Summary";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import SelectedMovieDetails from "./components/selectedMovieDetails";

import { useState } from "react";
import useMovies from "./hooks/useMovies";
import useLocalStorageState from "./hooks/useLocalStorageState";

const App = () => {
  const [whatched, setWhatched] = useLocalStorageState([], "whatchedMovies");
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies, isLoader, error } = useMovies(query);

  const handleSelect = (id) => {
    id === selectedMovie ? setSelectedMovie(null) : setSelectedMovie(() => id);
  };
  const handleCloseMovie = () => {
    setSelectedMovie(null);
  };
  const handleAddBtn = (movie) => {
    setWhatched((w) => [...w, movie]);
    handleCloseMovie();
  };
  const handleDelete = (id) => {
    const movie = whatched.filter((m) => {
      return m.imdbID != id;
    });
    setWhatched(movie);
  };
  return (
    <>
      <Nav movies={movies}>
        <Logo />
        <Search query={query} setQuery={setQuery} />
      </Nav>
      <Main>
        <Box>
          {isLoader ? (
            <Loader />
          ) : error ? (
            <ErrorMessage err={error} />
          ) : (
            <MovieList movies={movies} onClick={handleSelect} />
          )}
        </Box>
        <Box>
          {selectedMovie ? (
            <SelectedMovieDetails
              selectedMovie={selectedMovie}
              onCloseMovie={handleCloseMovie}
              onAddBtn={handleAddBtn}
              watched={whatched}
            />
          ) : (
            <>
              <Summary whatched={whatched} />
              <WatchedList whatched={whatched} onDelete={handleDelete} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
