import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const BoxWrapper = styled.div``;

const BoxTitle = styled.div``;

const BoxText = styled.div``;

const TextBox = (props) => {
  TextBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
  };
  const { title, text } = props;

  return (
    <BoxWrapper>
      <BoxTitle>{title}</BoxTitle>
      <BoxText>{text}</BoxText>
    </BoxWrapper>
  );
};

export default TextBox;
