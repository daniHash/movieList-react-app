import { useState, useEffect } from "react";

const useLocalStorageState = (intialState, key) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || intialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorageState;
