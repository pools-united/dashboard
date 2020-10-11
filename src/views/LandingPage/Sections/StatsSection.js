import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import PropTypes from "prop-types";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styled from "styled-components";
const useStyles = makeStyles(styles);

export default function StatsSection(props) {
  const classes = useStyles();

  StatsSection.propTypes = {
    testiram: PropTypes.string,
  };

  const { testiram } = props;

  const BackgroundContainer = styled.div`
    position: absolute;
  `;
  return (
    <div className={classes.section}>
      <BackgroundContainer />
    </div>
  );
}
