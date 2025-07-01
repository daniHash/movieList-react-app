import Li from "./Li";

const MovieList = ({ movies, onClick }) => {
  return (
    <ul className="list list-movies">
      {movies.map((m) => {
        return (
          <Li m={m} key={m.imdbID} onClick={onClick}>
            <div className="">
              <p className="">
                <span>📆</span>
                <span>{m.Year}</span>
              </p>
            </div>
          </Li>
        );
      })}
    </ul>
  );
};

export default MovieList;
