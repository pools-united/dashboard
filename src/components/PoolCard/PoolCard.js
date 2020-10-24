import React, { useState } from "react";
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

export default function PoolCard(props) {
  const classes = useStyles();
  const {
    className,
    children,
    poolLink,
    detailsLink,
    delegateLink,
    name,
    address,
    margin,
    fixedFee,
    pledge,
    operator,
    ...rest
  } = props;

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    classes.operatorPhoto
  );

  const [hover, setHover] = useState(false);
  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  return (
    <Card
      className={classes.card}
      raised={hover}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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

      <div className={classes.operatorWrapper}>
        <h3 className={classes.operatorTitle}>{"Operated by: "}</h3>
        <div className={classes.operatorPhotosWrapper}>
          <img
            src={operator.image}
            alt={`${operator.name}`}
            className={imageClasses}
          />
        </div>
      </div>

      <div className={classes.buttonWrapper}>
        <Button
          className={classes.buttonDelegate}
          color="primary"
          href={delegateLink}
          onClick={(e) => e.preventDefault()}
        >
          Delegate now
        </Button>
        <Button
          className={classes.buttonDetails}
          color="transparent"
          href={detailsLink}
          onClick={(e) => e.preventDefault()}
        >
          Details
        </Button>
      </div>
    </Card>
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
  detailslLink: PropTypes.string,

  operator: PropTypes.objectOf({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};
