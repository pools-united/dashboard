import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

// @material-ui/icons
// core components
import PropTypes from "prop-types";

import statsBackground from "../../../assets/img/assetsPageCPU/cardano-ada-logo.png";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styled from "styled-components";

//other components
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

const useStyles = makeStyles(styles);

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 5px;

  background-color: rgba(0, 0, 0, 0.85);
  z-index: -1;
  display: flex;
  justify-content: flex-end;
`;

const BackgroundImage = styled.img`
  width: ${(props) => (props.scroll ? "250px" : "50px")};
  padding: ${(props) => (props.scroll ? "32px" : "10px")};
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  margin-right: ${(props) => (props.scroll ? "0px" : "20px")};
  transition: transform 0.15s width 0.4s;
`;

const EpochWrapper = styled.div`
  display: flex;
  width: max-content;
  flex-direction: row;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  width: 78%;
`;

const SectionWrapper = styled.div`
  position: ${(props) => (props.scroll ? "relative" : "fixed")};
  display: flex;
  z-index: 100;
  color: white;
  flex-direction: column;
  margin-bottom: 48px;
  padding: ${(props) => (props.scroll ? "70px 40px" : "16px 32px")};
  top: ${(props) => (props.scroll ? "0px" : "70px")};
  left: 0px;
  width: 100%;
  transition: ${(props) => (props.scroll ? "all 0.0s " : "all 0.3s ")};
`;

// EpochComponent

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.scroll ? "column" : "row")};
  margin-right: 16px;
`;
const NumberWrapper = styled.div`
  font-size: ${(props) => (props.scroll ? "20px" : "16px")};
  font-weight: 500;
`;

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: ${(props) => (props.scroll ? "24px" : "18px")};
  margin-bottom: 12px;

  ::after {
    content: "${(props) => (props.scroll ? "" : ": ")}";
    margin-right:${(props) => (props.scroll ? "0px" : "8px")};
  }
`;

const progressStyle = {
  marginTop: "20px",
};

const EpochProgressContainer = styled.div`
  /* display: flex; */
  display: ${(props) => (props.scroll ? "flex" : "none")};
  flex-direction: column;
`;
const EpochDatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const EpochDates = styled.div`
  visibility: ${(props) => (props.scroll ? "visible" : "hidden")};
`;

const EpochInfo = styled(EpochDates)`
  /* transform: scale(0.85) translateY(4px); */
`;

const StatsSection = (props) => {
  const classes = useStyles();
  const [scrollOffset, setScrollOffset] = useState(0);
  useScrollPosition(({ prevPos, currPos }) => {
    setScrollOffset(currPos.y);
    console.log(currPos.y);
  });

  StatsSection.propTypes = {
    epoch: PropTypes.string,
    curSloth: PropTypes.number,
    epochProgress: PropTypes.number,
    epochStartDate: PropTypes.string,
    epochEndDate: PropTypes.string,
  };

  const {
    epoch,
    curSloth,
    epochProgress,
    epochStartDate,
    epochEndDate,
  } = props;
  const totalSlots = 432000;

  const EpochComponent = (props) => {
    EpochComponent.propTypes = {
      title: PropTypes.string,
      number: PropTypes.any,
      epochStartDate: PropTypes.string,
      epochEndDate: PropTypes.string,
    };

    const { title, number } = props;
    return (
      <ComponentWrapper scroll={scrollOffset >= -700}>
        <TitleWrapper scroll={scrollOffset >= -700}>{title}</TitleWrapper>
        <NumberWrapper> {number}</NumberWrapper>
      </ComponentWrapper>
    );
  };

  return (
    <SectionWrapper scroll={scrollOffset >= -700} className={classes.section}>
      <TextWrapper>
        <EpochWrapper>
          <EpochComponent title="Epoch" number={epoch} />
          <EpochComponent title="Current Slot" number={curSloth} />
          <EpochComponent title="Total Slots" number={totalSlots} />
        </EpochWrapper>
        <BackgroundContainer>
          <BackgroundImage
            scroll={scrollOffset >= -700}
            rotate={scrollOffset * 0.06}
            src={statsBackground}
          />{" "}
        </BackgroundContainer>
        <EpochProgressContainer scroll={scrollOffset >= -700}>
          <CustomLinearProgress
            variant="determinate"
            color="cardano"
            value={epochProgress}
            style={progressStyle}
          />

          <EpochDatesContainer>
            <EpochDates scroll={scrollOffset >= -700}>
              {epochStartDate}
            </EpochDates>{" "}
            <EpochDates scroll={scrollOffset >= -700}>
              {epochEndDate}
            </EpochDates>
          </EpochDatesContainer>
          <EpochInfo scroll={scrollOffset >= -700}>
            GMT+0200 (Central European Summer Time)
          </EpochInfo>
        </EpochProgressContainer>
      </TextWrapper>
    </SectionWrapper>
  );
};
export default StatsSection;
