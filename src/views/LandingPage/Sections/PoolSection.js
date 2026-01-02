import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import PoolCard from "components/PoolCard/PoolCard.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styled from "styled-components";

import face from "assets/img/faces/marc.jpg";
import AppContext from "Context/Context.js";

const CpuContainerStyled = styled(GridContainer)`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

const useStyles = makeStyles(styles);

const GridItemStyled = styled(GridItem)`

@media (min-width: 958px) {
  max-width: 50% !important;
  
}

`

export default function PoolSection() {
  const classes = useStyles();
  const context = useContext(AppContext);

  // Helper function to get pool data
  const getPoolData = (ticker) => {
    return context?.poolStatsCx?.[ticker]?.data || {};
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>CPU collaboration Pools</h2>
      <GridContainer style={{justifyContent: 'center'}}>
        <GridItemStyled xs={12} sm={12} md={4}>
          <PoolCard
            name={"Cardano Pools United [CPU]"}
            address={"b45c1860e038baa0642b352ccf447ed5e14430342a11dd75bae52f39"}
            margin={getPoolData('CPU').margin ? `${(getPoolData('CPU').margin * 100).toFixed(2)}%` : "0%"}
            fixedFee={getPoolData('CPU').fixed_cost ? (getPoolData('CPU').fixed_cost / 1000000).toFixed(0) : "170"}
            pledge={getPoolData('CPU').pledge ? (getPoolData('CPU').pledge / 1000000).toFixed(0) : "4000"}
            kickstart
            poolLogo={"https://pools-united.github.io/pools/CPU/assets/cpu_64.png"}
            delegateLink={"/faq#StoreAndDelegate"}
            poolLink={"/pool?id=CPU"}
            isMain
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItemStyled>
        <GridItemStyled xs={12} sm={12} md={4}>
          <PoolCard
            name={"Nova Era Pool [ERA]"}
            address={"13375a4a5470b564246a3251ea0ccfef046ee5bcaf3ed6de6315abc7"}
            margin={getPoolData('ERA').margin ? `${(getPoolData('ERA').margin * 100).toFixed(2)}%` : "0%"}
            fixedFee={getPoolData('ERA').fixed_cost ? (getPoolData('ERA').fixed_cost / 1000000).toFixed(0) : "170"}
            pledge={getPoolData('ERA').pledge ? (getPoolData('ERA').pledge / 1000000).toFixed(0) : "40000"}
            poolLogo={"https://pools-united.github.io/pools/ERA/assets/era_64.png"}
            delegateLink={"/faq#StoreAndDelegate"}
            poolLink={"/pool?id=ERA"}
            kickstart
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItemStyled>
        <GridItemStyled xs={12} sm={12} md={4}>
          <PoolCard
            name={"Fresco Pool [VENUS]"}
            address={"19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253"}
            margin={getPoolData('VENUS').margin ? `${(getPoolData('VENUS').margin * 100).toFixed(2)}%` : "0.85%"}
            fixedFee={getPoolData('VENUS').fixed_cost ? (getPoolData('VENUS').fixed_cost / 1000000).toFixed(0) : "340"}
            pledge={getPoolData('VENUS').pledge ? (getPoolData('VENUS').pledge / 1000000).toFixed(0) : "70000"}
            poolLogo = {"https://pools-united.github.io/pools/VENUS/assets/fresco_64.png"}
            delegateLink={"/faq#StoreAndDelegate"}
            poolLink={"/pool?id=VENUS"}
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItemStyled>
        <GridItemStyled xs={12} sm={12} md={4}>
          <PoolCard
            name={"ADAstra Mines  [MINES]"}
            address={"3e5fcbaf750c0291cecb72384091724a1c2d35da10a71473e16c926f"}
            margin={getPoolData('MINES').margin ? `${(getPoolData('MINES').margin * 100).toFixed(2)}%` : "1%"}
            fixedFee={getPoolData('MINES').fixed_cost ? (getPoolData('MINES').fixed_cost / 1000000).toFixed(0) : "340"}
            pledge={getPoolData('MINES').pledge ? (getPoolData('MINES').pledge / 1000000).toFixed(0) : "1"}
            kickstart
            poolLogo={"https://pools-united.github.io/pools/MINES/assets/mines_64.png"}
            delegateLink={"/faq#StoreAndDelegate"}
            poolLink={"/pool?id=MINES"}
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItemStyled>
        <GridItemStyled xs={12} sm={12} md={4}>
          <PoolCard
            name={"Cahli Pool  [CAHLI]"}
            address={"3ee7ce97d36822f511cac6bbd76b70350684f8bb4ced5366842a96c9"}
            margin={getPoolData('CAHLI').margin ? `${(getPoolData('CAHLI').margin * 100).toFixed(2)}%` : "0%"}
            fixedFee={getPoolData('CAHLI').fixed_cost ? (getPoolData('CAHLI').fixed_cost / 1000000).toFixed(0) : "170"}
            pledge={getPoolData('CAHLI').pledge ? (getPoolData('CAHLI').pledge / 1000000).toFixed(0) : "2000"}
            kickstart
            poolLogo={"https://pools-united.github.io/pools/CAHLI/assets/cahli_64.png"}
            delegateLink={"/faq#StoreAndDelegate"}
            poolLink={"/pool?id=CAHLI"}
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItemStyled>
      </GridContainer>
    </div>
  );
}
