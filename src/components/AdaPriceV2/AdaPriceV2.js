import TextBox from "./Textbox";

import React, { useState } from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const ShowAdaWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
`;

const GraphBox = styled.div`
  /* background-color: ${(props) => props.textBackgroundColor}; */
  color
  margin-top: 8px;
`;

const GraphImg = styled.img`
  filter: hue-rotate(118deg);
  margin-top: 8px;
`;

const AdaPriceV2 = (props) => {
  AdaPriceV2.propTypes = {
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
      <div>
        <TextBox
          width={width}
          titleColor={titleColor}
          textBackgroundColor={textBackgroundColor}
          backgroundColor={backgroundColor}
          title={" Graph (7 days)"}
        />
        <GraphBox textBackgroundColor={titleColor}>
          <GraphImg src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg" />
        </GraphBox>
      </div>
    </ShowAdaWrapper>
  );
};

export default AdaPriceV2;
