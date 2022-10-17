/* eslint-disable react/prop-types */
import AppContext from "./Context";
import React, { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const MyProvider = (props) => {
  const [adaPrice, setAdaPrice] = useState({});
  const [globalStatsCx, setGlobalStatsCx] = useState({});
  const [poolStatsCx, setPoolStatsCx] = useState({});
  const [customApi, setCustomApi] = useState({});
  
  const poolIds = {
    VENUS: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
    ERA: "13375a4a5470b564246a3251ea0ccfef046ee5bcaf3ed6de6315abc7",
    CPU: "b45c1860e038baa0642b352ccf447ed5e14430342a11dd75bae52f39",
    MINES: "3e5fcbaf750c0291cecb72384091724a1c2d35da10a71473e16c926f",
  };
  const poolIdsBech ={
    VENUS: "pool1r8938r4ts8f4t8nsp9xl9dktzapt7f67jgpsp4wrju39xrdnaye",
    ERA: "pool1zvm45jj5wz6kgfr2xfg75rx0auzxaedu4ulddhnrzk4uwuyuvpn",
    CPU:"pool1k3wpsc8q8za2qeptx5kv73r76hs5gvp59gga6ad6u5hnj3scy3q",
    MINES:"pool18e0uhtm4pspfrnktwguypytjfgwz6dw6zzn3gulpdjfx7qd0439",
  }
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
    fetchStats('https://js.cexplorer.io/api-static/basic/global.json', setGlobalStatsCx, "normal")
    fetchStats('https://cpulogs.jazbina.xyz/api', setCustomApi, "normal")


    fetchStats(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=Ada&tsyms=BTC,USD,EUR&api_key=da5c2209128482ded3f5dabbe7260d828b351b7a62c6fc18a5f41fc8f336f12e",
      setAdaPrice,
      "normal"
    );
    fetchStats(
      `https://js.cexplorer.io/api-static/pool/${poolIdsBech.VENUS}.json`,
      setPoolStatsCx,
      "pool",
      "VENUS"
    );
    fetchStats(
      `https://js.cexplorer.io/api-static/pool/${poolIdsBech.MINES}.json`,
      setPoolStatsCx,
      "pool",
      "MINES"
    );
    fetchStats(
      `https://js.cexplorer.io/api-static/pool/${poolIdsBech.CPU}.json`,
      setPoolStatsCx,
      "pool",
      "CPU"
    );
    fetchStats(
      `https://js.cexplorer.io/api-static/pool/${poolIdsBech.ERA}.json`,
      setPoolStatsCx,
      "pool",
      "ERA"
    );

    
  }, []);

  return (
    <AppContext.Provider
      value={{  globalStatsCx, customApi, poolStatsCx, scrollOffset, adaPrice }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default MyProvider;
