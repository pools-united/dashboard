import React, { useState } from "react";
import styled from "styled-components";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Card from "@material-ui/core/Card";

import { InvertColors } from "@material-ui/icons";
// @material-ui/icons

import Button from "components/CustomButtons/Button.js";

// core components
import styles from "assets/jss/material-kit-react/components/cardPoolStyle.js";

const useStyles = makeStyles(styles);

const CardWrapper = styled.div`
  marginTop: 24px;
`;

export default function PoolCard(props) {
  const classes = useStyles();
  const {
    className,
    children,
    poolLink,
    delegateLink,
    name,
    address,
    margin,
    fixedFee,
    pledge,
    kickstart = false,
    isMain = false,
    operator,
    ...rest
  } = props;

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    classes.operatorPhoto
  );

  const [hover, setHover] = useState(kickstart);

  return (
    <CardWrapper>
      <Card
        className={isMain ? classes.cardCPU : classes.card}
        raised={hover}
        {...rest}
      >
        <div className={classes.header}>
          <a href={poolLink}>
            <h2 className={classes.title}>{name}</h2>
          </a>
          <div className={classes.headerLogo}>
            <InvertColors style={{ fontSize: 48 }} />
          </div>
        </div>

        <div className={classes.address}>{address}</div>

        <div className={classes.stats}>
          <div>
            <div className={classes.statsItem}>{margin}</div>
            <div>{"margin"}</div>
          </div>
          <Divider orientation="vertical" flexItem />
          <div>
            <div className={classes.statsItem}>{fixedFee}</div>
            <div>{"fee"}</div>
          </div>
          <Divider orientation="vertical" flexItem />
          <div>
            <div className={classes.statsItem}>{pledge}</div>
            <div>{"pledge"}</div>
          </div>
        </div>

        <Divider type={"middle"} />

        {/* <div className={classes.operatorWrapper}>
          <h3 className={classes.operatorTitle}>{"Operated by: "}</h3>
          <div className={classes.operatorPhotosWrapper}>
            <img
              src={operator.image}
              alt={`${operator.name}`}
              className={imageClasses}
            />
          </div>
        </div> */}

        <div className={classes.buttonWrapper}>
          <Button
            className={classes.buttonDelegate}
            color="primary"
            href={delegateLink}
            onClick={(e) => {
              e.preventDefault()
              window.location.href = delegateLink
            }}
          >
            Delegate now
          </Button>
          <Button
            className={classes.buttonDetails}
            color="transparent"
            href={poolLink}
            onClick={(e) => {
              e.preventDefault()
              window.location.href = poolLink
            }}
          >
            Details
          </Button>
        </div>
        {kickstart &&
          <div className={classes.kickstart}>
            Help kickstart this pool!
        </div>
        }
      </Card>
    </CardWrapper>
  );
}

PoolCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  name: PropTypes.string,
  address: PropTypes.string,
  margin: PropTypes.string,
  fixedFee: PropTypes.string,
  pledge: PropTypes.string,

  poolLink: PropTypes.string,
  delegateLink: PropTypes.string,

  kickstart: PropTypes.bool,
  isMain: PropTypes.bool,

  operator: PropTypes.objectOf({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};
