import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const BoxWrapper = styled.div`
  width: ${(props) => props.width};
`;

const BoxTitle = styled.h3`
  padding: 2px 12px;
  text-align: center;
  color: ${(props) => props.titleColor && "black" };
  background-color: ${(props) => props.backgroundColor && "white" };
  margin: unset;
  font-weight: 500;
  font-size: 18px;
`;

const BoxText = styled.div`
  color: ${(props) => props.textBackgroundColor } ;
  padding: 16px;
  text-align: center;
  background-color: "white";
  font-weight: 400;
  font-size: 18px;
  border: 2px solid #D8D8D8;
  border-radius: 10px;
  height: ${(props) => (props.heightBox ? "100%" : "50px")};
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = (props) => {
  TextBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.any,
    titleColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    textBackgroundColor: PropTypes.string,
    width: PropTypes.string,
    heightBox: PropTypes.string,
  };
  const {
    title,
    text,
    titleColor,
    backgroundColor,
    textBackgroundColor,
    width,
    heightBox,
  } = props;

  return (
    <BoxWrapper width={width}>
      <BoxTitle backgroundColor={backgroundColor} titleColor={titleColor}>
        {title}
      </BoxTitle>
      <BoxText heightBox={heightBox} textBackgroundColor={textBackgroundColor}>
        {text}
      </BoxText>
    </BoxWrapper>
  );
};

export default TextBox;
