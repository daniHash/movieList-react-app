import SummaryInform from "./SummaryInform";

const Summary = ({ whatched }) => {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(whatched.map((movie) => movie.imdbRating));
  const avgUserRating = average(whatched.map((movie) => movie.userRating));
  const avgRuntime = average(whatched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>MOVIES YOU WHATCHED</h2>
      <div className="">
        <SummaryInform>#️⃣ {whatched.length}</SummaryInform>
        <SummaryInform>⭐ {avgImdbRating.toFixed(1)}</SummaryInform>
        <SummaryInform>🌟 {avgUserRating.toFixed(1)}</SummaryInform>
        <SummaryInform>⏳ {avgRuntime.toFixed(0)}</SummaryInform>
      </div>
    </div>
  );
};

export default Summary;
