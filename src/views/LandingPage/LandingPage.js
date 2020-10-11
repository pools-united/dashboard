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

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import PoolSection from "./Sections/PoolSection.js";
import StatsSection from "./Sections/StatsSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const LandingPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [currentSlot, setCurrentSlot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentSlot && setCurrentSlot((currentSlot) => currentSlot + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSlot]);

  return (
    <AppContext.Consumer>
      {(context) => {
        !currentSlot &&
          setCurrentSlot(parseInt(context.globalStats.epoch_slot_no));
        return (
          <div>
            <Header
              color="transparent"
              routes={dashboardRoutes}
              brand="Logo"
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
                    <h1 className={classes.title}>
                      Your Story Starts With Us.
                    </h1>
                    <h4>
                      Every landing page needs a small description after the big
                      bold title, that{"'"}s why we added this text here. Add
                      here all the information that can make you or your product
                      create the first impression.
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
              <div className={classes.container}>
                <ProductSection />
                <StatsSection
                  epoch={context.globalStats.epoch_last}
                  curSloth={currentSlot}
                />
                <PoolSection />
                <TeamSection />
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
