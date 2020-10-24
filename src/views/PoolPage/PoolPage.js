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
// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const TestStyle = styled.div`
  height: 1000px;
  color: green;
`;

const LandingPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [currentSlot, setCurrentSlot] = useState(undefined);
  // const currentDate = new Date(Date.now());
  const [epochStartedDate, setEpochStartedDate] = useState("");
  const [epochEndingDate, setEpochEndingDate] = useState("");
  const [poolTicker, setPoolTicker] = useState();
  const [urlParams, setUrlParams] = useState();
  const totalSlots = 432000;

  const poolsDetails = {
    VENUS: {
      name: "Fresco Pool |VENUS|",
      description: (
        <>
          Fresco pool was initially deployed during a ITN Cardano phase and has
          been working ever since. During that time we gathered a lot of happy
          and loyal delegators.
          <br />
          <br />
          Fresco pool is community focused pool with big emphasis on educating
          the delegator about the Cardano ecosystem in order to make the
          delegation process simple, fast and secure as possible.
        </>
      ),
    },
    CPU: {
      name: "Cardano Pools United |CPU|",
      description: "insert desc here",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      currentSlot && setCurrentSlot((currentSlot) => currentSlot + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSlot]);

  useEffect(() => {
    //get URL params
    let urlParamsObject;
    let match,
      pl = /\+/g, // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) {
        return decodeURIComponent(s.replace(pl, " "));
      },
      query = window.location.search.substring(1);
    urlParamsObject = {};
    while ((match = search.exec(query))) {
      urlParamsObject[decode(match[1])] = decode(match[2]);
    }
    setUrlParams(urlParamsObject);
  }, []);

  useEffect(() => {
    //set parameters from URL
    urlParams && setPoolTicker(urlParams.id);
    // urlParams && console.log(urlParams.id);
    urlParams && console.log(poolsDetails[urlParams.id].description);
  }, [urlParams]);
  return (
    <AppContext.Consumer>
      {(context) => {
        // console.log(context);
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
              rotateHue={context.scrollOffset / 12}
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
                      {" "}
                      {urlParams && poolsDetails[urlParams.id].name}
                    </h1>
                    <h4>
                      {urlParams && poolsDetails[urlParams.id].description}
                    </h4>
                    <br />
                    {/* <Button
                      color="danger"
                      size="lg"
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play" />
                      Delegate now
                    </Button> */}
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <TestStyle>wdqd</TestStyle>
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
