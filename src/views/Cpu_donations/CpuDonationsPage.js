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

//ZA FILIPA REMINDER: installiral si si yaml2json cli i s komandom yaml2json cpu.yaml > cpu.json updateas json file! 
// import cpuDonationsJson from './cpu.json';
import cpuDonationsJson from './cpu.json';
import { CenterFocusStrong } from "@material-ui/icons";


const donationTypeColors = {

  education: "#7b3c9f",
  nature: "#4b8b3b",
  animals: "#D0764C",
  community: "#a9c0c1",


}



const TimelineItem = ({ data, date }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <a href={(data.recipient.contact.includes("@") ? `mailto:${data.recipient.contact}` : data.recipient.contact)} target="_blank" className="timeline-tag-wrapper" style={{  alignItems:"center", display:"flex", justifyContent:"center", borderRadius: "8px", textAlign: "center", width: "calc(100%)", background: donationTypeColors[data.custom.donationType] }}>
      <div  className="tag" style={{  padding:"8px", textAlign: "center" }}>
        {data.recipient.name}
      </div>
      </a>
      <p class="donated">
        ADA: {data.ada}₳<br />
        USD: {data.usd}$

      </p>
      <p class="donationDesc">The donation was made via {data.intermediate_txs[0].provider}
        <br />    Transaction id: <br /> <a target="_blank" href={`https://blockchair.com/${data.intermediate_txs[0].provider.toLowerCase()}/transaction/${data.intermediate_txs[0].tx_id}`}>{data.intermediate_txs[0].tx_id.slice(0, 11)}...</a>
      </p>
      <a href={`https://pools-united.github.io/Donations/${data.files[0]}`} target="_blank"><img class="donationImg" src={`https://pools-united.github.io/Donations/${data.files[0]}`}></img></a>

      <div class="donateWrapper">
        <time style={{ fontSize:"24px", color: donationTypeColors[data.custom.donationType] }} class="donateDate">{date}</time>
        <span className="donateTitle"> Donated</span></div>
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
          <TimelineItem date={time} data={data} key={idx} />
        )
      })}
    </div>
  )
}


const useStyles = makeStyles(styles);
const PageTitle = styled.div`
  font-size: 52px;
  font-weight: 500;
  text-align: center;
  
  text-transform: uppercase;
  @media (max-width: 900px) {
    font-size: 32px;
  }
  padding: 32px 0;
  transform: translateY(-200px);
  color: white;
}
`;

const DonationsMade = styled.div`
font-weight: 500;
text-align: center;
margin: -60px 0 0 0;
font-size:36px;
padding top: 0px;
`

const FaqContainer = styled.div`
  padding:16px;
  padding-top: 32px;
  max-width: 1200px;
  margin: auto;
`;


export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;


  return (
    <div>
      <DonationsStyle />
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
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
          <PageTitle>Donation Timeline </PageTitle>
          <DonationsMade> Donations made: {cpuDonationsJson.length}</DonationsMade>
          <Timeline />


        </FaqContainer>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
