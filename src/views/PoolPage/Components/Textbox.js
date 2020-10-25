import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const BoxWrapper = styled.div``;

const BoxTitle = styled.h3`
  padding: 2px 12px;
  text-align: center;
  color: ${(props) => props.titleColor};
  background-color: ${(props) => props.backgroundColor};
  margin: unset;
  font-weight: 500;
  font-size:22px;
`;

const BoxText = styled.div`
  color: black;
  padding: 16px;
  text-align: center;
  background-color: ${(props) => props.textBackgroundColor};
  font-weight: 400;
  font-size: 18px;
  height: 50px;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = (props) => {
  TextBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    titleColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    textBackgroundColor: PropTypes.string,
  };
  const {
    title,
    text,
    titleColor,
    backgroundColor,
    textBackgroundColor,
  } = props;

  return (
    <BoxWrapper>
      <BoxTitle backgroundColor={backgroundColor} titleColor={titleColor}>
        {title}
      </BoxTitle>
      <BoxText textBackgroundColor={textBackgroundColor}>{text}</BoxText>
    </BoxWrapper>
  );
};

export default TextBox;
