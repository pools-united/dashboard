import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';

import { InvertColors } from "@material-ui/icons";
// @material-ui/icons

import Button from "components/CustomButtons/Button.js";

// core components
import styles from "assets/jss/material-kit-react/components/cardPoolStyle.js";

const useStyles = makeStyles(styles);

export default function PoolCard(props) {
  const classes = useStyles();
  const { className, children, plain, carousel,
    name, address, margin, fixedFee, pledge, operator, ...rest } = props;

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    classes.operatorPhoto,
  );

  return (
    <div
      className={classes.card}
      {...rest}
    >
      <div className={classes.header}>
        <a href="#">
          <h2 className={classes.title}>{name}</h2>
        </a>
        <div className={classes.headerLogo}>
          <InvertColors style={{ fontSize: 48 }} />
        </div>
      </div>

      <div className={classes.address}>{address}</div>

      <div className={classes.stats}>
        {/* <Divider orientation="vertical" flexItem classname={classes.statsVerticalDivider} /> */}
        <div >
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
          <img src={operator.image} alt={`${operator.name}`} className={imageClasses} />
        </div>
      </div>

      <div className={classes.buttonWrapper}>
        <Button className={classes.buttonDelegate} color="primary" href="#" onClick={e => e.preventDefault()}>Delegate now</Button>
        <Button className={classes.buttonDetails} color="transparent" href="#" onClick={e => e.preventDefault()}>Details</Button>
      </div>
    </div >
  );
}

PoolCard.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node,

  name: PropTypes.string,
  address: PropTypes.string,
  margin: PropTypes.string,
  fixedFee: PropTypes.string,
  pledge: PropTypes.string,

  operator: PropTypes.objectOf({
    name: PropTypes.string,
    image: PropTypes.string,
  })
};

