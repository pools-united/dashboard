import React, { useState } from "react";
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

import styled from "styled-components";
import styles from "assets/jss/material-kit-react/views/faqPage.js";

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
  text-align: center;
  padding: 8px 0;
`;

const FaqContainer = styled.div`
  padding-top: 32px;
`;

const Spacer = styled.div`
  width: 100%;
  height: ${(props) => props.height};
`;
// const AccordionWrapper = styled.div`
//   width: 100%;
// `;

// // const InitialAccordionState = {
// //   1: false,
// //   2: false,
// //   3: false,
// // };

// const TypographyStyled = styled(Typography)`
//   width: 100%;
//   transition: 0.3s all;
//   text-align: ${(props) => (props.animation ? "center" : "unset")};
//   font-size: ${(props) => (props.animation ? "22px" : "16px")};
// `;

// function SimpleAccordion() {
// const classes = useStyles();

// function AccordionState(id) {
//   console.log(id);
//   setAccordionState({
//     ...accordionState,
//     1: true,
//   });
// }

// const [accordionState, setAccordionState] = useState(InitialAccordionState);
// const [expanded, setExpanded] = React.useState(false);

// const handleChange = (panel) => (event, isExpanded) => {
//   setExpanded(isExpanded ? panel : false);
// };

// return (
//     <AccordionWrapper>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <TypographyStyled
//             animation={expanded === "panel1"}
//             className={classes.heading}
//           >
// What is Cardano?          </TypographyStyled>
//         </AccordionSummary>
//         <AccordionDetails>
//           <PlayerStyled url="https://youtu.be/nSNOo7LFTjI" />
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel2"}
//         onChange={handleChange("panel2")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <TypographyStyled
//             animation={expanded === "panel2"}
//             className={classes.heading}
//           >
//             Users
//           </TypographyStyled>
//         </AccordionSummary>
//         <AccordionDetails>
//           <TypographyStyled>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat
//             lectus, varius pulvinar diam eros in elit. Pellentesque convallis
//             laoreet laoreet.
//           </TypographyStyled>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel3"}
//         onChange={handleChange("panel3")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3bh-content"
//           id="panel3bh-header"
//         >
//           <TypographyStyled
//             animation={expanded === "panel3"}
//             className={classes.heading}
//           >
//             Advanced settings
//           </TypographyStyled>
//         </AccordionSummary>
//         <AccordionDetails>
//           <TypographyStyled>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
//             sit amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </TypographyStyled>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel4"}
//         onChange={handleChange("panel4")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4bh-content"
//           id="panel4bh-header"
//         >
//           <TypographyStyled
//             animation={expanded === "panel4"}
//             className={classes.heading}
//           >
//             Personal data
//           </TypographyStyled>
//         </AccordionSummary>
//         <AccordionDetails>
//           <TypographyStyled>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
//             sit amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </TypographyStyled>
//         </AccordionDetails>
//       </Accordion>
//     </AccordionWrapper>

//   );
// }

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

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
          <TitleHeading id="WhatIsCardano">What is Cardano?</TitleHeading>
          <PlayerStyled
            url="https://youtu.be/nSNOo7LFTjI"
            config={{
              youtube: {
                playerVars: { controls: 1 },
              },
            }}
          />
          <Spacer height="64px" />
          <TitleHeading>Rest of FAQ coming soon :)</TitleHeading>
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
