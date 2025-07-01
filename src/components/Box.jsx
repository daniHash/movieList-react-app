import { useState } from "react";
import Button from "./Button";
const Box = ({ children }) => {
  const [showMovieList, setShowMovieList] = useState(true);

  const handleBtnToggle = () => {
    setShowMovieList((s) => !s);
  };
  return (
    <div className="box">
      <Button show={showMovieList} onClick={handleBtnToggle} />
      {showMovieList && children}
    </div>
  );
};

export default Box;
