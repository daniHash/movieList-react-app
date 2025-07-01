import { useEffect, useRef, useState } from "react";
import StarRating from "./starRating";
import Loader from "./Loader";
import useKey from "../hooks/useKey";
const SelectedMovieDetails = ({
  selectedMovie,
  onCloseMovie,
  onAddBtn,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(null);
  const ref = useRef(0);

  useEffect(() => {
    if (userRating) ref.current += 1;
  }, [userRating]);
  const {
    Title,
    Year: year,
    Poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedMovie,
      Title,
      year,
      Poster,
      imdbRating: +imdbRating,
      runtime: +runtime.split(" ").at(0),
      userRating,
      countOfDesition: ref.current,
    };
    onAddBtn(newWatchedMovie);
  };
  const watchedMovie = watched.find((m) => m.imdbID === selectedMovie);
  useKey(onCloseMovie, "escape");
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=63c230f2&i=${selectedMovie}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedMovie]
  );
  useEffect(() => {
    if (!Title) return;
    document.title = `Movie | ${Title}`;

    return function () {
      document.title = "usePopcorn";
    };
  }, [Title]);

  return (
    <div className="details" onKeyUp={onCloseMovie}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={Poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          {/* <p>{avgRating}</p> */}

          <section>
            <div className="rating">
              {watchedMovie ? (
                <p>You rated with movie {watchedMovie.userRating} ⭐</p>
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    onSetRating={setUserRating}
                    size={24}
                    color="rgba(252 , 196 , 25)"
                  />
                  {userRating && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};
export default SelectedMovieDetails;
