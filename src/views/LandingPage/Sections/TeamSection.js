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
import team4 from "assets/img/faces/Miha.jpg";
import zvonimir from "assets/img/faces/Zvonimir.jpg"

const useStyles = makeStyles(styles);

const TwoCards = styled.div`
  display: flex;
  flex-wrap: wrap;
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
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Mihovil Santek
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Mihovil is a React developer from Croatia, entered in the
                  crypto sphere in 2017 as a ICO investor. Fascinated by the{" "}
                  <a href="https://cardano.org/">Cardano</a> blockchain, now
                  playing an active role in Cardano community as a owner of{" "}
                  <a href="/pool?id=PROTO">Proto Pool.</a>
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
          </GridItem>{" "}
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
                Nora Mlinarić
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  After earning her Bachelor's degree in Journalism, Nora went
                  for Master's in PR. She entered the Crypto world to explore
                  her passion for technology, digital marketing and writing.{" "}
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
                <img src={zvonimir} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Zvonimir Mlinaric
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Zvonimir is a young scientist and soon to be Master of
                  pharmacy who realized the potential of new technologies like
                  blockchain in science and biomedicine and therefore founded
                  his Marie Curie Pool. In his free time, he likes to watch a
                  good movie and drink a good beer in a good company.
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
        </GridContainer>
      </div>
    </div>
  );
}
