import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YAML from "yamljs"
import styled from "styled-components";
import styles from "assets/jss/material-kit-react/views/faqPage.js";

//ZA FILIPA REMINDER: installiral si si yaml2json cli i s komandom yaml2json cpu.yaml > cpu.json updateas json file!
import cpuDonationsJson from './cpu.json';
import cpuExampleJson from './example.json';

import ReactPlayer from "react-player";

const useStyles = makeStyles(styles);

const PlayerStyled = styled(ReactPlayer)`
  margin: auto;
  margin-top: 34px;

  @media (max-width: 768px) {
    width: 88% !important;
  }
`;

const TitleHeading = styled.div`
  font-size: 24px;
  font-weight: 500;
  /* text-align: center; */
  padding: 8px 0;
`;

const PageTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  padding: 32px 0;
`;

const FaqContainer = styled.div`
  padding:16px;
  padding-top: 32px;
  max-width: 728px;
  margin: auto;

`;

const Spacer = styled.div`
  width: 100%;
  height: ${(props) => props.height};
`;

const DateText = styled.div`
  /* text-align: center; */
  margin-top: 8px;
`;

const DescriptionText = styled.div`
  margin-top: 16px;
`;

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [data, setData] = useState();
    useEffect(() => {
      console.log(cpuDonationsJson);
      setData(cpuDonationsJson);
      console.log(data);
    }, []);





  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/poolAssets/cpu/CpuBanner.png")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SimpleAccordion /> */}
        {/* <BottomSpacer /> */}
        {/* <TitleHeading>How to delegate?</TitleHeading> */}
        <FaqContainer>
          <PageTitle>IN DEV</PageTitle>



          <TitleHeading>
            Some of us were guests on Cardano Hotel podcast, check us out! :)
          </TitleHeading>
          <DateText>08.04.2021.</DateText>
          {<PlayerStyled
            url="https://www.youtube.com/watch?v=ST7_erZlm_0"
            config={{
              youtube: {
                playerVars: { controls: 1 },
              },
            }}
          />}

          <Spacer height="64px" />

          <TitleHeading>
            Check out our android new android application with a widget!{" "}
          </TitleHeading>
          <DateText>22.01.2021.</DateText>
          {/* <PlayerStyled
            url="https://youtu.be/nSNOo7LFTjI"
            config={{
              youtube: {
                playerVars: { controls: 1 },
              },
            }}
          /> */}
          <DescriptionText>
            Be sure to check out our application with widget support for all our
            pools. <br></br>
            In the next updates we will add widget support to pools outside of
            CPU collaboration.
            <br></br>
            <br></br>
            <a
              href="https://play.google.com/store/apps/details?id=com.cardanopoolsunitedwidget"
              target="_blank"
            >
              Download link
            </a>
          </DescriptionText>




        </FaqContainer>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
