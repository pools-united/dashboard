/* eslint-disable react/prop-types */
import AppContext from "./Context";
import React, { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const MyProvider = (props) => {
  const [globalStats, setGlobalStats] = useState({});
  const [poolStats, setPoolStats] = useState({});
  const [protocol, setProtocol] = useState({});
  const poolIds = {
    VENUS: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
    ERA: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
    CPU: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
  };
  const [scrollOffset, setScrollOffset] = useState(0);
  useScrollPosition(({ prevPos, currPos }) => {
    setScrollOffset(currPos.y);
    // console.log(currPos.y);
  });

  const fetchStats = async (url, stateSet, fetchType, poolTicker) => {
    await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        if (fetchType === "normal") {
          stateSet(response);
        } else {
          stateSet((prevState) => ({ ...prevState, [poolTicker]: response }));
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    //fetch global ada stats
    fetchStats("https://js.adapools.org/global.json", setGlobalStats, "normal");
    fetchStats("https://js.adapools.org/protocol.json", setProtocol, "normal");

    fetchStats(
      `https://js.adapools.org/pools/${poolIds.VENUS}/summary.json`,
      setPoolStats,
      "pool",
      "VENUS"
    );
    fetchStats(
      `https://js.adapools.org/pools/${poolIds.CPU}/summary.json`,
      setPoolStats,
      "pool",
      "CPU"
    );
    fetchStats(
      `https://js.adapools.org/pools/${poolIds.ERA}/summary.json`,
      setPoolStats,
      "pool",
      "ERA"
    );
  }, []);

  return (
    <AppContext.Provider
      value={{ globalStats, poolStats, protocol, scrollOffset }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default MyProvider;
