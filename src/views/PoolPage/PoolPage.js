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
import CurieLogo from "assets/poolAssets/curie/curie_logo.png";
import CurieBanner from "assets/poolAssets/curie/CurieBanner.png";

import CahliLogo from "assets/poolAssets/cahli/cahli_logo.png";
import CahliBanner from "assets/poolAssets/cahli/cahliBanner.png";
import CahliCharity from "assets/poolAssets/cahli/cahli_charity.jpg";

import SundaeSwapRISO from "assets/poolAssets/venus/sundaeswap-reverse-iso.webp"
import EcoCashewISO from "assets/poolAssets/venus/cashewF.png"
import CahliHero from "assets/poolAssets/cahli/cahliHero.jpg"

import FileCopyIcon from "@material-ui/icons/FileCopy";

//operator images
import Filip from "assets/img/faces/Filip.jpg";
import Nora from "assets/img/faces/Nora.jpg";
import Patricia from "assets/img/faces/Patricia.jpg";
import Emil from "assets/img/faces/emil_avatar.jpg";
import Miha from "assets/img/faces/Miha.jpg";
import Stjepan from "assets/img/faces/stjepan.jpg";
import Shittu from "assets/img/faces/Shittu.jpeg";

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
  font-size: 15px;
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
  border-radius: 42px;

  .apexcharts-tooltip-title::before {
    content: "Epoch: ";
  }

  .apexcharts-menu {
    background: black;
  }
   .apexcharts-tooltip-title{
    color:black;
    background:#D8D8D8;
    margin-bottom:unset;
  }
  
  .apexcharts-menu-item:hover {
    background: ${(props) => props.downloadhover};
  }

  #apexchartsblocksProduced > svg {
    background-color: ${(props) => props.graphBackground} !important;
    border-radius: 16px;

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
  color:black;
`;

const Spacer = styled.div`
  height: ${(props) => props.heightSpacer};
`;

const copyAnimation = keyframes`
  0% {
    transform: translateY(-42px);
    opacity:0;
    color: black;

  }

  40% {
    transform: translateY(-6px);
    opacity:1;
    color: black;

      }

      60% {
        transform: translateY(-6px);
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
  border: 2px solid #D8D8D8;
  border-radius: 4px;
padding: 4px;

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
margin-bottom:46px;
  @media (max-width: 560px) {
    margin-top: 24px;
  }
`;

const PoolTitle = styled.h1`
  margin-top: 70px;
`;

const H1StyledCenter = styled.h2`
text-align: center;

color:black;
padding: 8px;
`;

const AdditionalInfoImgs = styled.img`
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
color:black;
p{
font-weight: bold;

}
`

const CahliSection = styled.div`
  background: ${(props) => props.background || 'white'};
  color: ${(props) => props.color || 'black'};
  padding: 32px 24px;
  margin: 24px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  h2 {
    color: ${(props) => props.titleColor || '#068790'};
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 700;
    border-bottom: 3px solid ${(props) => props.titleColor || '#068790'};
    padding-bottom: 12px;
  }

  h3 {
    color: ${(props) => props.subtitleColor || '#87060F'};
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 22px;
    font-weight: 600;
  }

  p {
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 400;
  }

  ul, ol {
    line-height: 1.8;
    margin-bottom: 16px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 12px;
    font-size: 16px;
  }

  strong {
    color: ${(props) => props.strongColor || '#068790'};
    font-weight: 700;
  }

  a {
    color: ${(props) => props.linkColor || '#068790'};
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.linkHoverColor || '#87060F'};
      text-decoration: underline;
    }
  }
`

const CahliHeroSection = styled.div`
  margin: 48px 0;
  text-align: center;

  h1 {
    background: linear-gradient(135deg, #068790 0%, #87060F 100%);
    color: white;
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 700;
    box-shadow: 0 6px 16px rgba(6, 135, 144, 0.3);
  }

  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`

const CahliHighlight = styled.div`
  background: linear-gradient(135deg, #068790 0%, #0a9aa5 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin: 20px 0;
  border-left: 6px solid #87060F;
  box-shadow: 0 4px 12px rgba(6, 135, 144, 0.3);

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 500;
  }

  strong {
    color: #FFD700;
    font-weight: 700;
  }
`

const CahliContactBox = styled.div`
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  margin-top: 20px;
  border: 2px solid #068790;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
    font-size: 16px;

    &:last-child {
      border-bottom: none;
    }
  }
`

const CahliOperatorProfile = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const CahliOperatorImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #068790;
  box-shadow: 0 8px 24px rgba(6, 135, 144, 0.3);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`

const CahliOperatorText = styled.div`
  flex: 1;

  p {
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 16px;
  }
`

// Venus styled components
const VenusSection = styled.div`
  background: ${(props) => props.background || 'white'};
  color: ${(props) => props.color || 'black'};
  padding: 32px 24px;
  margin: 24px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  h2 {
    color: ${(props) => props.titleColor || '#45A29E'};
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 700;
    border-bottom: 3px solid ${(props) => props.titleColor || '#45A29E'};
    padding-bottom: 12px;
  }

  h3 {
    color: ${(props) => props.subtitleColor || '#1F2833'};
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 22px;
    font-weight: 600;
  }

  p {
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 400;
  }

  ul, ol {
    line-height: 1.8;
    margin-bottom: 16px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 12px;
    font-size: 16px;
  }

  strong {
    color: ${(props) => props.strongColor || '#45A29E'};
    font-weight: 700;
  }

  a {
    color: ${(props) => props.linkColor || '#45A29E'};
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.linkHoverColor || '#1F2833'};
      text-decoration: underline;
    }
  }
`

const VenusHeroSection = styled.div`
  margin: 48px 0;
  text-align: center;

  h1 {
    background: linear-gradient(135deg, #45A29E 0%, #1F2833 100%);
    color: white;
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 700;
    box-shadow: 0 6px 16px rgba(69, 162, 158, 0.3);
  }

  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`

const VenusHighlight = styled.div`
  background: linear-gradient(135deg, #45A29E 0%, #5ab3af 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin: 20px 0;
  border-left: 6px solid #1F2833;
  box-shadow: 0 4px 12px rgba(69, 162, 158, 0.3);

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 500;
  }

  strong {
    color: #FFD700;
    font-weight: 700;
  }
`

const VenusLinkBox = styled.div`
  background: #f0f8f8;
  padding: 20px;
  border-radius: 8px;
  margin: 12px 0;
  border-left: 4px solid #45A29E;
  transition: all 0.3s ease;

  &:hover {
    background: #e6f4f4;
    transform: translateX(4px);
  }

  a {
    color: #45A29E;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;

    &:hover {
      color: #1F2833;
    }

    &::before {
      content: "→";
      margin-right: 8px;
      font-weight: bold;
    }
  }
`
const additionalInfoVenus = (<AdditionalInfoWrapper>

  <VenusSection background="white" titleColor="#45A29E" subtitleColor="#1F2833" strongColor="#45A29E" linkColor="#45A29E" linkHoverColor="#1F2833">
    <h2>Fresco Pool Supporting Eco Cashew Project via ISPO</h2>

    <LinkWrapper target="_blank" marginTop="24px" marginBottom="24px" href="https://www.ecocashew.com">
      <AdditionalInfoImgs src={EcoCashewISO} />
    </LinkWrapper>

    <p>
      Fresco Pool |VENUS| was a proud supporter of the EcoCashew project, working to create Fair Trade for local Cashew farmers with <strong>90% reduction in CO2 emissions</strong> by processing the farmers' Cashews on location instead of transporting them all around the world to get them processed in Asia.
    </p>

    <VenusHighlight>
      <p>
        <strong>Environmental Impact:</strong> Click on the image above to learn more about Eco Cashew's project to create jobs and help the environment.
      </p>
    </VenusHighlight>

    <p>
      Fresco Pool |VENUS| was participating in Eco Cashew's CashewF ISPO which is seven epochs long from epoch 350 until the end of epoch 356. By staking with us you can support the environment and earn rewards from Eco Cashew.
    </p>

    <p>
      By buying CashewF tokens you have the opportunity to participate in creating <strong>100+ jobs</strong>, help establish fair trade Cashew prices in Africa and reduce CO2 emissions caused by Cashew processing by <strong>90%</strong>.
    </p>

    <h3>Learn More About EcoCashew</h3>

    <VenusLinkBox>
      <a href="https://t.me/EcoCashewF/" target="_blank" rel="noopener noreferrer">
        EcoCashew Telegram
      </a>
    </VenusLinkBox>

    <VenusLinkBox>
      <a href="https://www.ecocashew.com/roadmap.html" target="_blank" rel="noopener noreferrer">
        EcoCashew Road Map
      </a>
    </VenusLinkBox>

    <VenusLinkBox>
      <a href="https://www.ecocashew.com/assets/pdf/cashewf-whitepaper.pdf" target="_blank" rel="noopener noreferrer">
        EcoCashew Whitepaper
      </a>
    </VenusLinkBox>

    <VenusLinkBox>
      <a href="https://www.ecocashew.com/assets/mp4/cashewf-fanfilm.mp4" target="_blank" rel="noopener noreferrer">
        EcoCashew Fan Film
      </a>
    </VenusLinkBox>
  </VenusSection>

  <VenusSection background="#f0f8f8" titleColor="#45A29E" subtitleColor="#1F2833" strongColor="#45A29E" linkColor="#45A29E" linkHoverColor="#1F2833">
    <h2>Fresco Pool & SundaeSwap Reverse ISO</h2>

    <LinkWrapper target="_blank" marginTop="24px" marginBottom="24px" href="https://iso.sundaeswap.finance/#/reverse-iso">
      <AdditionalInfoImgs src={SundaeSwapRISO} />
    </LinkWrapper>

    <VenusHighlight>
      <p>
        <strong>Partnership Highlight:</strong> Fresco Pool was a proud participant in the SundaeSwap Reverse ISO program, supporting the growth of decentralized exchanges on Cardano.
      </p>
    </VenusHighlight>

    <p>
      Click on the image above to learn more about the SundaeSwap Reverse ISO program and how it benefits delegators and the Cardano ecosystem.
    </p>
  </VenusSection>

  <VenusSection background="white" titleColor="#45A29E" subtitleColor="#1F2833" strongColor="#45A29E" linkColor="#45A29E" linkHoverColor="#1F2833">
    <h2>About the Pool Operator</h2>
    <CahliOperatorProfile>
      <CahliOperatorImage src={Filip} alt="Filip Strelec - Fresco Pool Operator" style={{borderColor: '#45A29E'}} />
      <CahliOperatorText>
        <p>
          Hey there! I'm Filip, a <strong>software developer</strong> and <strong>geo-environmental engineer</strong> running Fresco Pool |VENUS| since the ITN days. I've always been passionate about technology and the environment, which is why Cardano's mission really resonates with me.
        </p>
        <p>
          I started <strong>Cardano Pools United (CPU)</strong> to help small stake pools get off the ground and work together. The idea is simple: by collaborating and sharing resources, we can all contribute to a more decentralized Cardano network. It's been great connecting with other pool operators and supporting each other!
        </p>
        <p>
          When I'm not working on pool operations, I enjoy coding side projects like a little multiplayer game called <strong><a href="https://store.steampowered.com/app/3244900/Curvelicious/" target="_blank" rel="noopener noreferrer">Curvelicious</a></strong> that's available on Steam.
        </p>
        <VenusHighlight style={{marginTop: '20px'}}>
          <p>
            <strong>My Goal:</strong> Keep things simple, transparent, and community-focused. Whether you're new to Cardano or a seasoned delegator, I'm here to help and answer any questions you might have!
          </p>
        </VenusHighlight>
      </CahliOperatorText>
    </CahliOperatorProfile>

    <h3>Get in Touch</h3>
    <VenusLinkBox>
      <a href="mailto:filip.strelec@gmail.com">
        filip.strelec@gmail.com
      </a>
    </VenusLinkBox>

    <VenusLinkBox>
      <a href="https://x.com/PoolVenus" target="_blank" rel="noopener noreferrer">
        Twitter/X (@PoolVenus)
      </a>
    </VenusLinkBox>

    <VenusLinkBox>
      <a href="https://github.com/filip-strelec" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </VenusLinkBox>


  </VenusSection>

</AdditionalInfoWrapper>)

const additionalInfoCahli = (<AdditionalInfoWrapper>

  <CahliHeroSection>
    <h1>Nigeria's First Cardano Stake Pool — Driving Blockchain Growth Across Africa</h1>
    <AdditionalInfoImgs src={CahliHero} />
  </CahliHeroSection>

  <CahliSection background="white" titleColor="#068790" subtitleColor="#87060F" strongColor="#068790" linkColor="#068790" linkHoverColor="#87060F">
    <h2>Quick Overview</h2>
    <p>
      Cahli Stake Pool is more than just a staking pool. We are Africa's first step into decentralized finance through Cardano, offering delegators reliable rewards while making a real difference in society. Every ADA you stake not only grows your wealth but also fuels blockchain adoption and supports community-driven projects in Nigeria and across Africa.
    </p>

    <h3>Why Choose Cahli?</h3>
    <ul>
      <li>Earn reliable staking rewards.</li>
      <li>Strengthen Cardano's decentralization.</li>
      <li>Support Africa's blockchain adoption.</li>
      <li>Make an impact through charity donations.</li>
    </ul>

    <CahliHighlight>
      <p>
        <strong>Impact Highlight:</strong> By delegating to Cahli, you secure your ADA rewards and give back to the community, as part of our profits are dedicated to education, charity, and innovation programs.
      </p>
    </CahliHighlight>
  </CahliSection>

  <CahliSection background="#f0f9fa" titleColor="#068790" subtitleColor="#87060F" strongColor="#068790" linkColor="#068790" linkHoverColor="#87060F">
    <h2>About Us</h2>
    <h3>Our Story</h3>
    <p>
      Cahli Stake Pool was founded with a mission to bring Africa closer to the future of blockchain. As the first Cardano stake pool in Nigeria, Cahli serves as a bridge between global delegators and local impact. Our operations are community-focused, secure, and transparent—ensuring delegators receive fair rewards while Africa benefits from innovation and growth.
    </p>
    <p>
      Cahli Stake Pool is more than just a Cardano staking pool; it is a movement for innovation, decentralization, and community empowerment across Africa. By delegating to Cahli, you're not only securing rewards on your ADA investment but also contributing to a greater cause: advancing blockchain education, supporting local communities, and driving sustainable development in Nigeria and beyond.
    </p>

    <h3>Mission</h3>
    <p>
      To empower individuals and communities through Cardano's decentralized technology by providing a reliable stake pool that fuels blockchain adoption, financial inclusion, and community development.
    </p>

    <h3>Vision</h3>
    <p>
      A future where Africa leads in blockchain innovation, using technology to create opportunities, bridge gaps, and empower millions.
    </p>

    <h3>Core Values</h3>
    <ul>
      <li><strong>Decentralization</strong> – Strengthening Cardano's global network.</li>
      <li><strong>Transparency</strong> – Clear, honest operations and reporting.</li>
      <li><strong>Innovation</strong> – Using blockchain to solve African challenges.</li>
      <li><strong>Impact</strong> – Giving back to society through charity and empowerment.</li>
      <li><strong>Education</strong> – Promoting blockchain literacy and digital skills.</li>
    </ul>
  </CahliSection>

  <CahliSection background="white" titleColor="#068790" subtitleColor="#87060F" strongColor="#068790" linkColor="#068790" linkHoverColor="#87060F">
    <h2>Staking Guide</h2>
    <h3>What is Staking?</h3>
    <p>
      Staking allows you to earn rewards by delegating your ADA to a stake pool without moving your funds. Your ADA stays safe in your wallet, but by delegating, you help secure the Cardano blockchain and get rewarded for it.
    </p>

    <h3>Why Stake With Cahli?</h3>
    <ul>
      <li>Earn competitive ADA rewards.</li>
      <li>Support Nigeria's first stake pool.</li>
      <li>Contribute to real-world impact.</li>
      <li>Participate in Africa's blockchain growth.</li>
    </ul>

    <h3>How to Stake with Cahli (CAHLI):</h3>
    <ol>
      <li>Download a Cardano wallet (Daedalus, Yoroi, or Eternl).</li>
      <li>Transfer ADA into your wallet.</li>
      <li>Open the delegation center and search for CAHLI.</li>
      <li>Delegate and start earning rewards!</li>
    </ol>

    <h3>FAQ</h3>
    <ul>
      <li><strong>Is my ADA safe?</strong> → Yes, ada never leaves your wallet while you stake.</li>
      <li><strong>Can I unstake anytime?</strong> → Yes, delegation is flexible. You can unstake or change pools anytime.</li>
      <li><strong>When do I start earning rewards?</strong> → Rewards begin after 3–4 epochs (~15–20 days).</li>
    </ul>
  </CahliSection>

  <CahliSection background="#fff5f5" titleColor="#87060F" subtitleColor="#068790" strongColor="#87060F" linkColor="#068790" linkHoverColor="#87060F">
    <h2>Impact & Charity</h2>

    <AdditionalInfoImgs src={CahliCharity} alt="Cahli Pool Charity Impact" style={{marginTop: '24px', marginBottom: '24px'}} />

    <h3>Our Promise</h3>
    <p>
      At Cahli, we believe blockchain should benefit people, not just profit. That's why we dedicate a portion of our pool rewards to impactful projects.
    </p>

    <h3>Focus Areas:</h3>
    <ul>
      <li><strong>Education:</strong> Supporting children's schooling and blockchain literacy programs.</li>
      <li><strong>Community Support:</strong> Providing aid to underprivileged families and local initiatives.</li>
      <li><strong>Innovation:</strong> Empowering tech startups and student-led projects in Nigeria.</li>
    </ul>

    <CahliHighlight>
      <p>
        <strong>Impact Updates:</strong> We will regularly publish donation reports, photos, and stories to show how your delegation creates change. By staking with Cahli, you're directly contributing to a stronger, more empowered Africa.
      </p>
    </CahliHighlight>
  </CahliSection>

  <CahliSection background="#f0f9fa" titleColor="#068790" subtitleColor="#87060F" strongColor="#068790" linkColor="#068790" linkHoverColor="#87060F">
    <h2>Africa & Cardano</h2>
    <h3>Why Africa Needs Blockchain</h3>
    <p>
      Africa is one of the fastest-growing regions for blockchain adoption, driven by financial challenges and a young, tech-savvy population. Cardano provides transparency, low-cost transactions, and opportunities for inclusive growth.
    </p>

    <h3>Cahli's Role in Expansion</h3>
    <ul>
      <li>Hosting workshops and blockchain literacy events for students.</li>
      <li>Partnering with developers to build Africa-focused dApps.</li>
      <li>Supporting universities and communities to explore blockchain solutions.</li>
    </ul>

    <CahliHighlight>
      <p>
        <strong>Future Plans:</strong> We aim to expand partnerships, establish blockchain innovation hubs, and drive Africa's contribution to the global Cardano ecosystem.
      </p>
    </CahliHighlight>
  </CahliSection>

  <CahliSection background="white" titleColor="#068790" subtitleColor="#87060F" strongColor="#068790" linkColor="#068790" linkHoverColor="#87060F">
    <h2>Contact Us</h2>
    <p>
      We'd love to hear from you. Reach out for partnerships, questions, or community support.
    </p>
    <CahliContactBox>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:cahlistakepool@gmail.com">cahlistakepool@gmail.com</a></li>
        <li><strong>Telegram:</strong> <a href="https://t.me/cahlipool" target="_blank" rel="noopener noreferrer">t.me/cahlipool</a></li>
        <li><strong>Twitter/X:</strong> <a href="https://twitter.com/CahliStakepool" target="_blank" rel="noopener noreferrer">@CahliStakepool</a></li>
        <li><strong>Pool Ticker:</strong> CAHLI</li>
      </ul>
    </CahliContactBox>
  </CahliSection>

  <CahliSection background="linear-gradient(135deg, #f0f9fa 0%, #fff5f5 100%)" titleColor="#068790" subtitleColor="#87060F" strongColor="#87060F" linkColor="#068790" linkHoverColor="#87060F">
    <h2>Meet Shittu Muiz — A Rising Voice in Web3 Innovation and Impact</h2>
    <CahliOperatorProfile>
      <CahliOperatorImage src={Shittu} alt="Shittu Muiz - Cahli Pool Operator" />
      <CahliOperatorText>
        <p>
          Confident, purpose-driven, and visionary — Shittu Muiz is a dedicated medical student and emerging leader at the intersection of technology, community, and impact.
        </p>
        <p>
          From Africa to the global Web3 stage, Shittu represents a new generation of builders who blend compassion with innovation. With a passion for decentralization and education, he actively drives conversations around Web3 technologies, empowering communities with technical insights and real opportunities.
        </p>
        <p>
          As the operator of Cahli Pool, a Cardano staking pool, he champions decentralization while supporting youth education and global inclusion in blockchain ecosystems. Beyond his technical contributions, Shittu is known as a dynamic community builder, mentor, and inspiring advocate for using technology to make a meaningful difference.
        </p>
      </CahliOperatorText>
    </CahliOperatorProfile>
  </CahliSection>

</AdditionalInfoWrapper>)

const PoolPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  // const [poolTicker, setPoolTicker] = useState();
  const [epochsGraph, setEpochsGraph] = useState([]);
  const [roaStatsCx, setRoaStatsCx] = useState(undefined);

  const [numberOfBlocksCx, setNumberOfBlocksCx] = useState(undefined);

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

  const [hackyFix, setHackyFix] = useState(true);

  const poolsDetails = {
    VENUS: {
      additionalInfo: additionalInfoVenus,
      name: "Fresco Pool |VENUS|",
      poolColor: "white",
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
    CAHLI: {
      additionalInfo: additionalInfoCahli,
      name: "Cahli Pool |CAHLI|",
      poolColor: "white",
      secondaryColor: "#068790",
      logoColor: "#87060F",
      bodyBackgroundColor: "#068790",
      description: (
        <>
          Cahli Stake Pool, Nigeria’s first, empowers communities and advances Cardano across Africa. By joining, you fuel blockchain innovation, expand opportunities, and support growth in Nigeria and beyond. Plus, part of our profits goes to charity, making your stake even more impactful.
        </>
      ),
      descriptionMobile: (
        <>
      Cahli Stake Pool, Nigeria’s first, empowers communities and advances Cardano across Africa. By joining, you fuel blockchain innovation, expand opportunities, and support growth in Nigeria and beyond. Plus, part of our profits goes to charity, making your stake even more impactful.
        </>
      ),
      banner: CahliBanner,
      logoMobile: CahliLogo,
      logoStatic: "",
      logoDynamic: "",
      id: "3ee7ce97d36822f511cac6bbd76b70350684f8bb4ced5366842a96c9",
      twitter: "https://twitter.com/cahlistakepool",
      telegram: "https://t.me/cahlipool",
      logoAnimation: false,
      operators: true,
      firstOperator: Shittu,
      secondOperator: false,
    },

    MINES: {
      name: "ADAstra Mines |Mines|",
      poolColor: "white",
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
      poolColor: "white",
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
      poolColor: "white",
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
    decentralisationParam = 0,
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
        // context.poolStats[urlParams.id] &&
        //   console.log(context.poolStats[urlParams.id]);
        // console.log(
        //     JSON.parse(context.poolStats[urlParams.id].data.hist_bpe)
        //   );

        if (context?.globalStatsCx?.data?.epoch?.no && definedRender < 1) {
          setDefinedRender(definedRender + 1);

          for (let i = 10; i > 0; i--) {
            // const element = array[i];
            setEpochsGraph((epochsGraph) => [
              ...epochsGraph,
              parseInt(context?.globalStatsCx?.data?.epoch?.no) - i - 1,
            ]);
            // console.log(epochsGraph);
          }
          // console.log(epochsGraph);
        }
        //TODO: ovo mozda nebi trebalo tu biti, usporava render brijem!!!
        //TODO: !!!

        if (
          !numberOfBlocksCx &&
          context.poolStatsCx[urlParams.id] &&
          !parsedDataRoaFinished
        ) {
          // console.log("testiram");
          setRoaStatsCx([]);
          setNumberOfBlocksCx([]);




          const histCxData = context?.poolStatsCx[urlParams.id] && context?.poolStatsCx[urlParams.id]?.data?.stats;

          // context.poolStatsCx[urlParams.id]?.data.stats.forEach((element)=>{
          //   console.log("FILIP SERE MI SE",element)
          //   setNumberOfBlocks("fawf")
          // })

          // histCxData.forEach(
          //   (element) => {
          //     setNumberOfBlocksCx((numberOfBlocksCx) => [
          //       ...numberOfBlocksCx,
          //       parseInt(element.blocks),
          //     ]);
          //   }
          // );





          if (hackyFix) {
            const blocksArray = [];
            const roaArray = [];
            for (let i = histCxData.length; i > 0; i--) {
              const element = histCxData[i - 1];
              blocksArray.push(element.blocks);
              roaArray.push(element.return_member);
            }
            setNumberOfBlocksCx(blocksArray);
            setRoaStatsCx(roaArray);
          }

          setTimeout(() => {
            setHackyFix(false);
          }, 3000);










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
            context.poolStatsCx[urlParams.id].data.blocks_epoch
          );
        }


        //TODO: ovo (parseanje ROA I BLOCKOVA (VIDI GORE) )mozda nebi trebalo tu biti, usporava render brijem!!!
        //TODO: !!!


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
              poolColor="#030303"
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
                      <IdWrapper visible={context.poolStatsCx[urlParams.id]}
                        onClick={() => {
                          !copyState && copyId(poolsDetails[urlParams.id].id);
                        }}
                      >
                        <PoolId>
                          ID:&nbsp;
                          {context.poolStatsCx[urlParams.id] &&
                            context.poolStatsCx[urlParams.id].data.pool_id_hash}
                        </PoolId>
                        <FileCopyIcon />
                      </IdWrapper>
                      <Copied copyState={copyState}>Copied</Copied>
                    </BigIdWrapper>
                    <SocialContainer>
                      {poolsDetails[urlParams.id].twitter && (
                        <ListItemStyled className={classes.listItem}>
                          <TooltipStyled
                            title={`${urlParams.id} X (Twitter)`}
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
                                className={classes.socialIcons}
                                style={{
                                  fontWeight: 'bold',
                                  fontFamily: 'Arial, sans-serif',
                                  fontStyle: 'normal',
                                  fontSize: '2.2em'
                                }}
                              >𝕏</i>
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
                    text={context.poolStatsCx[urlParams.id] && urlParams.id}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Pledge"}
                    text={context.poolStatsCx[urlParams.id] && `${context.poolStatsCx[urlParams.id] &&
                      context.poolStatsCx[urlParams.id].data.pledge / 1000000
                      } ₳ `}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Fee"}
                    text={context.poolStatsCx[urlParams.id] &&
                      <>
                        Fixed&nbsp;
                        {context.poolStatsCx[urlParams.id] &&
                          context.poolStatsCx[urlParams.id].data.tax_fix /
                          1000000}
                        <br />
                        Margin&nbsp;
                        {context.poolStatsCx[urlParams.id] &&
                          (
                            parseFloat(
                              context?.poolStatsCx[urlParams.id]?.data.tax_ratio == null ? 0 : context.poolStatsCx[urlParams.id].data.tax_ratio
                            )
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
                      context?.poolStatsCx[urlParams.id] &&
                      parseInt(
                        context?.poolStatsCx[urlParams.id]?.data.blocks_lifetime
                      )

                    }
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Total Stake"}
                    text={context?.poolStatsCx[urlParams.id] && `${context?.poolStatsCx[urlParams.id] &&
                      (
                        parseInt(context?.poolStatsCx[urlParams.id]?.data?.stake) /
                        1000000000000
                      ).toFixed(2)
                      } M`}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"ROA (Lifetime)"}
                    text={context?.poolStatsCx[urlParams.id] && ` ${context?.poolStatsCx[urlParams.id] &&
                      parseFloat(
                        context?.poolStatsCx[urlParams.id]?.data?.roa_lifetime
                      ).toFixed(2)
                      }%`}
                  />
                </InfoGrid>
                <ContentTitle>
                  Stats for current Epoch({context?.globalStatsCx?.data?.epoch?.no})
                </ContentTitle>

                <InfoGrid>
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Active Stake"}
                    text={context?.poolStatsCx[urlParams.id] && `${context?.poolStatsCx[urlParams.id] &&
                      (
                        context?.poolStatsCx[urlParams.id]?.data?.stake_active /
                        1000000000000
                      ).toFixed(2)
                      } M`}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Blocks Estimated"}
                    text={context?.poolStatsCx[urlParams.id] && `${context?.poolStatsCx[urlParams.id] &&
                      context?.poolStatsCx[urlParams.id]?.data.blocks_est_epoch
                      }`}
                  />
                  <TextBox
                    titleColor={poolsDetails[urlParams.id].logoColor}
                    textBackgroundColor={poolsDetails[urlParams.id].logoColor}
                    backgroundColor={poolsDetails[urlParams.id].secondaryColor}
                    title={"Blocks Produced"}
                    text={
                      context?.poolStatsCx[urlParams.id] &&
                      context?.poolStatsCx[urlParams.id]?.data.blocks_epoch
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
                    title={`Rewards calculator for current Epoch (${context?.globalStatsCx?.data?.epoch?.no})`}
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
                                parseFloat(context?.globalStatsCx?.data?.supply?.live_stake) /
                                1000000,
                                parseFloat(
                                  context.poolStatsCx[urlParams.id].data
                                    .stake_active
                                ) / 1000000,
                                parseFloat(context?.globalStatsCx?.data?.supply?.circulating) /
                                1000000,
                                userBlocksRef.current.value,
                                userDelegationRef.current.value,
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.optimal_pool_count),
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.influence),
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.monetary_expand_rate),
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.treasury_growth_rate),
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.decentralisation),
                                parseFloat(
                                  context?.poolStatsCx[urlParams.id]?.data?.pledge
                                ) / 1000000,
                                parseFloat(
                                  context?.poolStatsCx[urlParams.id]?.data?.margin || 0
                                ),
                                parseFloat(
                                  context?.poolStatsCx[urlParams.id]?.data?.fixed_cost
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
                                parseFloat(context?.globalStatsCx?.data?.supply?.live_stake) /
                                1000000,
                                parseFloat(
                                  context.poolStatsCx[urlParams.id].data
                                    .stake_active
                                ) / 1000000,
                                parseFloat(context?.globalStatsCx?.data?.supply?.circulating) /
                                1000000,
                                userBlocksRef.current.value,
                                userDelegationRef.current.value,
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.optimal_pool_count),
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.influence),
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.monetary_expand_rate),
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.treasury_growth_rate),
                                parseFloat(context?.globalStatsCx?.data?.epoch_param?.decentralisation),
                                parseFloat(
                                  context?.poolStatsCx[urlParams.id]?.data?.pledge
                                ) / 1000000,
                                parseFloat(
                                  context?.poolStatsCx[urlParams.id]?.data?.margin || 0
                                ),
                                parseFloat(
                                  context?.poolStatsCx[urlParams.id]?.data?.fixed_cost
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
                                href="https://cexplorer.io"
                                rel="noreferrer"
                                target="_blank"
                              >
                                {" "}
                                Cardano Explorer
                              </a>{" "}
                              for protocol parameters API
                            </div>
                            <Notice>
                              The calculator works properly only with amount
                              lower than active stake and is prone to errors if data from Cexplorer is fauilty*
                            </Notice>
                          </>
                        )}
                      </RewardComponentWrapper>
                    }
                  />
                </RewardsCalculatorWrapper>
                <Spacer heightSpacer={"64px"} />
                <ContentTitle>Performance history</ContentTitle>
                <ChartStyled
                  graphBackground="#D8D8D8"
                  //
                  downloadhover={poolsDetails[urlParams.id].logoColor}
                  options={{
                    theme: {
                      mode: "light",
                      palette: "palette5",
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
                      fillSeriesColor: true,
                      onDatasetHover: {
                        highlightDataSeries: true,
                      },
                      style: { color: "black" },
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
                      data: roaStatsCx,

                    },
                    {
                      name: "Blocks produced",
                      data: numberOfBlocksCx,
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
