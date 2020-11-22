import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/cardanoIntroStyle.js";

const useStyles = makeStyles(styles);

export default function CardanoInfoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Cardano</h2>
          <h5 className={classes.description}>
            Are you just getting started with Cardano? Head over to{" "}
            <a target="_blank" rel="noreferrer" href="https://cardano.org/">
              Cardano.org{" "}
            </a>
            for more info or take a look at the following links:
            <ul>
              <li>
                <a href="#">What is Cardano?</a>
              </li>
              <li>
                <a href="#">What is ADA?</a>
              </li>
              <li>
                <a href="#">How to buy/sell ADA?</a>
              </li>
              <li>
                <a href="#">Storing your ADA in official wallets?</a>
              </li>
              <li>
                <a href="#">Future of Cardano network?</a>
              </li>
            </ul>
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
