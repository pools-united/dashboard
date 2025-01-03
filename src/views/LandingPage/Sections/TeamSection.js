import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import styled from "styled-components";
import team1 from "assets/img/faces/Patricia.jpg";
import team2 from "assets/img/faces/Filip.jpg";
import team3 from "assets/img/faces/Nora.jpg";
import emil from "assets/img/faces/Emil.jpg";
import stjepan from "assets/img/faces/stjepan.jpg";
import shittu from "assets/img/faces/Shittu.jpeg";

import team4 from "assets/img/faces/Miha.jpg";
import zvonimir from "assets/img/faces/Zvonimir.jpg";

const useStyles = makeStyles(styles);



const TwoCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const GridContainerStyled = styled(GridContainer)`

justify-content: space-evenly;
`;
export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>CPU team</h2>
      <div>
        <GridContainerStyled>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Patricia Mlinaric
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Patricia has Master's degree in enviromental engineering. She
                  can see the future where Cardano has a major role improving
                  not only peoples lives but the whole ecosystems.
                  <br /> You can find her in the forest, picking mushrooms or
                  taking care of her plants.
                  The sisters operate <a href="/pool?id=ERA">Era pool</a>.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Filip Strelec
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Filip Strelec is Geo-environmental engineer that is currently
                  working as mobile application developer in IoT firm. He
                  started <a href="/pool?id=VENUS">Fresco Pool </a> during an
                  ITN Shelley phase and has been Stake pool operator ever since.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={emil} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Emil Balint
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Software engineer from Croatia with massive respect for
                  Cardano community and its projects. Also a proud Cardano pool
                  owner of &nbsp;
                  <a href="/pool?id=MINES" target="_blank">
                    Mines Pool
                  </a>
                  . He is also hell of a wake boarder and tennis player.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nora Mlinaric
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  After earning her Bachelor's degree in Journalism, Nora went
                  for Master's in PR. She entered the Crypto world to explore
                  her passion for technology, digital marketing and writing.{" "}
                  The sisters operate <a href="/pool?id=ERA">Era pool</a>.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
    
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={stjepan} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Stjepan Crncic
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Software engineer with 2 years of experience in
                  development of web applications and 7 years in system
                  administration. Together with Emil he started and operates <a href="/pool?id=MINES">Mines pool</a>.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={shittu} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Shittu Muiz
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Shittu Muiz is a dedicated medical student based in Africa, a dynamic community builder, and a passionate advocate for advancing Web3 projects through technical insights. As a stake pool operator, he is eager to explore opportunities and make an impact worldwide.
                He operates <a href="/pool?id=CAHLI">Cahli pool</a>.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>


        </GridContainerStyled>
      </div>
    </div>
  );
}
