import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

// @material-ui/icons
import HelpIcon from "@material-ui/icons/Help";
import SecurityIcon from "@material-ui/icons/Security";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

const MissionDriven = styled.div`

font-size:13px;
margin-top:6px;
`


export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Cardano Pools United collaboration</h2>
          <h5 className={classes.description}>
            Cardano Pools United is a collaboration of stake pools operators
            with the goal to contribute to the Cardano ecosystem by educating
            the people about Cardano blockchain and using our developer
            knowledge to develop the tools needed to make the delegation process
            informative and painless.
            <br /> Our CPU pool is a non-profit pool representing the collaboration, that is used to pay for the infrastructure, the majority of profits are going towards charity donations.
            <br /> 
            <br /> 
            Check out our <Link to="/cpu-donations"> donation efforts timeline </Link><br /> 
          <MissionDriven>  CPU Pool is a member of <a href="https://missiondrivenpools.org/" target="_blank">Mission Driven Pools</a></MissionDriven>
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Ready to help"
              description={[
                `Our team consists of passionate and skilled developers aiming to contribute to Cardano ecosystem as much as they can. We are always ready to answer your any question regarding the Cardano project and delegating. You can join the chat at our official`,
                // eslint-disable-next-line react/jsx-key
                <a href="t.me/cpoolsunited" target="_blank">
                  {" "}
                  Telegram channel.
                </a>,
              ]}
              icon={HelpIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Secure and Reliable"
              description="Security is an utmost priority here at CPU crew, it is a must that everyone at the team understands and uses the concepts regarding safely and reliably running a stake pool. 
              To ensure reliability CPU pool network uses multiple cloud based relays across the world. Implementation of bare metal server is on the way. "
              icon={SecurityIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Contributing to the Cardano ecosystem"
              description="We are determined to accelerate the advent of mass adoption of the Cardano platform by educating the public and developing the tools needed to make the delegation process simple and informative."
              icon={DeveloperBoardIcon}
              iconColor="cardano"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
