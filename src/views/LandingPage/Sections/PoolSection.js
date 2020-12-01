import React from "react";
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

const CpuContainerStyled = styled(GridContainer)`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

const useStyles = makeStyles(styles);

export default function PoolSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Pools</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <PoolCard
            name={"Nova Era pool [ERA]"}
            address={"13375a4a5470b564246a3251ea0ccfef046ee5bcaf3ed6de6315abc7"}
            margin={"1%"}
            fixedFee={"340"}
            pledge={"4000"}
            delegateLink={"/faq"}
            poolLink={"/pool?id=ERA"}
            kickstart
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <PoolCard
            name={"Cardano Pools United [CPU]"}
            address={"b45c1860e038baa0642b352ccf447ed5e14430342a11dd75bae52f39"}
            margin={"2%"}
            fixedFee={"340"}
            pledge={"50000"}
            delegateLink={"/faq"}
            poolLink={"/pool?id=CPU"}
            isMain
            kickstart
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <PoolCard
            name={"Utterly Determined Pool [UDP]"}
            address={"9f38b462566102fe9bc1061131f298164d51ea54464ad984d486ce87"}
            margin={"0.85%"}
            fixedFee={"340"}
            pledge={"5000"}
            delegateLink={"/faq"}
            poolLink={"/pool?id=UDP"}
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}></GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <PoolCard
            name={"Fresco Pool [VENUS]"}
            address={"19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253"}
            margin={"0.85%"}
            fixedFee={"340"}
            pledge={"70000"}
            delegateLink={"/faq"}
            poolLink={"/pool?id=VENUS"}
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <PoolCard
            name={"ADAstra Mines  [MINES]"}
            address={"3e5fcbaf750c0291cecb72384091724a1c2d35da10a71473e16c926f"}
            margin={"1%"}
            fixedFee={"340"}
            pledge={"5400"}
            kickstart
            delegateLink={"/faq"}
            poolLink={"/pool?id=MINES"}
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}></GridItem>
      </GridContainer>
    </div>
  );
}
