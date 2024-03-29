import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styled, {createGlobalStyle} from "styled-components";
import styles from "assets/jss/material-kit-react/views/faqPage.js";

const useStyles = makeStyles(styles);

const CookieStyle = createGlobalStyle`

p, li{ text-align: left;
  font-size:14px;}
`;

const PageTitle = styled.div`
  font-size: 52px;
  font-weight: 500;
  text-align: center;
  line-height: normal;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 32px;
  }
  padding: 32px 0;
  transform: translateY(-250px);
  color: white;
}
`;

const FaqContainer = styled.div`
  padding: 16px;
  padding-top: 32px;
  max-width: 728px;
  margin: auto;
`;

const DescriptionText = styled.div`
  margin-top: 16px;
`;

export default function CookiePolicy(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <CookieStyle/>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/poolAssets/cpu/CpuBanner.png")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <FaqContainer>
          <PageTitle>Cookie Policy for Cardano Pools United</PageTitle>

          <DescriptionText>
            <p>
              <strong>What Are Cookies</strong>
            </p>
            <p>
              As is common practice with almost all professional websites this
              site uses cookies, which are tiny files that are downloaded to
              your computer, to improve your experience. This page describes
              what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can
              prevent these cookies from being stored however this may downgrade
              or 'break' certain elements of the sites functionality.
            </p>
            <p>
              <strong>How We Use Cookies</strong>
            </p>
            <p>
              We use cookies for a variety of reasons detailed below.
              Unfortunately in most cases there are no industry standard options
              for disabling cookies without completely disabling the
              functionality and features they add to this site. It is
              recommended that you leave on all cookies if you are not sure
              whether you need them or not in case they are used to provide a
              service that you use.
            </p>
            <p>
              <strong>Disabling Cookies</strong>
            </p>
            <p>
              You can prevent the setting of cookies by adjusting the settings
              on your browser (see your browser Help for how to do this). Be
              aware that disabling cookies will affect the functionality of this
              and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and
              features of the this site. Therefore it is recommended that you do
              not disable cookies. This Cookies Policy was created with the help
              of the Cookies Policy Generator from {" "}
              <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">
               CookiePolicyGenerator.com
              </a>
              .
            </p>
            <p>
              <strong>The Cookies We Set</strong>
            </p>
            <ul>
              <li>
                <p>Email newsletters related cookies</p>
                <p>
                  This site offers newsletter or email subscription services and
                  cookies may be used to remember if you are already registered
                  and whether to show certain notifications which might only be
                  valid to subscribed/unsubscribed users.
                </p>
              </li>

              <li>
                <p>Site preferences cookies</p>
              </li>
            </ul>

            <p>
              <strong>Third Party Cookies</strong>
            </p>

            <p>
              In some special cases we also use cookies provided by trusted
              third parties. The following section details which third party
              cookies you might encounter through this site.
            </p>

            <ul>
              <li>
                <p>
                  This site uses Google Analytics which is one of the most
                  widespread and trusted analytics solution on the web for
                  helping us to understand how you use the site and ways that we
                  can improve your experience. These cookies may track things
                  such as how long you spend on the site and the pages that you
                  visit so we can continue to produce engaging content.
                </p>
                <p>
                  For more information on Google Analytics cookies, see the
                  official Google Analytics page.
                </p>
              </li>
            </ul>

            <p>
              <strong>More Information</strong>
            </p>

            <p>
              Hopefully that has clarified things for you and as was previously
              mentioned if there is something that you aren't sure whether you
              need or not it's usually safer to leave cookies enabled in case it
              does interact with one of the features you use on our site.
            </p>

            <p>
              For more general information on cookies, please read{" "}
              <a href="https://www.generateprivacypolicy.com/#cookies">
                "Cookies" article from the Privacy Policy Generator
              </a>
              .
            </p>

            <p>
              However if you are still looking for more information then you can
              contact us through one of our preferred contact methods:
            </p>

            <ul>
              <p>Email: <a href="mailto:cpoolsunited@gmail.com"> cpoolsunited@gmail.com</a>  <br/>
             Telegram: <a href="https://t.me/cpoolsunited"> cpoolsunited</a> <br/>
              Twitter: <a href="https://twitter.com/C_PoolsUnited"> C_PoolsUnited</a> </p>
            </ul>
          </DescriptionText>

          <br />
        </FaqContainer>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
