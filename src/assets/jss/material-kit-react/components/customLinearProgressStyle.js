import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
} from "assets/jss/material-kit-react.js";

const customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden",
  },
  bar: {
    height: "4px",
  },
  cardano: {
    backgroundColor: "rgba(60, 200, 200, 1)",
  },
  primary: {
    backgroundColor: primaryColor,
  },
  warning: {
    backgroundColor: warningColor,
  },
  danger: {
    backgroundColor: dangerColor,
  },
  success: {
    backgroundColor: successColor,
  },
  info: {
    backgroundColor: infoColor,
  },
  rose: {
    backgroundColor: roseColor,
  },
  gray: {
    backgroundColor: grayColor,
  },
  primaryBackground: {
    background: "rgba(156, 39, 176, 0.2)",
  },
  warningBackground: {
    background: "rgba(255, 152, 0, 0.2)",
  },
  dangerBackground: {
    background: "rgba(244, 67, 54, 0.2)",
  },
  successBackground: {
    background: "rgba(76, 175, 80, 0.2)",
  },
  infoBackground: {
    background: "rgba(0, 188, 212, 0.2)",
  },
  cardanoBackground: {
    background: "rgba(60, 200, 200, 0.2)",
  },

  roseBackground: {
    background: "rgba(233, 30, 99, 0.2)",
  },
  grayBackground: {
    background: "rgba(221, 221, 221, 0.2)",
  },
};

export default customLinearProgressStyle;
