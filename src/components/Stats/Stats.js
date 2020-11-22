import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styled from "styled-components";
import AppContext from "Context/Context";
import Drawer from '@material-ui/core/Drawer';
import Button from "components/CustomButtons/Button.js";

import AdaPrice from "components/AdaPrice/AdaPrice.js";

//other components
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

const useStyles = makeStyles(styles);

const EpochWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 90%;
`;

const SectionWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  color: white;
  padding: 40px 8px;
  background-color: rgba(0, 0, 0, 0.85);
  align-items: center;
`;

// EpochComponent

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

const NumberWrapper = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 22px;
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

const Stats = (props) => {
  const classes = useStyles();

  const totalSlots = 432000;

  const [stats, setStats] = useState(false);
  const [currentSlot, setCurrentSlot] = useState(undefined);
  const [epochStartDate, setEpochStartDate] = useState("");
  const [epochEndDate, setEpochEndDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      currentSlot && setCurrentSlot((currentSlot) => currentSlot + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSlot]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setStats(open);
  };

  const EpochComponent = (props) => {
    EpochComponent.propTypes = {
      title: PropTypes.string,
      number: PropTypes.any,
      epochStartDate: PropTypes.string,
      setEpochEndingDate: PropTypes.string,
    };

    const { title, number } = props;
    return (
      <AppContext.Consumer>
        {(context) => {
          return (
            <ComponentWrapper>
              <TitleWrapper>
                {title}
              </TitleWrapper>
              <NumberWrapper> {number}</NumberWrapper>
            </ComponentWrapper>
          );
        }}
      </AppContext.Consumer>
    );
  };

  return (
    <AppContext.Consumer>
      {(context) => {
        if (!currentSlot) {
          setCurrentSlot(parseInt(context.globalStats.epoch_slot_no));
        } else if (currentSlot && !epochStartDate) {
          setEpochStartDate(
            new Date(parseInt(context.globalStats.epoch_started * 1000)).toDateString()
          );
          setEpochEndDate(
            new Date((Date.now() / 1000 + (totalSlots - currentSlot)) * 1000).toDateString()
          );
        }

        return (
          <React.Fragment key={stats}>
            <Button color="danger" onClick={toggleDrawer(true)}>{"VIEW EPOCH"}</Button>
            <Drawer anchor={'top'} open={stats} onClose={toggleDrawer(false)}>
              <SectionWrapper className={classes.section}>
                <TextWrapper>
                  <EpochWrapper>
                    <EpochComponent title="Epoch" number={context.globalStats.epoch_last} />
                    <EpochComponent title="Current Slot" number={currentSlot} />
                    <EpochComponent title="Total Slots" number={totalSlots} />
                  </EpochWrapper>
                  <EpochProgressContainer >
                    <CustomLinearProgress
                      variant="determinate"
                      color="cardano"
                      value={(currentSlot / totalSlots) * 100}
                      style={progressStyle}
                    />
                    <EpochDatesContainer>
                      <div>{epochStartDate}</div>
                      <div>{epochEndDate}</div>
                    </EpochDatesContainer>
                    <div>
                      {/* GMT+0200 (Central European Summer Time) */}
                    </div>
                  </EpochProgressContainer>
                </TextWrapper>
                {/* <AdaPrice
                  titleColor={"rgb(255,255,255)"}
                  textBackgroundColor={"rgba(255, 0, 0, 0);"}
                  backgroundColor={"rgba(255, 0, 0, 0);"}
                  title={"Pledge"}
                  width="180px"
                  text={`${
                    context.adaPrice.RAW &&
                    context.adaPrice.RAW.ADA.USD.PRICE.toFixed(4)
                  } USD `}
                /> */}
              </SectionWrapper>
            </Drawer>
          </React.Fragment>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Stats;