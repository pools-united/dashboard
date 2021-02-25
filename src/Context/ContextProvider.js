/* eslint-disable react/prop-types */
import AppContext from "./Context";
import React, { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const MyProvider = (props) => {
  const [globalStats, setGlobalStats] = useState({});
  const [poolStats, setPoolStats] = useState({});
  const [protocol, setProtocol] = useState({});
  const [adaPrice, setAdaPrice] = useState({});
  const poolIds = {
    VENUS: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
    ERA: "13375a4a5470b564246a3251ea0ccfef046ee5bcaf3ed6de6315abc7",
    CPU: "b45c1860e038baa0642b352ccf447ed5e14430342a11dd75bae52f39",
    MINES: "3e5fcbaf750c0291cecb72384091724a1c2d35da10a71473e16c926f",
    // UDP: "9f38b462566102fe9bc1061131f298164d51ea54464ad984d486ce87",
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
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=Ada&tsyms=BTC,USD,EUR&api_key=da5c2209128482ded3f5dabbe7260d828b351b7a62c6fc18a5f41fc8f336f12e",
      setAdaPrice,
      "normal"
    );

    fetchStats(
      `https://js.adapools.org/pools/${poolIds.VENUS}/summary.json`,
      setPoolStats,
      "pool",
      "VENUS"
    );
    fetchStats(
      `https://js.adapools.org/pools/${poolIds.MINES}/summary.json`,
      setPoolStats,
      "pool",
      "MINES"
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
    // fetchStats(
    //   `https://js.adapools.org/pools/${poolIds.UDP}/summary.json`,
    //   setPoolStats,
    //   "pool",
    //   "UDP"
    // );
  }, []);

  return (
    <AppContext.Provider
      value={{ globalStats, poolStats, protocol, scrollOffset, adaPrice }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default MyProvider;
