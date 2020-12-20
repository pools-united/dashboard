import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/cardanoIntroStyle.js";
import { Route } from "react-router-dom";

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
                <Link to="/faq#WhatIsCardano">What is Cardano?</Link>
              </li>
              <li>
                <a href="https://cardano.org/what-is-ada/" target="_blank">
                  What is ADA?
                </a>
              </li>
              <li>
                <Link to="/faq#HowToBuySell">How to buy/sell ADA?</Link>
              </li>
              <li>
                <a
                  href="https://cardano.org/what-is-ada#wallets"
                  target="_blank"
                >
                  Storing your ADA in official wallets
                </a>
              </li>
              <li>
                <Link to="/faq">How to delegate your ADA</Link>
              </li>
              <li>
                <Link to="/faq">Future of Cardano network?</Link>
              </li>
            </ul>
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
