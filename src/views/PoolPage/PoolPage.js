import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import AppContext from "../../Context/Context";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
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
import EraBanner from "assets/poolAssets/era/EraBanner.png";
import EraLogoGif from "assets/poolAssets/era/era_logo.gif";
import VenusLogo from "assets/poolAssets/venus/fresco_logo.png";
import VenusLogoStatic from "assets/poolAssets/venus/spinning_static.png";
import VenusLogoDynamic from "assets/poolAssets/venus/spinning_dynamic.png";
import EraLogo from "assets/poolAssets/era/era_logo.png";
import CpuLogo from "assets/poolAssets/cpu/cpu_logo.png";
import CpuBanner from "assets/poolAssets/cpu/CpuBanner.png";
import MinesLogo from "assets/poolAssets/mines/mines_logo.png";
import MinesBanner from "assets/poolAssets/mines/MinesBanner.png";
// import CurieLogo from "assets/poolAssets/curie/curie_logo.png";
// import CurieBanner from "assets/poolAssets/curie/CurieBanner.png";

import SundaeSwapRISO from "assets/poolAssets/venus/sundaeswap-reverse-iso.webp"
import EcoCashewISO from "assets/poolAssets/venus/cashewF.png"

import FileCopyIcon from "@material-ui/icons/FileCopy";

//operator images
import Filip from "assets/img/faces/Filip.jpg";
import Nora from "assets/img/faces/Nora.jpg";
import Patricia from "assets/img/faces/Patricia.jpg";
import Emil from "assets/img/faces/emil_avatar.jpg";
import Miha from "assets/img/faces/Miha.jpg";
import Stjepan from "assets/img/faces/stjepan.jpg";
import Zvonimir from "assets/img/faces/Zvonimir.jpg";

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
  border-radius: 0;


}

.makeStyles-filter-94::before {
    background: rgba(0, 0, 0, 0.0);
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

const AdditionalInfo = styled.div`
  color: white;
  max-width: 700px;
  margin: auto;
  display: ${(props) => (props.displayInfo ? "block" : "none")};
  padding-bottom: 32px;
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
  color: black;
`;

const BigIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 64px;
  margin-bottom: 6px;
  
  `

const IdWrapper = styled.div`
  display: flex;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  padding: 8px;
  border-radius: 4px;
  background: white;
  color: black;
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
  position: relative;
  background-color: ${(props) => props.poolColor};
  @media (max-width: 1110px) {
    background-position: 145%;
  }
  @media (max-width: 960px) {
    background-position: 145%;
    background-image: unset !important;
  }
`;

const frescoAnimation = keyframes`
0% {
  transform: rotate(90deg) scale(1.2);
}

30% {
  transform: rotate(90deg) scale(1.0);
}

60%
{
  transform: rotate(90deg) scale(1.0);

}

100%
{
  transform: rotate(0deg) scale(1.0);

}

`;

const frescoInitialState = "transform: rotate(90deg) scale(1.2);";

const frescoLogoCustomCss = "filter: drop-shadow(0px 0px 32px #207179);";

const BannerLogoContainer = styled.div`
  position: absolute;
  right: 180px;
  width: 400px;
  height: 400px;
  @media (max-width: 1200px) {
    right: 80px;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
const LogoSection = styled.img`
  animation: ${(props) => props.animation} 1.2s linear;
  transition: 0.2s all;
  position: absolute;
  width: 100%;

  ${(props) => props.logoCustomCss}
  ${(props) => props.initialState}
`;



const AbsoluteLogo = styled.img`
  display: none;
  @media (max-width: 960px) {
    display: unset;
    position: absolute;
    padding: 68px;
    width: 100%;
    z-index: -1;
    object-fit: contain;
    opacity: 0.6;
    height: 100%;
    top: 0;
  }
`;

const ContentTitle = styled.h1`
  text-align: center;
  margin: 48px 0;
`;

const Spacer = styled.div`
  height: ${(props) => props.heightSpacer};
`;

const copyAnimation = keyframes`
  0% {
    transform: translateY(-48px);
    opacity:0;
    color: black;

  }

  40% {
    transform: translateY(-8px);
    opacity:1;
    color: black;

      }

      60% {
        transform: translateY(-8px);
    opacity:1;
      }
      90% {
        transform: translateY(-20px);
        color: white;
    opacity:1;
      }
      100% {
        transform: translateY(-32px);
        color: white;
    opacity:0;
      }
`;

const Copied = styled.div`
  //position: absolute;
  //bottom: 60px;
  //right: 0;
  color: black;
  width: min-content;
  transform: translateY(-48px);
  background: white;
  padding: 6px;
  border: 1px solid white;
  border-radius: 8px;
  animation: ${copyAnimation} 2s linear;
  transition: 0.3s;
  align-self: end;
  display: ${(props) => (props.copyState ? "block" : "none")};

  @media (max-width: 960px) {
   // bottom: 60px;
    //right: 20px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  padding-top: 12px;
`;

const OperatorWrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const OperatedByText = styled.div`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 20px;
`;

const OperatorPic = styled.img`
  width: 54px;
  border-radius: 100px;
  margin-left: 20px;
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
  border: 0;
`;

const ListItemStyled = styled(ListItem)`
  padding-left: 5px;
  padding-right: 5px;
  width: max-content;
`;

const Notice = styled.div`
  margin-top: 28px;
  font-size:14px;
`;

const DescriptionText = styled.h4`
  font-weight: 400;
`;

const TooltipStyled = styled(Tooltip)`
  padding: 8px;
`;

const ContentWrapper = styled.div`
  background-color: ${(props) => props.wrapperBackground};

  @media (max-width: 560px) {
    margin-top: 24px;
  }
`;

const PoolTitle = styled.h1`
  margin-top: 70px;
`;

const H1StyledCenter = styled.h1`
text-align: center;
padding: 8px;
`;

const AdditionalInfoImgs = styled.img `
width:100%;
`

const LinkWrapper = styled.a`
color: white;
transition: 0.3s all;
display:block;
margin-top: ${(props) => props.marginTop};
margin-bottom: ${(props) => props.marginBottom};

&:hover {
  color: white;
  text-decoration: none;
  transform: scale(1.02);
}
`
const AdditionalInfoWrapper = styled.div`
padding:12px;
`
const additionalInfoVenus = (<AdditionalInfoWrapper>

<LinkWrapper target="_blank" marginTop ="48px" marginBottom= "48px" href="https://www.ecocashew.com">
  <H1StyledCenter>Fresco Pool is currently supporting Eco Cashew project</H1StyledCenter>
  <AdditionalInfoImgs src={EcoCashewISO}/>
  </LinkWrapper>
  <p >
                    Fresco Pool |VENUS| is a proud supporter of the EcoCashew project, Working to create Fair Trade for Local Cashew farmers with 90% reduction in C02 emissions by processing the farmers Cashews on location instead of transporting them all around the world to get them processed in Asia.
                </p>

                <p  >
                    Click on the image above to learn more about Eco Cashews project to create jobs and help the environment.
                </p>

                <p  >
                    Fresco Pool |VENUS| is participating in Eco Cashew's CashewF ISPO which is seven epochs long from epoch 350 until the end of epoch 356. By staking with us you can support the environment and earn rewards from Eco cashew.
                </p>

                <p  >
                     You will earn twice the EcoCashew CashewF ISPO Rewards by Delegating before June 30th. 

                 By buying CashewF tokens You have opportunity to participate in creating 100 + jobs, help establish fair trade Cashew prices in Africa and reduce CO2 Emission caused by Cashew processing by 90%.
                </p>

              <p  >
                  
                    <a    href="https://t.me/EcoCashewF/">
                    EcoCashew Telegram
                    </a>
                </p>
                <p  >
                    <a    href="https://www.ecocashew.com/roadmap.html">
                    EcoCashew Road Map 
                    </a>
                </p>

                <p  >
                    <a    href="https://www.ecocashew.com/assets/pdf/cashewf-whitepaper.pdf">
                    EcoCashew Whitepaper 
                    </a>
                </p>

                <p  >
                    <a    href="https://www.ecocashew.com/assets/mp4/cashewf-fanfilm.mp4">
                    EcoCashew Fan Film
                    </a>
                </p>


<LinkWrapper target="_blank" marginTop ="48px" href="https://iso.sundaeswap.finance/#/reverse-pools">
  <H1StyledCenter>Fresco Pool was a part of Sundae Swap RISO</H1StyledCenter>
  <AdditionalInfoImgs src={SundaeSwapRISO}/>
  </LinkWrapper>
   </AdditionalInfoWrapper>)

const PoolPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  // const [poolTicker, setPoolTicker] = useState();
  const [epochsGraph, setEpochsGraph] = useState([]);
  const [numberOfBlocks, setNumberOfBlocks] = useState(undefined);
  const [roaStats, setRoaStats] = useState(undefined);

  const [currentBlocksRewards, setCurrentBlocksRewards] = useState(null);

  const [urlParams, setUrlParams] = useState({ id: "CPU" });

  const [copyState, setCopyState] = useState();
  const [mobileState, setMobileState] = useState();
  const [calculatedUserReward, setCalculatedUserReward] = useState(-1);
  const userDelegationRef = useRef(null);
  const userBlocksRef = useRef(null);

  const [parsedDataRoaFinished, setParsedDataRoaFinished] = useState(false);

  const [definedRender, setDefinedRender] = useState(0);

  const [startAnimation, setStartAnimation] = useState(false);
  window.addEventListener("resize", () => {
    window.innerWidth > 960 ? setMobileState(false) : setMobileState(true);
  });

  const poolsDetails = {
    VENUS: {
      additionalInfo: additionalInfoVenus,
      name: "Fresco Pool |VENUS|",
      poolColor: "black",
      secondaryColor: "#1F2833",
      bodyBackgroundColor: "#45A29E",

      logoColor: "#45A29E",
      description: (
        <>
          Fresco pool was initially deployed during a ITN Cardano phase and has
          been working ever since. During that time we gathered a lot of happy
          and loyal delegators.
          <br />
          <br />
          Fresco pool is community focused pool inspired by Jacque Fresco with
          big emphasis on educating the delegator about the Cardano ecosystem in
          order to make the delegation process simple, fast and secure as
          possible.
        </>
      ),
      descriptionMobile: (
        <>
          Fresco pool is community focused pool inspired by Jacque Fresco with
          big emphasis on educating the delegator about the Cardano ecosystem in
          order to make the delegation process simple, fast and secure as
          possible.
        </>
      ),

      id: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
      twitter: "https://twitter.com/PoolVenus",
      telegram: "https://t.me/frescopool",
      github: "https://github.com/filip-strelec",
      youtube: "https://www.youtube.com/channel/UCPJ4UFyhEpqxYgcAWkplchw",
      banner: VenusBanner,
      logoMobile: VenusLogo,
      logo: VenusLogo,
      logoStatic: VenusLogoStatic,
      logoDynamic: VenusLogoDynamic,
      animation: frescoAnimation,
      initialLogoState: frescoInitialState,
      logoCustomCss: frescoLogoCustomCss,
      logoAnimation: true,
      operators: true,
      firstOperator: Filip,
      secondOperator: false,
    },
    // CURIE: {
    //   // additionalInfo:(<><h1>Ovo je veliki titl</h1><h2>Malo manji titl</h2><p>Paragraf</p> <br/><br/>br je breaking point ilitiga enter u wordu<br/><br/> <ul>
    //   //   <li>lista</li>
    //   //   <li>listica</li>
    //   //   <li>listlist</li>
    //   // </ul> </>),
    //   name: "Marie Curie Pool |CURIE|",
    //   poolColor: "black",
    //   secondaryColor: "#000",
    //   logoColor: "#336699",
    //   bodyBackgroundColor: "rgb(52, 163, 108)",
    //   description: (
    //     <>
    //       Marie Curie Pool is operated by young scientist, pharmacist and crypto
    //       enthusiast from Croatia who realized the potential of new technologies
    //       like blockchain in science and biomedicine. It is inspired by Marie
    //       Curie who was dedicated to improvement of science despite all the
    //       obstacles she encountered.
    //     </>
    //   ),
    //   descriptionMobile: (
    //     <>
    //       Marie Curie Pool is operated by young scientist, pharmacist and crypto
    //       enthusiast from Croatia who realized the potential of new technologies
    //       like blockchain in science and biomedicine. It is inspired by Marie
    //       Curie who was dedicated to improvement of science despite all the
    //       obstacles she encountered.
    //     </>
    //   ),
    //   banner: CurieBanner,
    //   logoMobile: CurieLogo,
    //   logoStatic: "",
    //   logoDynamic: "",
    //   id: " 6c81475fe8b32b5dfde307325a2cb115de26a466037d0ec76bb499b3",
    //   twitter: "https://twitter.com/MarieCuriePool",
    //   telegram: "https://t.me/mariecuriepool",
    //   logoAnimation: false,
    //   operators: true,
    //   firstOperator: Zvonimir,
    //   secondOperator: false,
    // },

    MINES: {
      name: "ADAstra Mines |Mines|",
      poolColor: "black",
      secondaryColor: "#231035",
      bodyBackgroundColor: "#21dbdb",

      logoColor: "#21dbdb",
      description: (
        <>
          Founded in the dark times of Covid-19, first because of boredom, then
          realizing how special and ready to help Cardano community is, it
          became a passion.
          <br />
          This pool is determined to help the community and accelerate the
          advent of Cardano future.
          <br />
          <br />
          Join ADAstra mines and be a part of a community that wants a fair future for everybody.
        </>
      ),
      descriptionMobile: (
        <>
          Founded in the dark times of Covid-19, first because of boredom, then
          realizing how special and ready to help Cardano community is, it
          became a passion.
          <br />
          This pool is determined to help the community and accelerate the
          advent of Cardano future.
          <br />
          <br />
          Join ADAstra mines and be a part of a community that wants a fair future for everybody.
        </>
      ),

      id: "3e5fcbaf750c0291cecb72384091724a1c2d35da10a71473e16c926f",
      twitter: "https://twitter.com/AdastraMines",
      github: "https://github.com/embalint",
      telegram: "https://t.me/cpoolsunited",
      logo: "",
      logoStatic: "",
      logoDynamic: "",
      animation: "",
      initialLogoState: "",
      logoCustomCss: "",
      logoAnimation: false,
      operators: true,
      firstOperator: Emil,
      secondOperator: Stjepan,
      banner: MinesBanner,
      logoMobile: MinesLogo,
    },
    CPU: {
      name: "CPU Pool |CPU|",
      poolColor: "black",
      secondaryColor: "black",
      bodyBackgroundColor: "rgb(44, 155, 196)",

      logoColor: "rgb(44, 155, 196)",
      description: (
        <>
          Official pool of Cardano Pools United collaboration. The part of the
          profits from this pool will be used to pay for the relays for the
          pools. CPU collaborators decided to donate the rest to the charitable
          causes.
          <br />
          <br />
          Every CPU collaboration pool owner/s have the right to choose where to donate next. That decision can also be made by our delegators.
          If you are a CPU collaboration pool delegator and would like us to help a specific charity, feel free to<Link to="/contact-us">  contact us</Link>.
        </>
      ),
      descriptionMobile: (
        <>
          Official pool of Cardano Pools United collaboration. The part of the
          profits from this pool will be used to pay for the relays for the
          pools. CPU collaborators decided to donate the rest to the charitable
          cause of our delegators choice.
        </>
      ),

      banner: CpuBanner,
      logoMobile: CpuLogo,

      logoAnimation: false,
      id: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
      twitter: "https://twitter.com/C_PoolsUnited",
      telegram: "https://t.me/cpoolsunited",
      youtube: "https://www.youtube.com/channel/UCPJ4UFyhEpqxYgcAWkplchw",

      // github: "https://github.com/filip4428",
      operators: false,
    },
    ERA: {
      name: "Nova Era Pool |ERA|",
      poolColor: "#030303",
      secondaryColor: "#000",
      logoColor: "rgb(150, 206, 107)",
      bodyBackgroundColor: "rgb(150, 206, 107)",
      description: (
        <>
          We're two sisters handling one Nova |ERA| pool. We have been ADA
          holders since 2017, now we decided to collaborate with CPU team and
          try our best to contribute to Cardano family.
        </>
      ),
      descriptionMobile: (
        <>
          We're two sisters handling one Nova |ERA| pool. We have been ADA
          holders since 2017, now we decided to collaborate with CPU team and
          try our best to contribute to Cardano family.
        </>
      ),

      banner: "",
      logoMobile: EraLogo,
      logoStatic: "",
      logoDynamic: EraLogoGif,
      id: "19cb138eab81d3559e70094df2b6cb1742bf275e920300d5c3972253",
      twitter: "https://twitter.com/NovaERA_pool",
      telegram: "https://t.me/cpoolsunited",
      logoAnimation: true,
      operators: true,
      firstOperator: Patricia,
      secondOperator: Nora,
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
    console.log(calculatedUserReward);
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
    }, 2000);
  };

  useEffect(() => {
    //get URL params

    setTimeout(async () => {
      setStartAnimation(true);
    }, 800);
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
    urlParamsObject.id === "VEN" && setUrlParams({ id: "VENUS" });
  }, []);

  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      setTimeout(async () => {
        setStartAnimation(true);
      }, 800);
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

      // !poolsDetails.hasOwnProperty(urlParamsObject.id) &&
      //   setUrlParams({ id: "CPU" });

      // console.log(`You changed the page to: ${location.pathname}`);
    });
  }, [history]);

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
        // console.log(context);
        // context.poolStats[urlParams.id] &&
        //   console.log(context.poolStats[urlParams.id]);
        // console.log(
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
            // console.log(epochsGraph);
          }
          // console.log(epochsGraph);
        }
        //TODO: ovo mozda nebi trebalo tu biti, usporava render brijem!!!
        //TODO: !!!

        if (
          !numberOfBlocks &&
          context.poolStats[urlParams.id] &&
          !parsedDataRoaFinished
        ) {
          // console.log("testiram");
          setNumberOfBlocks([]);
          setRoaStats([]);
          // console.log(
          //   JSON.parse(context.poolStats[urlParams.id].data.hist_bpe)
          // );

          JSON.parse(context.poolStats[urlParams.id].data.hist_bpe).forEach(
            (element) => {
              setNumberOfBlocks((numberOfBlocks) => [
                ...numberOfBlocks,
                parseInt(element.val),
              ]);
            }
          );
          console.log(context.poolStats[urlParams.id]);
          JSON.parse(context.poolStats[urlParams.id].data.hist_roa).forEach(
            (element) => {
              // console.log(element.val);

              setRoaStats((roaStats) => [...roaStats, parseFloat(element.val)]);
            }
          );

          // setRoaStats((roaStats) => [...roaStats, null]);

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

          setParsedDataRoaFinished(true);
          setCurrentBlocksRewards(
            context.poolStats[urlParams.id].data.blocks_epoch
          );
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
              backgroundColor={poolsDetails[urlParams.id].bodyBackgroundColor}
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
                height: 200,
                color: "white",
              }}
              {...rest}
            />
            {/* <ShowAda
              titleColor={poolsDetails[urlParams.id].logoColor}
              textBackgroundColor={poolsDetails[urlParams.id].logoColor}
              backgroundColor={poolsDetails[urlParams.id].secondaryColor}
              title={"Pledge"}
              width="180px"
              text={`${
                context.adaPrice.RAW &&
                context.adaPrice.RAW.ADA.USD.PRICE.toFixed(4)
              } USD `}
            /> */}
            <ParallaxStyled
              poolColor={poolsDetails[urlParams.id].poolColor}
              image={poolsDetails[urlParams.id].banner}
            >
              {poolsDetails[urlParams.id].logoAnimation && (
                <BannerLogoContainer>
                  <LogoSection
                    logoCustomCss={
                      poolsDetails[urlParams.id].logoCustomCss +
                      (startAnimation &&
                        `transform:rotate(${context.scrollOffset / 25}deg);`)
                    }
                    src={poolsDetails[urlParams.id].logoStatic}
                  />
                  <LogoSection
                    initialState={
                      !startAnimation &&
                      poolsDetails[urlParams.id].initialLogoState
                    }
                    animation={
                      startAnimation && poolsDetails[urlParams.id].animation
                    }
                    src={poolsDetails[urlParams.id].logoDynamic}
                  />
                </BannerLogoContainer>
              )}

              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <PoolTitle className={classes.title}>
                      {" "}
                      {urlParams && poolsDetails[urlParams.id].name}
                    </PoolTitle>
                    <DescriptionText>
                      {!mobileState
                        ? urlParams && poolsDetails[urlParams.id].description
                        : urlParams &&
                        poolsDetails[urlParams.id].descriptionMobile}
                    </DescriptionText>
                    <br />
                    <AbsoluteLogo src={poolsDetails[urlParams.id].logoMobile} />
                    <BigIdWrapper>
                    <IdWrapper visible={context.poolStats[urlParams.id]}
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
                      </IdWrapper>
                      <Copied copyState={copyState}>Copied</Copied>
                      </BigIdWrapper>
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
                    {poolsDetails[urlParams.id].operators && (
                      <OperatorWrapper>
                        <OperatedByText
                          color={poolsDetails[urlParams.id].bodyBackgroundColor}
                        >
                          Operated by
                        </OperatedByText>
                        <div>
                          <OperatorPic
                            src={poolsDetails[urlParams.id].firstOperator}
                          />
                          {poolsDetails[urlParams.id].secondOperator && (
                            <OperatorPic
                              src={poolsDetails[urlParams.id].secondOperator}
                            />
                          )}
                        </div>
                      </OperatorWrapper>
                    )}

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
                    text={`${context.poolStats[urlParams.id] &&
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
                    text={`${context.poolStats[urlParams.id] &&
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
                    title={"ROA (30 day avg) "}
                    text={`${context.poolStats[urlParams.id] &&
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
                    text={`${context.poolStats[urlParams.id] &&
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
                    text={`${context.poolStats[urlParams.id] &&
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
                                userBlocksRef.current.value,
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
                            }}
                          />
                        </RewardsComponent>

                        <RewardsComponent>
                          <div style={{ width: "max-content" }}>
                            Blocks produced:
                          </div>
                          <RewardsInputComponent
                            type="number"
                            value={currentBlocksRewards}
                            ref={userBlocksRef}
                            inputBackground={
                              poolsDetails[urlParams.id].poolColor
                            }
                            color={poolsDetails[urlParams.id].logoColor}
                            onChange={() => {
                              // console.log(userDelegationRef.current.value);
                              setCurrentBlocksRewards(
                                userBlocksRef.current.value
                              );
                              calculateRewards(
                                parseFloat(context.globalStats.total_staked) /
                                1000000,
                                parseFloat(
                                  context.poolStats[urlParams.id].data
                                    .active_stake
                                ) / 1000000,
                                parseFloat(context.globalStats.ada_circ) /
                                1000000,
                                userBlocksRef.current.value,
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
                              // console.log("VAZNO")
                            }}
                          />
                        </RewardsComponent>
                        {calculatedUserReward >= 0 && (
                          <>
                            <RewardsComponent margintop="42px" fontweight="500">
                              Estimated rewards with&nbsp;
                              {currentBlocksRewards}
                              &nbsp;blocks minted:&nbsp;
                              {calculatedUserReward}₳*
                            </RewardsComponent>
                            <div
                              style={{
                                fontSize: "12px",

                                marginTop: "32px",
                                marginBottom: "-18px",
                              }}
                            >
                              Thank you
                              <a
                                href="https://adapools.org"
                                rel="noreferrer"
                                target="_blank"
                              >
                                {" "}
                                adaPools
                              </a>{" "}
                              for protocol parameters API
                            </div>
                            <Notice>
                              The calculator works properly only with amount
                              lower than active stake and is prone to errors if data from adaPools is fauilty*
                            </Notice>
                          </>
                        )}
                        {!calculatedUserReward && (
                          <>
                            <RewardsComponent margintop="42px" fontweight="500">
                              TEEST rewards with&nbsp;
                              {
                                context.poolStats[urlParams.id].data
                                  .blocks_epoch
                              }
                              &nbsp;blocks minted:&nbsp;
                              {calculatedUserReward}₳
                            </RewardsComponent>
                            <div
                              style={{
                                fontSize: "12px",

                                marginTop: "32px",
                                marginBottom: "-18px",
                              }}
                            >
                              Thank you
                              <a
                                href="https://adapools.org"
                                rel="noreferrer"
                                target="_blank"
                              >
                                {" "}
                                adaPools
                              </a>{" "}
                              for protocol parameters API
                            </div>
                          </>
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
                        ? poolsDetails[urlParams.id].secondaryColor == "#000"
                          ? "#808281"
                          : poolsDetails[urlParams.id].secondaryColor
                        : "nikaj onda",
                      poolsDetails[urlParams.id].logoColor
                        ? poolsDetails[urlParams.id].logoColor
                        : "nikaj onda",
                    ],
                    fill: {
                      colors: [
                        poolsDetails[urlParams.id].secondaryColor
                          ? poolsDetails[urlParams.id].secondaryColor == "#000"
                            ? "#808281"
                            : poolsDetails[urlParams.id].secondaryColor
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
              <AdditionalInfo
                displayInfo={poolsDetails[urlParams.id].additionalInfo}
              >
                <ContentTitle>Additional pool info</ContentTitle>

                {poolsDetails[urlParams.id].additionalInfo}
              </AdditionalInfo>
            </ContentWrapper>
            {/* <Footer /> */}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
export default PoolPage;
