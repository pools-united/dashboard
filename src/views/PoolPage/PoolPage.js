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

import VenusBanner from "assets/poolAssets/venus/FrescoBanner.png";
import VenusLogo from "assets/poolAssets/venus/fresco_logo.png";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import styled, { keyframes } from "styled-components";
// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const TestStyle = styled.div`
  height: 1000px;
  color: green;
`;

const PoolId = styled.div`
  padding-right: 4px;
  word-break: break-all;
`;

const IdWrapper = styled.div`
  display: flex;
  cursor: copy;
`;
const ParallaxStyled = styled(Parallax)`
  background-color: ${(props) => props.poolColor};
  @media (max-width: 1110px) {
    background-position: 145%;
  }
  @media (max-width: 960px) {
    background-position: 145%;
    background-image: unset !important;
  }
`;

const AbsoluteLogo = styled.img`
  display: none;
  @media (max-width: 960px) {
    display: unset;
    position: absolute;
    width: 100%;
    z-index: -1;
    object-fit: contain;
    opacity: 0.6;
    height: 100%;
    top: 0;
  }
`;

const copyAnimation = keyframes`
  0% {
    transform: scale(0.5);
    opacity:0;
  }

  40% {
    transform: scale(1);
    opacity:1;
      }

      60% {
    transform: scale(1);
    opacity:1;
      }

      100% {
  
    opacity:0;
      }
`;

const Copied = styled.div`
  position: absolute;
  bottom: -52px;
  right: 0;

  padding: 6px;
  border: 1px solid white;
  border-radius: 25px;
  animation: ${copyAnimation} 1.5s linear;
  transition: 0.3s;
  display: ${(props) => (props.copyState ? "block" : "none")};
`;

const LandingPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  const [poolTicker, setPoolTicker] = useState();
  const [urlParams, setUrlParams] = useState({ id: "CPU" });
  const [copyState, setCopyState] = useState();

  const copyId = (text) => {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 1500);
  };

  const poolsDetails = {
    VENUS: {
      name: "Fresco Pool |VENUS|",
      poolColor: "black",
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

      banner: VenusBanner,
      logo: VenusLogo,
      id: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
    },
    CPU: {
      name: "Cardano Pools United |CPU|",
      description: "insert desc here",
    },
  };

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
    urlParamsObject.hasOwnProperty("id") && setUrlParams(urlParamsObject);

    !poolsDetails.hasOwnProperty(urlParamsObject.id) &&
      setUrlParams({ id: "CPU" });
  }, []);

  useEffect(() => {
    //set parameters from URL
    urlParams && setPoolTicker(urlParams.id);
    // urlParams && console.log(urlParams.id);
    urlParams && console.log(poolsDetails[urlParams.id].description);

    // console.log(urlParams);
  }, [urlParams]);
  return (
    <AppContext.Consumer>
      {(context) => {
        // context.poolStats[urlParams.id] &&
        //   console.log(context.poolStats[urlParams.id].data);
        // if (!currentSlot) {
        //   setCurrentSlot(parseInt(context.globalStats.epoch_slot_no));
        // } else if (currentSlot && !epochStartedDate) {
        //   setEpochStartedDate(
        //     new Date(parseInt(context.globalStats.epoch_started * 1000))
        //   );
        //   setEpochEndingDate(
        //     new Date((Date.now() / 1000 + (totalSlots - currentSlot)) * 1000)
        //   );
        // }
        // console.log(context);
        return (
          <div>
            <Header
              color="transparent"
              routes={dashboardRoutes}
              // trebalo bi staviti scroll varijablu
              //  u global context i onda bi mogel na temelju scrolla mjenjat boju logoa (svaki pool ima svoju boju, bisebojni smo :D)
              // rotateHue={context.scrollOffset / 12}
              rightLinks={<HeaderLinks />}
              urlParams
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white",
              }}
              {...rest}
            />

            <ParallaxStyled
              poolColor={poolsDetails[urlParams.id].poolColor}
              filter
              image={poolsDetails[urlParams.id].banner}
            >
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
                    <AbsoluteLogo src={poolsDetails[urlParams.id].logo} />
                    <IdWrapper
                      onClick={() => {
                        !copyState && copyId(poolsDetails[urlParams.id].id);
                      }}
                    >
                      <PoolId>
                        ID:&nbsp;
                        {context.poolStats[urlParams.id] &&
                          context.poolStats[urlParams.id].data.pool_id}
                      </PoolId>
                      <FileCopyIcon />
                      <Copied copyState={copyState}>Copied</Copied>
                    </IdWrapper>

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
            </ParallaxStyled>
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
