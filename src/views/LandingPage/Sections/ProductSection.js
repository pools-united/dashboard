import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import HelpIcon from "@material-ui/icons/Help";
import SecurityIcon from "@material-ui/icons/Security";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Cardano pools united collaboration</h2>
          <h5 className={classes.description}>
            Cardano pools united is a collaboration of stake pools operators
            with the goal to contribute to the Cardano ecosystem by educating
            the people about Cardano blockchain and using our developer
            knowledge to develop the tools needed to make the delegation process
            informative and painless.
            <br /> Our CPU pool will be used to pay for the cloud based relays
            and we pledged to donate the rest to the cause voted by the
            community. To make that happen help kickstart CPU pool.
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
                <a href="#"> Telegram channel.</a>,
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
              icon={FavoriteIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
