import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";


import DonationsStyle from "./donationsStyle"
import styled from "styled-components";
import styles from "assets/jss/material-kit-react/views/faqPage.js";

import cpuDonationsJson from '../Cpu_donations/cpu.json';




const donationTypeColors = {

  education:"#7b3c9f",
  nature:"#4b8b3b",
  animals:"#D0764C",
  community:"#a9c0c1",
  

}

const TimelineItem = ({ data, dateTest }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <a href={(data.recipient.contact.includes("@")? `mailto:${data.recipient.contact}`: data.recipient.contact)} target="_blank" className="tag" style={{ borderRadius:"8px", background: donationTypeColors[data.custom.donationType] }}>
        {data.recipient.name}
      </a>
      <time>{dateTest}</time>

      <p class="donated"><span class="donateTitle">Donated</span>
        ADA: {data.ada}₳<br />
        USD: {data.usd}$

      </p>
      <p class="donationDesc">The donation was made via {data.intermediate_txs[0].provider}
        <br />    Transaction id: <br /> <a target="_blank" href={`https://blockchair.com/${data.intermediate_txs[0].provider.toLowerCase()}/transaction/${data.intermediate_txs[0].tx_id}`}>{data.intermediate_txs[0].tx_id.slice(0, 11)}...</a>
      </p>
      <a href={`https://pools-united.github.io/Donations/${data.files[0]}`} target="_blank"><img class="donationImg" src={`https://pools-united.github.io/Donations/${data.files[0]}`}></img></a>


      <span className="circle" />
    </div>
  </div>
);

const Timeline = () => {
  let cpuDonationsReversed = [];
  for (let i = cpuDonationsJson.length - 1; i >= 0; i--) {
    cpuDonationsReversed.push(cpuDonationsJson[i]);
  }
  return (

    <div className="timeline-container">
      {cpuDonationsReversed.map((data, idx) => {
        // let date = new Date( data.timestamp * 1000);
        // var hours = date.getHours();
        // // Minutes part from the timestamp
        // var minutes = "0" + date.getMinutes();
        // // Seconds part from the timestamp
        // var seconds = "0" + date.getSeconds();
        // // var formatted_date = timestampDate.getDate() + "/" + timestampDate.getMonth() + 1 + "/" + timestampDate.getFullYear() 

        var a = new Date(data.timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();

        var time = date + ' ' + month + ' ' + year;



        return (
          <TimelineItem dateTest={time} data={data} key={idx} />
        )
      })}
    </div>
  )
}


const useStyles = makeStyles(styles);
const PageTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  padding: 32px 0;
`;

const FaqContainer = styled.div`
  padding:16px;
  padding-top: 32px;
  max-width: 1200px;
  margin: auto;
`;


export default function DonationsEmbeded(props) {
  const classes = useStyles();
  const { ...rest } = props;


  return (
    <div>
      <DonationsStyle />
  
      <Parallax
        small
        filter
        image={require("assets/poolAssets/cpu/CpuBanner.png")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SimpleAccordion /> */}
        {/* <BottomSpacer /> */}
        {/* <TitleHeading>How to delegate?</TitleHeading> */}
        <FaqContainer>
          <PageTitle>Cardano Pools United Donation Timeline</PageTitle>

          <Timeline />


        </FaqContainer>
       
      </div>
   
    </div>
  );
}
