/* eslint-disable react/prop-types */
import AppContext from "./Context";
import React, { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const MyProvider = (props) => {
  const [adaPrice, setAdaPrice] = useState({});
  const [globalStatsCx, setGlobalStatsCx] = useState({});
  const [poolStatsCx, setPoolStatsCx] = useState({});
  const [customApi, setCustomApi] = useState({});

  const [scrollOffset, setScrollOffset] = useState(0);
  useScrollPosition(({ prevPos, currPos }) => {
    setScrollOffset(currPos.y);
  });

  // Transform pool data from new API format to expected frontend format
  const transformPoolData = (poolData) => {
    // Transform epochs data for performance history graph
    const transformedStats = poolData.epochs?.slice(0, 10).reverse().map(epoch => ({
      blocks: epoch.data?.block?.minted || 0,
      return_member: epoch.data?.reward?.member_pct || 0,
    })) || [];

    return {
      data: {
        // Pool ID
        pool_id_hash: poolData.hash_raw,

        // Stake data
        stake_active: poolData.active_stake,
        stake: poolData.live_stake,

        // Blocks
        blocks_est_epoch: parseFloat(poolData.epochs?.[0]?.data?.block?.estimated || 0).toFixed(2),
        blocks_epoch: poolData.blocks?.epoch || 0,
        blocks_lifetime: poolData.blocks?.total || 0,

        // Fees
        pledge: poolData.pool_update?.active?.pledge || 0,
        margin: poolData.pool_update?.active?.margin || 0,
        fixed_cost: poolData.pool_update?.active?.fixed_cost || 0,
        tax_fix: poolData.pool_update?.active?.fixed_cost || 0, // legacy field name
        tax_ratio: (poolData.pool_update?.active?.margin || 0) * 100, // legacy field name (as percentage)

        // ROA
        roa_lifetime: poolData.stats?.lifetime?.roa || 0,

        // Performance history for graph
        stats: transformedStats,

        // Other useful data
        live_stake: poolData.live_stake,
        delegators: poolData.delegators,
        saturation: poolData.saturation,
        pool_name: poolData.pool_name,
        epochs: poolData.epochs,
      }
    };
  };

  // Fetch global stats from new endpoint
  const fetchGlobalStats = async () => {
    try {
      const response = await fetch('https://cpulogs.jazbina.xyz/global');
      if (!response.ok) throw new Error("Failed to fetch global stats");
      const data = await response.json();
      setGlobalStatsCx(data);
      console.log("Global stats loaded:", data);
    } catch (error) {
      console.error("Failed to fetch global stats:", error);
    }
  };

  // Fetch pool stats from new endpoint and transform
  const fetchPoolStats = async () => {
    try {
      const response = await fetch('https://cpulogs.jazbina.xyz/pools');
      if (!response.ok) throw new Error("Failed to fetch pool stats");
      const data = await response.json();

      // Transform each pool's data to match expected frontend structure
      const transformedPools = {};
      for (const [ticker, poolData] of Object.entries(data.poolData)) {
        transformedPools[ticker] = transformPoolData(poolData);
      }

      setPoolStatsCx(transformedPools);
      console.log("Pool stats loaded:", transformedPools);
    } catch (error) {
      console.error("Failed to fetch pool stats:", error);
    }
  };

  // Fetch other stats (price, custom API)
  const fetchStats = async (url, stateSet) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      stateSet(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch from new endpoints
    fetchGlobalStats();
    fetchPoolStats();

    // Fetch custom API (unchanged)
    fetchStats('https://cpulogs.jazbina.xyz/api', setCustomApi);

    // Fetch ADA price (unchanged)
    fetchStats(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=Ada&tsyms=BTC,USD,EUR&api_key=da5c2209128482ded3f5dabbe7260d828b351b7a62c6fc18a5f41fc8f336f12e",
      setAdaPrice
    );
  }, []);

  return (
    <AppContext.Provider
      value={{ globalStatsCx, customApi, poolStatsCx, scrollOffset, adaPrice }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default MyProvider;
