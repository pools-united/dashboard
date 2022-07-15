import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Timeline } from 'react-twitter-widgets'
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

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
  /* text-align: center; */
  padding: 8px 0;
`;

const PageTitle = styled.div`
  font-size: 52px;
  font-weight: 500;
  text-align: center;
  
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 32px;
  }
  padding: 32px 0;
  transform: translateY(-200px);
  color: white;
}
`;

const PageTitleTwitter = styled(PageTitle)`
transform:translateY(69px);
background:white;
color:black;
padding: 32px 0 42px 0;
text-transform: none;
`

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

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
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
          <PageTitle>NEWS</PageTitle>



          <TitleHeading style={{marginTop:"-60px"}}>
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

          <br/>


<PageTitleTwitter>Twitter News</PageTitleTwitter>

          <Timeline
  dataSource={{
    sourceType: 'list',
    ownerScreenName: 'C_PoolsUnited',
    slug:'1418930538711298052'
  }}
  options={{
    height: '1200'
  }}
/>



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
