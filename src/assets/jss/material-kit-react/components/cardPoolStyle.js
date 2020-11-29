import { primaryColor, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const card = {
  border: `0`,
  marginBottom: "30px",
  marginTop: "30px",
  borderRadius: "6px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  // minWidth: "380px",
  wordWrap: "break-word",
  fontSize: ".875rem",
  padding: "0px 24px 24px 24px",
  height: "100%",
};

const cardStyle = {
  ...imagesStyle,
  header: {
    display: "flex",
    justifyContent: "space-between",
    flex: "1 1 auto",
    marginTop: "32px",
  },
  headerLogo: {
    display: "flex",
    alignItems: "center",
    padding: "0px 8px",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  operatorWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  operatorPhotosWrapper: {
    display: "flex",
    padding: 0,
    flexWrap: "wrap",
  },
  operatorPhoto: {
    maxWidth: "80px",
    margin: "8px",
    padding: "2px",
  },
  operatorTitle: {
    ...title,
    marginTop: "30px",
    display: "inline-block",
    alignItems: "center",
    marginBottom: "1rem",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
  },
  card: { ...card },
  cardCPU: {
    ...card,
    border: `2px solid ${primaryColor}`,
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardCarousel: {
    overflow: "hidden",
  },
  title: {
    ...title,

    fontSize: "26px",
    padding: "0px 8px",
    margin: 0,
    minHeight: "78px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    textAlign: "left",
    "&:hover": {
      color: `${primaryColor} !important`,
    },
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
    fontWeight: "bold",
  },
  address: {
    marginTop: "12px",
    fontWeight: "bold",
    textAlign: "left",
    padding: "0px 8px",
  },
  buttonDelegate: {
    margin: "8px",
    flex: "1 1 auto",
    height: "50px",
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
    paddingTop: "12px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    flex: "1 1 auto",
  },
  kickstart: {
    color: "red",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "12px",
  },
};

export default cardStyle;
