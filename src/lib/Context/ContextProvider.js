import AppContext from "./Context";
import React, { useState, useEffect } from "react";

const MyProvider = (props) => {
  const [globalStats, setGlobalStats] = useState();

  const fetchGlobalStats = () => {
    fetch("https://js.adapools.org/global.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        setGlobalStats(response);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchGlobalStats();
  }, []);

  return (
    <AppContext.Provider value={{ globalStats }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default MyProvider;
