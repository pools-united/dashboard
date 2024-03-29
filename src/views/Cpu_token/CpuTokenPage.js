import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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



//PRINT PICTURES
import cardanoCoin from "assets/poolAssets/prints/cardano.jpg";
import cpuCoaster from "assets/poolAssets/prints/cpu.jpg";
import daedalusCoaster from "assets/poolAssets/prints/daedalus.jpg";
import frescoCoaster from "assets/poolAssets/prints/fresco.jpg";
import adaStand from "assets/poolAssets/prints/adaStand.jpg";
import penHolder from "assets/poolAssets/prints/penHolder.jpg";





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
  text-align: center;
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

const ParallaxStyled = styled(Parallax)`
background-size:contain;

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
const AccordionWrapper = styled.div`
  width: 100%;
`;

const InitialAccordionState = {
  1: false,
  2: false,
  3: false,
};

const TypographyStyled = styled(Typography)`
  width: 100%;
  transition: 0.3s all;
  text-align: ${(props) => (props.animation ? "center" : "unset")};
  font-size: ${(props) => (props.animation ? "22px" : "16px")};
`;

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

const ulStyled = styled.ul`
text-align: left;
`

const DescriptionText = styled.div`
  margin-top: 16px;
`;

const ExamplePrintsText = styled.div`
text-align: center;
font-weight:500;
`

const CarouselImage = styled.img`

`


export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;


  function AccordionState(id) {
    console.log(id);
    setAccordionState({
      ...accordionState,
      1: true,
    });
  }

  const [accordionState, setAccordionState] = useState(InitialAccordionState);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


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
      <ParallaxStyled
        small
        filter
        image={require("assets/img/bannerToken.jpg")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <BottomSpacer /> */}
        {/* <TitleHeading>How to delegate?</TitleHeading> */}
        <FaqContainer>
          <PageTitle>CPU TOKEN</PageTitle>


          <TitleHeading>
            By delegating to one of our CPU pools you have a chance to get CPU Token
          </TitleHeading>


          <DescriptionText>
            We will occasionally giveaway our CPU tokens to our delegators. You can exchange your CPU token for cool Cardano or CPU pools related 3D prints.
            <br></br>
            <br></br>

          </DescriptionText>

          <AccordionWrapper>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <TypographyStyled
                  animation={expanded === "panel1"}
                  className={classes.heading}
                >
                  How can i get a CPU token?        </TypographyStyled>
              </AccordionSummary>
              <AccordionDetails><div>
                Any delegator of CPU pools is able to get a CPU token.<br />
       Just follow us on our <a href="https://twitter.com/C_PoolsUnited" target="_blank"> Twitter</a>, we will occasionally post CPU token giveaways.
       <br></br>       <br></br>

       All you need to do is:
<br></br>

                <ulStyled>
                  <li>Like the giveaway tweet</li>
                  <li>Retweet the giveaway tweet</li>
                  <li>Hold your delegation for atleast 10 days</li>
                  <br></br>



  After 10 days, if your delegation is still in one of our CPU pools, we will send you a CPU token.
</ulStyled>
              </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <TypographyStyled
                  animation={expanded === "panel2"}
                  className={classes.heading}
                >
                  What is the minimum delegation amount in order to be eligible for a giveaway?
          </TypographyStyled>
              </AccordionSummary>
              <AccordionDetails>
                <TypographyStyled>
                  Any amount of ADA delegated is just fine :)
          </TypographyStyled>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <TypographyStyled
                  animation={expanded === "panel3"}
                  className={classes.heading}
                >
                  What can i do with a CPU Token?
          </TypographyStyled>
              </AccordionSummary>
              <AccordionDetails>
                <TypographyStyled>
                  You can exchange your tokens for unique, CPU made 3D prints.

         The more tokens you have, bigger (more complex) the print will be, all you need is to decide if you want your print to be Cardano or CPU pools related.<br /><br />
         With 3 tokens or more, you can even request a personalized print (custom text, etc.) and we will see what we can do.
          </TypographyStyled>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel3bh-header"
              >
                <TypographyStyled
                  animation={expanded === "panel4"}
                  className={classes.heading}
                >
                  Can i choose what 3D print i want?
          </TypographyStyled>
              </AccordionSummary>
              <AccordionDetails>
                <TypographyStyled>
                  Nope, we like to surprise our delegators. <br></br>You can request a theme (Cardano or one of CPU pools), and if you exchange more that 3 CPU tokens, you can ask for a personalized print.
          </TypographyStyled>
              </AccordionDetails>
            </Accordion>


          </AccordionWrapper>
          <br />   <br />
          <ExamplePrintsText>  Some of our example prints, we will have new designs every month!</ExamplePrintsText>

          <br />
          <Carousel dynamicHeight={true} >
     
          <CarouselImage src={penHolder} />

              <CarouselImage src={adaStand} />
              {/* <p className="legend">Legend 2</p> */}
          
          
              <CarouselImage src={cardanoCoin} />
              {/* <p className="legend">Legend 1</p> */}
            
              <CarouselImage src={cpuCoaster} />
              {/* <p className="legend">Legend 2</p> */}
          
              <CarouselImage src={daedalusCoaster} />
              {/* <p className="legend">Legend 3</p> */}
           
         
              <CarouselImage src={frescoCoaster} />
          
              {/* <p className="legend">Legend 3</p> */}
           
          </Carousel>
















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
