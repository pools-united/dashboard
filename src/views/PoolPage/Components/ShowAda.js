import TextBox from "./Textbox";

import React, { useState } from "react";

import AdaSymbol from "../../../assets/img/adaSymbol.png";

import styled from "styled-components";
import PropTypes from "prop-types";

const ShowAdaWrapper = styled.div`
  position: fixed;
  top: 120px;
  left: 0px;
  transition: 0.3s all;
  z-index: 10000;
  transform: translateX(${(props) => (props.adaShown ? "0px" : "-180px")});
`;

const GraphTitle = styled.h3`
  padding: 2px 12px;
  text-align: center;
  color: ${(props) => props.titleColor};
  background-color: ${(props) => props.backgroundColor};
  margin: unset;
  font-weight: 500;
  font-size: 22px;
`;

const GraphBox = styled.div`
  background-color: ${(props) => props.textBackgroundColor};

  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GraphImg = styled.img`
  padding-top: 7px;
  filter: brightness(0);
`;

const AdaButton = styled.img`
  transition: 0.3s all;
  position: absolute;
  top: 0;
  cursor: pointer;
  left: 180px;
  width: 48px;
  border-radius: 44px;
  height: 48px;

  filter: ${(props) =>
    props.adaShown && `drop-shadow(0px 0px 4px ${props.textBackgroundColor})`};

  /* filter: drop-shadow(0px 0px 4px blue); */

  background-color: ${(props) => props.backgroundColor};
`;

const ShowAda = (props) => {
  ShowAda.propTypes = {
    text: PropTypes.any,
    titleColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    textBackgroundColor: PropTypes.string,
    width: PropTypes.string,

    heightBox: PropTypes.string,
  };
  const {
    text,
    titleColor,
    backgroundColor,
    textBackgroundColor,
    width,
  } = props;

  const [adaShown, setAdaShown] = useState(false);

  return (
    <ShowAdaWrapper adaShown={adaShown}>
      <TextBox
        width={width}
        titleColor={titleColor}
        textBackgroundColor={textBackgroundColor}
        backgroundColor={backgroundColor}
        title={"Current Price"}
        text={text}
      />
      <GraphTitle titleColor={titleColor} backgroundColor={backgroundColor}>
        Graph (7 days)
      </GraphTitle>
      <GraphBox textBackgroundColor={titleColor}>
        <GraphImg src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/2010.png" />
      </GraphBox>
      <AdaButton
        textBackgroundColor={titleColor}
        adaShown={adaShown}
        onClick={() => {
          setAdaShown(!adaShown);
        }}
        backgroundColor={textBackgroundColor}
        src={AdaSymbol}
      />
    </ShowAdaWrapper>
  );
};

export default ShowAda;
