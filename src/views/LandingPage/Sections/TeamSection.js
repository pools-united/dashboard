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

const useStyles = makeStyles(styles);

const TwoCards = styled.div`
  display: flex;
  justify-content: center;
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Patricia Mlinarić
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Patricia has Master's degree in enviromental engineering. She
                  can see the future where Cardano has a major role improving
                  not only peoples lives but the whole ecosystems.
                  <br /> You can find her in the forrest, picking mushrooms or
                  taking care of her plants.
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
                  working as JavaScript developer in{" "}
                  <a href="https://www.speck.agency/" target="_blank">
                    Speck d.o.o. <br />
                  </a>
                  He started <a href="/pool?id=VENUS">Fresco Pool </a> during an
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
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Dario Uršulin
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>He da man</p>
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

          <TwoCards>
            {" "}
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
                    Cardano community and its projects. Also a proud Cardano
                    pool owner of &nbsp;
                    <a href="/pool?id=MINES" target="_blank">
                      |MINES| pool
                    </a>
                    . &nbsp;He is also hell of a wake boarder and tennis player.
                    If you have any questions about his pool, or you just want
                    to chat, you can do it via
                    <a
                      href="www.linkedin.com/in/emil-balint-114840a2"
                      target="_blank"
                    >
                      LinkedIn&nbsp;
                    </a>{" "}
                    or &nbsp;
                    <a href="https://twitter.com/embalint" target="_blank">
                      Twitter
                    </a>
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
                  Nora Mlinarić
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    After earning her Bachelor's degree in Journalism, Nora went
                    for Master's in PR. She entered the Crypto world to explore
                    her passion for technology, digital marketing and writing.{" "}
                    <br />
                    By day you can find her on college or as a Sales Person in
                    H&M, and by night she's typically writing, tweeting or
                    curating content.
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
          </TwoCards>
        </GridContainer>
      </div>
    </div>
  );
}
