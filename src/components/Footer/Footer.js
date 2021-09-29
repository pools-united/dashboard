/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/pool?id=CPU" className={classes.block}>
                [CPU]
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/pool?id=VENUS" className={classes.block}>
                [VENUS]
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/pool?id=ERA" className={classes.block}>
                [ERA]
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/pool?id=PROTO" className={classes.block}>
                [PROTO]
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/pool?id=MINES" className={classes.block}>
                [MINES]
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/pool?id=CURIE" className={classes.block}>
                [CURIE]
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/privacy-policy" className={classes.block}>
                Privacy Policy
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/cookie-policy" className={classes.block}>
                Cookie Policy
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} made by{" "}
          <a
            href="#"
            className={aClasses}
            target="_blank"
          >
            Cardano Pools United
          </a>
        </div>
        <div className={classes.left}>
          The information on this site may contain errors or mistakes, please do your own research. Unofficial Cardano website.
          Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you exchange is subject to market and other investment risks.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
