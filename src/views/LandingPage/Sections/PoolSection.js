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
            name={"ERA Pool [ERA]"}
            address={"fb3cc38ce8ca95d45b8c5760be51f16d54cf54a1d0c31820ffd2ddc7"}
            margin={"25%"}
            fixedFee={"350"}
            pledge={"5000"}
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
            address={"fb3cc38ce8ca95d45b8c5760be51f16d54cf54a1d0c31820ffd2ddc7"}
            margin={"25%"}
            fixedFee={"350"}
            pledge={"5000"}
            delegateLink={"/faq"}
            poolLink={"/pool?id=CPU"}
            isMain
            operator={{
              name: "Name#1",
              image: face,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <PoolCard
            name={"Dario Pool [TBP]"}
            address={"fb3cc38ce8ca95d45b8c5760be51f16d54cf54a1d0c31820ffd2ddc7"}
            margin={"25%"}
            fixedFee={"350"}
            pledge={"5000"}
            delegateLink={"/faq"}
            poolLink={"/pool?id=TBD"}
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
            name={"MOBILE Pool [MOBILE]"}
            address={"19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253"}
            margin={"0.85%"}
            fixedFee={"340"}
            pledge={"70000"}
            delegateLink={"/faq"}
            poolLink={"/pool?id=RANDO"}
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
