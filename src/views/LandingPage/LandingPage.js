import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes

// Global contextfor API

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
import PropTypes from "prop-types";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import CardanoIntroSection from "./Sections/CardanoIntroSection.js";
import PoolSection from "./Sections/PoolSection.js";
import StatsSection from "./Sections/StatsSection.js";
import SocialSection from "./Sections/SocialSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const CardanoIntroDivider = styled.div`
  height: ${(props) => props.heightSet && "260px"};
  width: 100%;
`;

CardanoIntroDivider.propTypes = {
  heightSet: PropTypes.any,
};

const LandingPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [currentSlot, setCurrentSlot] = useState(undefined);
  // const currentDate = new Date(Date.now());
  const [epochStartedDate, setEpochStartedDate] = useState("");
  const [epochEndingDate, setEpochEndingDate] = useState("");
  const totalSlots = 432000;

  useEffect(() => {
    const interval = setInterval(() => {
      currentSlot && setCurrentSlot((currentSlot) => currentSlot + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSlot]);

  return (
    <AppContext.Consumer>
      {(context) => {
        if (!currentSlot) {
          setCurrentSlot(parseInt(context.globalStats.epoch_slot_no));
        } else if (currentSlot && !epochStartedDate) {
          setEpochStartedDate(
            new Date(parseInt(context.globalStats.epoch_started * 1000))
          );
          setEpochEndingDate(
            new Date((Date.now() / 1000 + (totalSlots - currentSlot)) * 1000)
          );
        }
        // console.log(context);
        return (
          <div>
            <Header
              color="transparent"
              routes={dashboardRoutes}
              // trebalo bi staviti scroll varijablu
              //  u global context i onda bi mogel na temelju scrolla mjenjat boju logoa (svaki pool ima svoju boju, bisebojni smo :D)
              rotatehue={context.scrollOffset / 12}
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white",
              }}
              {...rest}
            />
            <Parallax filter image={require("assets/img/landing-bg.jpg")}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <h1 className={classes.title}>Cardano Pools United</h1>
                    <h4>
                      Big collaboration of small stake pools and skilled pool
                      operators.
                    </h4>
                    <br />
                    <Button
                      color="danger"
                      size="lg"
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play" />
                      Delegate now
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <StatsSection
                epoch={context.globalStats.epoch_last}
                curSloth={currentSlot}
                epochProgress={(currentSlot / totalSlots) * 100}
                epochStartDate={epochStartedDate.toString().substr(0, 21)}
                epochEndDate={epochEndingDate.toString().substr(0, 21)}
              />
              <div className={classes.container}>
                <CardanoIntroDivider heightSet={context.scrollOffset <= -700} />
                <CardanoIntroSection />
                <ProductSection />

                <PoolSection />
                <TeamSection />
              </div>
              <SocialSection />
            </div>
            <Footer />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
export default LandingPage;
