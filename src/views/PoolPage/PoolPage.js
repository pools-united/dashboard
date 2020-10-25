import React, { useState, useEffect, useRef } from "react";
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

import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Chart from "react-apexcharts";

//images
import VenusBanner from "assets/poolAssets/venus/FrescoBanner.png";
import VenusLogo from "assets/poolAssets/venus/fresco_logo.png";
import FileCopyIcon from "@material-ui/icons/FileCopy";

//components
import TextBox from "./Components/Textbox.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import styled, { keyframes, createGlobalStyle } from "styled-components";
// import { number } from "prop-types";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const PoolPageStyle = createGlobalStyle`
body{
  background-color:${(props) => props.backgroundColor};
}

 .makeStyles-white-22 {
  background-color:${(props) => props.backgroundColorHeader}!important;


}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


`;

const RewardsCalculatorWrapper = styled.div`
  display: flex;
  margin: auto;
  max-width: 700px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
  max-width: 700px;
  margin: 1rem auto 1rem auto;
`;

const PoolId = styled.div`
  padding-right: 4px;
  word-break: break-all;
`;

const IdWrapper = styled.div`
  display: flex;
  cursor: copy;
`;

const ChartStyled = styled(Chart)`
  max-width: 700px;
  height: 370px;
  margin: auto;
  .apexcharts-menu {
    background: black;
  }
  .apexcharts-menu-item:hover {
    background: ${(props) => props.downloadhover};
  }

  #apexchartsblocksProduced > svg {
    background-color: ${(props) => props.graphBackground} !important;
  }
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

const ContentTitle = styled.h2`
  text-align: center;
  margin: 48px 0;
`;

const Spacer = styled.div`
  height: ${(props) => props.heightSpacer};
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
  bottom: 10px;
  right: 0;

  padding: 6px;
  border: 1px solid white;
  border-radius: 25px;
  animation: ${copyAnimation} 1.5s linear;
  transition: 0.3s;
  display: ${(props) => (props.copyState ? "block" : "none")};

  @media (max-width: 960px) {
    bottom: 40px;
    right: 20px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  padding-top: 12px;
`;

const RewardsComponent = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${(props) => props.margintop};
  font-weight: ${(props) => props.fontweight};
  padding: 12px 0;
  justify-content: space-between;
  align-items: center;
`;
const RewardComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;
const RewardsInputComponent = styled.input`
  background-color: ${(props) => props.inputBackground};
  color: ${(props) => props.color};
  width: 30%;
  font-size: 18px;
`;

const ListItemStyled = styled(ListItem)`
  padding-left: 5px;
  padding-right: 5px;
  width: max-content;
`;

const TooltipStyled = styled(Tooltip)`
  padding: 8px;
`;

const ContentWrapper = styled.div`
  background-color: ${(props) => props.wrapperBackground};
`;

const PoolPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  // const [poolTicker, setPoolTicker] = useState();
  const [epochsGraph, setEpochsGraph] = useState([]);
  const [numberOfBlocks, setNumberOfBlocks] = useState(undefined);
  const [roaStats, setRoaStats] = useState(undefined);

  const [urlParams, setUrlParams] = useState({ id: "CPU" });
  const [copyState, setCopyState] = useState();
  const [mobileState, setMobileState] = useState();
  const [calculatedUserReward, setCalculatedUserReward] = useState(-1);
  const userDelegationRef = useRef(null);

  const [definedRender, setDefinedRender] = useState(0);
  window.addEventListener("resize", () => {
    window.innerWidth > 960 ? setMobileState(false) : setMobileState(true);
  });
  const poolsDetails = {
    VENUS: {
      name: "Fresco Pool |VENUS|",
      poolColor: "black",
      secondaryColor: "#1F2833",
      logoColor: "#45A29E",
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
      descriptionMobile: (
        <>
          Fresco pool is community focused pool with big emphasis on educating
          the delegator about the Cardano ecosystem in order to make the
          delegation process simple, fast and secure as possible.
        </>
      ),

      banner: VenusBanner,
      logo: VenusLogo,
      id: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
      twitter: "https://twitter.com/PoolVenus",
      telegram: "https://t.me/frescopool",
      github: "https://github.com/filip4428",
    },
    CPU: {
      name: "Cardano Pools United |CPU|",
      description: "insert desc here",
    },
  };

  const calculateRewards = (
    totalActiveStake,
    poolActiveStake,
    totalAdaSupply,
    poolBlocksProduced,
    yourActiveStake,
    kParameter,
    a0,
    rho,
    tau,
    decentralisationParam,
    ownerStake,
    margin,
    fixedFee
  ) => {
    let TotalActiveStake = totalActiveStake;
    let PoolActiveStake = poolActiveStake;
    let TotalAdaSupply = totalAdaSupply;
    let PoolBlocksProduced = poolBlocksProduced;
    let YourActiveStake = yourActiveStake;

    let blocks = 21600 * (1 - decentralisationParam);
    let Kparameter = kParameter;
    let MaxAdaSupply = 45000000000;
    let apparentPoolPerformance;

    let totalReserves = MaxAdaSupply - TotalAdaSupply;
    let RelativeBlocksProduced = PoolBlocksProduced / blocks;
    let RelativeActiveStake = PoolActiveStake / TotalActiveStake;
    let TotalAwardsAvailable = totalReserves * rho;
    let RewardsAfterTreasury = TotalAwardsAvailable * (1 - tau);
    let s = ownerStake / TotalAdaSupply;
    let sigma = PoolActiveStake / TotalAdaSupply;
    let saturationPoint = 1 / Kparameter;

    if (decentralisationParam >= 0.8) {
      apparentPoolPerformance = 1;
    } else {
      apparentPoolPerformance = RelativeBlocksProduced / RelativeActiveStake;
    }

    let realRewards;

    let optimalRewards =
      (RewardsAfterTreasury / (1 + a0)) *
      (sigma +
        (s * a0 * (sigma - s * ((saturationPoint - sigma) / saturationPoint))) /
          saturationPoint);

    if (PoolBlocksProduced < 1) {
      realRewards = 0;
    } else {
      realRewards = (optimalRewards * apparentPoolPerformance).toFixed(2);
    }

    let afterFixed = realRewards - fixedFee;
    let rewardsTaxed = (afterFixed * (1 - margin)).toFixed(2);
    if (realRewards <= 0) {
      realRewards = 0;
      rewardsTaxed = 0;
    }

    let usersReward = (YourActiveStake / PoolActiveStake) * rewardsTaxed;

    if (usersReward >= realRewards) {
      usersReward = realRewards;
    }

    // $(".realRewards").html(
    //   `Total estimated rewards calculation: ${realRewards}`
    // );
    // $(".rewardsTax").html(
    //   `Total estimated rewards calculation after tax: ${rewardsTaxed}`
    // );
    // $(".rewardsTaxUser").html(
    //   `Your estimated rewards: ${usersReward.toFixed(2)}`
    // );
    // //$(".estimatedROA").html(`Estimated ROA: ${((rewardsTaxed/PoolActiveStake)*7200).toFixed(2)}%`);
    // $(".estimatedROA").html(``);

    // $(".expectedBlocks").html(
    //   `Blocks expected: ${(blocks * RelativeActiveStake).toFixed(1)}`
    // );
    // console.log("click");
    setCalculatedUserReward(parseFloat(usersReward).toFixed(2));
    // console.log(
    //   totalActiveStake,
    //   poolActiveStake,
    //   totalAdaSupply,
    //   poolBlocksProduced,
    //   yourActiveStake,
    //   kParameter,
    //   a0,
    //   rho,
    //   tau,
    //   decentralisationParam
    // );
    // console.log(usersReward);
  };

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
    // urlParams && setPoolTicker(urlParams.id);
    // urlParams && console.log(urlParams.id);
    // urlParams && console.log(poolsDetails[urlParams.id].description);

    // console.log(urlParams);

    window.innerWidth > 960 ? setMobileState(false) : setMobileState(true);
  }, [urlParams]);
  return (
    <AppContext.Consumer>
      {(context) => {
        // context.poolStats[urlParams.id] &&
        //   // console.log(context.poolStats[urlParams.id].data);
        //   console.log(
        //     JSON.parse(context.poolStats[urlParams.id].data.hist_bpe)
        //   );

        if (context.globalStats.epoch_last && definedRender < 1) {
          setDefinedRender(definedRender + 1);

          for (let i = 10; i > 0; i--) {
            // const element = array[i];
            setEpochsGraph((epochsGraph) => [
              ...epochsGraph,
              parseInt(context.globalStats.epoch_last) - i,
            ]);
          }
          // console.log(epochsGraph);
        }

        //TODO: ovo mozda nebi trebalo tu biti, usporava render brijem!!!
        //TODO: !!!
        if (!numberOfBlocks && context.poolStats[urlParams.id]) {
          setNumberOfBlocks([]);
          setRoaStats([]);
          // console.log(
          //   JSON.parse(context.poolStats[urlParams.id].data.hist_bpe)
          // );

          JSON.parse(context.poolStats[urlParams.id].data.hist_bpe).forEach(
            (element) => {
              // console.log(element.val);

              setNumberOfBlocks((numberOfBlocks) => [
                ...numberOfBlocks,
                parseInt(element.val),
              ]);
            }
          );

          JSON.parse(context.poolStats[urlParams.id].data.hist_roa).forEach(
            (element) => {
              // console.log(element.val);

              setRoaStats((roaStats) => [...roaStats, parseFloat(element.val)]);
            }
          );

          // calculateRewards();

          // totalActiveStake,
          // poolActiveStake,
          // totalAdaSupply,
          // poolBlocksProduced,
          // yourActiveStake,
          // kParameter,
          // a0,
          // rho,
          // tau,
          // decentralisationParam
        }
        //TODO: ovo (parseanje ROA I BLOCKOVA (VIDI GORE) )mozda nebi trebalo tu biti, usporava render brijem!!!
        //TODO: !!!

        // console.log(numberOfBlocks);
        // console.log(context.globalStats.epoch_last);

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
            <PoolPageStyle
              backgroundColor={poolsDetails[urlParams.id].logoColor}
              backgroundColorHeader="black"
            />
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
                      {!mobileState
                        ? urlParams && poolsDetails[urlParams.id].description
                        : urlParams &&
                          poolsDetails[urlParams.id].descriptionMobile}
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
                    <SocialContainer>
                      {poolsDetails[urlParams.id].twitter && (
                        <ListItemStyled className={classes.listItem}>
                          <TooltipStyled
                            title={`${urlParams.id} Twitter`}
                            placement={
                              window.innerWidth > 959 ? "bottom" : "bottom"
                            }
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <Button
                              color="transparent"
                              href={poolsDetails[urlParams.id].twitter}
                              target="_blank"
                              className={classes.navLink}
                            >
                              <i
                                className={
                                  classes.socialIcons + " fab fa-twitter"
                                }
                              />
                            </Button>
                          </TooltipStyled>
                        </ListItemStyled>
                      )}
                      {poolsDetails[urlParams.id].telegram && (
                        <ListItemStyled className={classes.listItem}>
                          <TooltipStyled
                            title={`${urlParams.id} Telegram`}
                            placement={
                              window.innerWidth > 959 ? "bottom" : "bottom"
                            }
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <Button
                              color="transparent"
                              href={poolsDetails[urlParams.id].telegram}
                              target="_blank"
                              className={classes.navLink}
                            >
                              <i
                                className={
                                  classes.socialIcons + " fab fa-telegram"
                                }
                              />
                            </Button>
                          </TooltipStyled>
                        </ListItemStyled>
                      )}
                      {poolsDetails[urlParams.id].github && (
                        <ListItemStyled className={classes.listItem}>
                          <TooltipStyled
                            title={`${urlParams.id} Github`}
                            placement={
                              window.innerWidth > 959 ? "bottom" : "bottom"
                            }
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <Button
                              color="transparent"
                              href={poolsDetails[urlParams.id].github}
                              target="_blank"
                              className={classes.navLink}
                            >
                              <i
                                className={
                                  classes.socialIcons + " fab fa-github"
                                }
                              />
                            </Button>
                          </TooltipStyled>
                        </ListItemStyled>
                      )}
                      {poolsDetails[urlParams.id].youtube && (
                        <ListItemStyled className={classes.listItem}>
                          <TooltipStyled
                            title={`${urlParams.id} Youtube`}
                            placement={
                              window.innerWidth > 959 ? "bottom" : "bottom"
                            }
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <Button
                              color="transparent"
                              href={poolsDetails[urlParams.id].youtube}
                              target="_blank"
                              className={classes.navLink}
                            >
                              <i
                                className={
                                  classes.socialIcons + " fab fa-youtube"
                                }
                              />
                            </Button>
                          </TooltipStyled>
                        </ListItemStyled>
                      )}
                    </SocialContainer>

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
            <ContentWrapper
              className={classNames(classes.main, classes.mainRaised)}
              wrapperBackground={poolsDetails[urlParams.id].poolColor}
            >
              <div className={classes.container}>
                <Spacer heightSpacer={"64px"} />
                <InfoGrid>
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Ticker"}
                    text={urlParams.id}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Pledge"}
                    text={`${
                      context.poolStats[urlParams.id] &&
                      context.poolStats[urlParams.id].data.pledge / 1000000
                    } ₳ `}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Fee"}
                    text={
                      <>
                        Fixed&nbsp;
                        {context.poolStats[urlParams.id] &&
                          context.poolStats[urlParams.id].data.tax_fix /
                            1000000}
                        <br />
                        Margin&nbsp;
                        {context.poolStats[urlParams.id] &&
                          (
                            parseFloat(
                              context.poolStats[urlParams.id].data.tax_ratio
                            ) * 100
                          ).toFixed(2)}
                        %
                      </>
                    }
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Blocks Produced"}
                    text={
                      context.poolStats[urlParams.id] &&
                      parseInt(
                        context.poolStats[urlParams.id].data.blocks_lifetime
                      ) +
                        parseInt(
                          context.poolStats[urlParams.id].data.blocks_epoch
                        )
                    }
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Total Stake"}
                    text={`${
                      context.poolStats[urlParams.id] &&
                      (
                        context.poolStats[urlParams.id].data.total_stake /
                        1000000000000
                      ).toFixed(2)
                    } M`}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Yearly ROA"}
                    text={`${
                      context.poolStats[urlParams.id] &&
                      parseFloat(
                        context.poolStats[urlParams.id].data.roa
                      ).toFixed(2)
                    } %`}
                  />
                </InfoGrid>
                <ContentTitle>
                  Stats for current Epoch ({context.globalStats.epoch_last})
                </ContentTitle>

                <InfoGrid>
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Active Stake"}
                    text={`${
                      context.poolStats[urlParams.id] &&
                      (
                        context.poolStats[urlParams.id].data.active_stake /
                        1000000000000
                      ).toFixed(2)
                    } M`}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Blocks Estimated"}
                    text={`${
                      context.poolStats[urlParams.id] &&
                      context.poolStats[urlParams.id].data.blocks_estimated
                    }`}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Blocks Produced"}
                    text={
                      context.poolStats[urlParams.id] &&
                      context.poolStats[urlParams.id].data.blocks_epoch
                    }
                  />
                </InfoGrid>

                <Spacer heightSpacer={"64px"} />

                <RewardsCalculatorWrapper>
                  <TextBox
                    heightBox
                    width="100%"
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={`Rewards calculator for current Epoch (${context.globalStats.epoch_last})`}
                    text={
                      <RewardComponentWrapper>
                        <RewardsComponent>
                          <div style={{ width: "max-content" }}>
                            {" "}
                            Your active delegation:
                          </div>
                          <RewardsInputComponent
                            type="number"
                            ref={userDelegationRef}
                            inputBackground={
                              poolsDetails[urlParams.id].poolColor
                            }
                            color={poolsDetails[urlParams.id].logoColor}
                            onChange={() => {
                              // console.log(userDelegationRef.current.value);

                              calculateRewards(
                                parseFloat(context.globalStats.total_staked) /
                                  1000000,
                                parseFloat(
                                  context.poolStats[urlParams.id].data
                                    .active_stake
                                ) / 1000000,
                                parseFloat(context.globalStats.ada_circ) /
                                  1000000,
                                context.poolStats[urlParams.id].data
                                  .blocks_epoch,
                                userDelegationRef.current.value,
                                context.protocol.nOpt,
                                context.protocol.a0,
                                context.protocol.rho,
                                context.protocol.tau,
                                context.protocol.decentralisationParam,
                                parseFloat(
                                  context.poolStats[urlParams.id].data.pledged
                                ) / 1000000,
                                parseFloat(
                                  context.poolStats[urlParams.id].data.tax_ratio
                                ),
                                parseFloat(
                                  context.poolStats[urlParams.id].data.tax_fix
                                ) / 1000000
                              );
                              // console.log(roaStats);
                            }}
                          />
                        </RewardsComponent>
                        {calculatedUserReward >= 0 && (
                          <RewardsComponent margintop="42px" fontweight="500">
                            Estimated rewards with&nbsp;
                            {context.poolStats[urlParams.id].data.blocks_epoch}
                            &nbsp;blocks minted:&nbsp;
                            {calculatedUserReward}₳
                          </RewardsComponent>
                        )}
                      </RewardComponentWrapper>
                    }
                  />
                </RewardsCalculatorWrapper>
                <Spacer heightSpacer={"64px"} />
                <ContentTitle>Performance history</ContentTitle>
                <ChartStyled
                  graphBackground={poolsDetails[urlParams.id].poolColor}
                  downloadhover={poolsDetails[urlParams.id].logoColor}
                  options={{
                    theme: {
                      mode: "dark",
                      palette: "palette9",
                    },
                    title: {
                      align: "left",
                      margin: 10,
                      offsetX: 0,
                      offsetY: 0,
                      floating: false,
                      style: {
                        fontSize: "14px",
                        fontWeight: "bold",
                        fontFamily: undefined,
                        color: "#263238",
                      },
                    },
                    tooltip: {
                      enabled: true,
                      theme: true,
                      decimalsInFloat: 2,
                      fillSeriesColor: false,
                      onDatasetHover: {
                        highlightDataSeries: true,
                      },
                      style: {},
                    },
                    colors: [
                      poolsDetails[urlParams.id].secondaryColor
                        ? poolsDetails[urlParams.id].secondaryColor
                        : "nikaj onda",
                      poolsDetails[urlParams.id].logoColor
                        ? poolsDetails[urlParams.id].logoColor
                        : "nikaj onda",
                    ],
                    fill: {
                      colors: [
                        poolsDetails[urlParams.id].secondaryColor
                          ? poolsDetails[urlParams.id].secondaryColor
                          : "nikaj onda",
                        poolsDetails[urlParams.id].logoColor
                          ? poolsDetails[urlParams.id].logoColor
                          : "nikaj onda",
                      ],
                    },
                    chart: {
                      id: "blocksProduced",
                      zoom: {
                        type: "x",
                        enabled: false,
                        autoScaleYaxis: true,
                      },
                    },
                    xaxis: {
                      categories: epochsGraph,
                    },

                    yaxis: [
                      {
                        title: {
                          text: "ROA(%)",
                        },
                      },
                      {
                        opposite: true,
                        title: {
                          text: "Blocks produced",
                        },
                      },
                    ],
                  }}
                  series={[
                    {
                      name: "ROA (%)",
                      data: roaStats,
                    },
                    {
                      name: "Blocks produced",
                      data: numberOfBlocks,
                      type: "bar",
                    },
                  ]}
                />
                {/* <ChartStyled
                  graphBackground={poolsDetails[urlParams.id].poolColor}
                  downloadhover={poolsDetails[urlParams.id].logoColor}
                  options={{
                    theme: {
                      mode: "dark",
                      palette: "palette2",
                    },
                    title: {
                      text: "Blocks produced",
                      align: "left",
                      margin: 10,
                      offsetX: 0,
                      offsetY: 0,
                      floating: false,
                      style: {
                        fontSize: "14px",
                        fontWeight: "bold",
                        fontFamily: undefined,
                        color: "#263238",
                      },
                    },
                    tooltip: {
                      enabled: true,
                      theme: true,
                      fillSeriesColor: false,
                      onDatasetHover: {
                        highlightDataSeries: true,
                      },
                      style: {},
                    },
                    fill: {
                      colors: [
                        poolsDetails[urlParams.id].logoColor
                          ? poolsDetails[urlParams.id].logoColor
                          : "nikaj onda",
                      ],
                    },
                    chart: {
                      id: "ROA history",
                    },
                    xaxis: {
                      categories: epochsGraph,
                    },
                  }}
                  series={[
                    {
                      name: "ROA history",
                      data: roaStats,
                    },
                    {
                      name: "ROA history",
                      data: numberOfBlocks,
                    },
                  ]}
                  type="line"
                /> */}
                <Spacer heightSpacer={"42px"} />
              </div>
            </ContentWrapper>
            <Footer />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
export default PoolPage;