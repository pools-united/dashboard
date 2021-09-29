import React from "react";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import EmailJSForm from "./EmailJSForm";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/faqPage.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";






const PageTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  padding: 32px 0;
`;
const ParagraphStyled = styled.p`
text-align: center;
`


const useStyles = makeStyles(styles);

export default function ContactUs(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/poolAssets/cpu/CpuBanner.png")}
      />
      <div style={{paddingTop: "18px"}} className={classNames(classes.main, classes.mainRaised)}>
      <PageTitle>Got a question?</PageTitle>
      <EmailJSForm />

      <ParagraphStyled>Email: <a href="mailto:cpoolsunited@gmail.com"> cpoolsunited@gmail.com</a>  <br/>
             Telegram: <a href="https://t.me/cpoolsunited"> cpoolsunited</a> <br/>
              Twitter: <a href="https://twitter.com/C_PoolsUnited"> C_PoolsUnited</a> </ParagraphStyled>
              <br/><br/>
      <Footer />
    </div>
    </div>
  );
}
