import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes

import Drawer from "@material-ui/core/Drawer";

// Global contextfor API
import PropTypes from "prop-types";

import AppContext from "../../Context/Context";

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import styled from "styled-components";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import CardanoIntroSection from "./Sections/CardanoIntroSection.js";
import PoolSection from "./Sections/PoolSection.js";
import Newsletter from "views/Newsletter/Newsletter";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const ParallaxStyled = styled(Parallax)`
  background-color: rgb(14, 12, 12);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 95%;
  &:before {
    background: rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1290px) {
    &:before {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;
const CardanoIntroDivider = styled.div`
  height: ${(props) => props.heightSet && "260px"};
  width: 100%;
`;
const LandingPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  LandingPage.propTypes = {
    heightSet: PropTypes.any,
  };

  return (
    <AppContext.Consumer>
      {(context) => {
        // console.log(context);
        return (
          <div>
            <Header
              color="transparent"
              routes={dashboardRoutes}
              // rotateHue={context.scrollOffset / 12}
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 200,
                color: "white",
              }}
              {...rest}
            />
            <ParallaxStyled filter image={require("assets/img/landing-bg.png")}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <h1 className={classes.title}>Cardano Pools United</h1>
                    <h4>
                      Big collaboration of small stake pools and skilled pool
                      operators.
                    </h4>
                    <br />
                    {/* TODO: UKLJUCI DOK JE FAQ GOTOV */}
                    {/* <Button
                      color="danger"
                      size="lg"
                      href="/faq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play" />
                      Delegate now
                    </Button> */}
                  </GridItem>
                </GridContainer>
              </div>
            </ParallaxStyled>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <ProductSection />
                <PoolSection />
                <TeamSection />
                <Newsletter />
                <CardanoIntroSection />
                
                <CardanoIntroDivider heightSet={context.scrollOffset <= -700} />
              </div>
            </div>
            <Footer />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
export default LandingPage;
