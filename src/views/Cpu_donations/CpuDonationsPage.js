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

  const [donationData, setDonationData] = useState();
    useEffect(() => {
      setDonationData(cpuExampleJson);
      //MIHA LOG ZA TEBE, cpuExampleJson koristi za developanje a cpuDonationsJson ssu bas nase donacije
      console.log(donationData);
    }, [donationData]);





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
{/* PRIMJER SLIKE MIHA
KAK SAM DOBIL TAJ LINK?
________________-
U json fileu ces vidjeti  (EXAMPLE JSON FILE-a i console log njegov je u useEffect-u 82 linija)
files: Array [ "CPU/16-06-2021.png" ]
0: "CPU/16-06-2021.png"
​________________

na taj string dodas samo "https://pools-united.github.io/Donations/" (primjer dole u slici)

slike su u Array-u jer mogu dodavati i pdf i vise slika i slicno (taj files value u jsonu su zapravo files koji su dokazi da smo donirali)... uzimaj samo 1. (tj 0.) stvar u array-u, to ce uvijek biti slika...


UZMES: 
1. name (nezz dal treba i adresa i kontakt, odluci ti...)
2.ada
3. USD
4. timestamp (pretvoris timestamp u datum.. lako je... mislim da cak i JS ima built in za to)
5. fotografiju iz files, 1 file u array-united
 i svaka donacija u timeline-u to mora imati.. to je to, sretno :)
*/}
<img src="https://pools-united.github.io/Donations/CPU/16-06-2021.png"/>


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
