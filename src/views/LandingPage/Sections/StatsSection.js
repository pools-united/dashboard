import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import PropTypes from "prop-types";

import statsBackground from "../../../assets/img/assetsPageCPU/cardano-ada-logo.png";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styled from "styled-components";
const useStyles = makeStyles(styles);

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.8;
  left: 0;
  width: 100%;
  border-radius: 6px;
  filter: grayscale(0.5);
  background-color: #393a3b;
  z-index: -1;
  display: flex;
  justify-content: flex-end;
`;

const BackgroundImage = styled.img`
  width: 250px;
  padding:20px;
`;

const EpochWrapper = styled.div`
  display: flex;
  width: max-content;
  flex-direction: row;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  width: 100%;
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

const StatsSection = (props) => {
  const classes = useStyles();

  StatsSection.propTypes = {
    epoch: PropTypes.string,
    curSloth: PropTypes.string,
  };

  const { epoch, curSloth } = props;
  const totalSlots = 432000;

  const EpochComponent = (props) => {
    EpochComponent.propTypes = {
      title: PropTypes.string,
      number: PropTypes.any,
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
          <BackgroundImage src={statsBackground} />{" "}
        </BackgroundContainer>
      </TextWrapper>
    </SectionWrapper>
  );
};
export default StatsSection;
