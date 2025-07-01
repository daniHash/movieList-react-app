import Li from "./Li";
import SummaryInform from "./SummaryInform";
const WatchedList = ({ whatched, onDelete }) => {
  return (
    <ul className="list">
      {whatched.map((m) => {
        return (
          <Li m={m} key={m.imdbID}>
            <div className="">
              <SummaryInform>⭐ {m.imdbRating}</SummaryInform>
              <SummaryInform>🌟 {m.userRating}</SummaryInform>
              <SummaryInform>⏳ {m.runtime} min</SummaryInform>
              <button
                className="btn-delete"
                onClick={() => {
                  onDelete(m.imdbID);
                }}
              >
                X
              </button>
            </div>
          </Li>
        );
      })}
    </ul>
  );
};
export default WatchedList;
