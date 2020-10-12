import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import PoolCard from "components/PoolCard/PoolCard.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import face from "assets/img/faces/marc.jpg";

const useStyles = makeStyles(styles);

export default function PoolSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <PoolCard
            name={"Deadpool [DEAD]"}
            address={"fb3cc38ce8ca95d45b8c5760be51f16d54cf54a1d0c31820ffd2ddc7"}
            margin={"25%"}
            fixedFee={"350"}
            pledge={"5000"}
            operator={{
              name: "Name#1",
              image: face
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <PoolCard
            name={"AdaPool [ADA]"}
            address={"fb3cc38ce8ca95d45b8c5760be51f16d54cf54a1d0c31820ffd2ddc7"}
            margin={"25%"}
            fixedFee={"350"}
            pledge={"5000"}
            operator={{
              name: "Name#1",
              image: face
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
            operator={{
              name: "Name#1",
              image: face
            }}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}