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
  border-radius: 6px;

  background-color: #393a3b;
  z-index: -1;
  display: flex;
  justify-content: flex-end;
`;

const BackgroundImage = styled.img`
  width: 250px;
  padding: 20px;
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  transition: 0.15s;
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
  position: relative;
  display: flex;
  z-index: 100;
  flex-direction: column;
  margin-bottom: 48px;
  padding: 70px 40px;
`;

// EpochComponent

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`;
const NumberWrapper = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 12px;
`;

const progressStyle = {
  marginTop: "20px",
};

const EpochProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const EpochDatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const EpochDates = styled.div``;

const StatsSection = (props) => {
  const classes = useStyles();
  const [scrollOffset, setScrollOffset] = useState();
  useScrollPosition(({ prevPos, currPos }) => {
    setScrollOffset(currPos.y);
  });

  StatsSection.propTypes = {
    epoch: PropTypes.string,
    curSloth: PropTypes.number,
    epochProgress: PropTypes.number,
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
      <ComponentWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <NumberWrapper> {number}</NumberWrapper>
      </ComponentWrapper>
    );
  };

  return (
    <SectionWrapper className={classes.section}>
      <TextWrapper>
        <EpochWrapper>
          <EpochComponent title="Epoch" number={epoch} />
          <EpochComponent title="Current Slot&nbsp;/" number={curSloth} />
          <EpochComponent title="Total Slots" number={totalSlots} />
        </EpochWrapper>
        <BackgroundContainer>
          <BackgroundImage rotate={scrollOffset * 0.06} src={statsBackground} />{" "}
        </BackgroundContainer>
        <EpochProgressContainer>
          <CustomLinearProgress
            variant="determinate"
            color="cardanoBackground"
            value={epochProgress}
            style={progressStyle}
          />

          <EpochDatesContainer>
            <EpochDates>{epochStartDate}</EpochDates>{" "}
            <EpochDates>{epochEndDate}</EpochDates>
          </EpochDatesContainer>
        </EpochProgressContainer>
      </TextWrapper>
    </SectionWrapper>
  );
};
export default StatsSection;
