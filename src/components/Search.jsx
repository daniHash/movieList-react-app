import { useRef } from "react";
import useKey from "../hooks/useKey";

const Search = ({ query, setQuery }) => {
  const inputElement = useRef(null);
  useKey(() => {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  }, "enter");
  return (
    <input
      onChange={() => {
        setQuery(() => event.target.value);
      }}
      autoFocus
      value={query}
      type="text"
      name=""
      className="search "
      placeholder="Search movies..."
      ref={inputElement}
    />
  );
};

export default Search;
