import { primaryColor, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const cardStyle = {
  ...imagesStyle,
  header: {
    display: "flex",
    justifyContent: "space-between",
    flex: "1 1 auto",
    marginTop: "32px",
    marginBottom: "24px",
  },
  headerLogo: {
    display: "flex",
    alignItems: "center",
    padding: "0px 8px",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  operatorWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "16px",
  },
  operatorPhotosWrapper: {
    display: "flex",
    padding: 0,
    flexWrap: "wrap"
  },
  operatorPhoto: {
    maxWidth: "80px",
    margin: "8px",
    padding: "2px"
  },
  operatorTitle: {
    ...title,
    display: "inline-block",
    alignItems: "center",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
  },
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    // minWidth: "380px",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    padding: "0px 24px 24px 24px",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  },
  title: {
    ...title,
    display: "flex",
    fontSize: "26px",
    padding: "0px 8px",
    margin: 0,
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
    "&:hover": {
      color: `${primaryColor} !important`
    }
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: "24px",
    paddingBottom: "24px",
  },
  statsItem: {
    display: "flex",
    fontSize: "18px",
    padding: "8px",
    fontWeight: "bold"
  },
  address: {
    fontWeight: "bold",
    textAlign: "left",
    padding: "0px 8px",
  },
  buttonDelegate: {
    margin: "8px",
    flex: "1 1 auto",
  },
  buttonDetails: {
    display: "flex",
    justifyContent: "space-around",
    margin: "8px",
    fontWeight: "bold",
    color: `${primaryColor} !important`,
    flex: "1 1 auto",
  },
  buttonWrapper: {
    paddingTop: "8px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: "1 1 auto",
  }
};

export default cardStyle;
