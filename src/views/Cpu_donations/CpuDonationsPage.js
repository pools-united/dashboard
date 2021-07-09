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
import cpuExampleJson from './cpu.json';

import ReactPlayer from "react-player";




const timelineData = [
  {
    text: 'Started working on the app-ideas repository',
    date: 'February 25 2019',
    category: {
      tag: 'app-ideas',
      color: '#FFDB14'
    },
    link: {
      url: 'https://github.com/florinpop17/app-ideas',
      text: 'Check it out on GitHub'
    }
  },
  {
    text: 'Started the Weekly Coding Challenge program',
    date: 'March 04 2019',
    category: {
      tag: 'blog',
      color: '#e17b77'
    },
    link: {
      url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
      text: 'Check it out here'
    }
  },
  {
    text: 'Got 1.000 followers on Twitter',
    date: 'March 07 2019',
    category: {
      tag: 'twitter',
      color: '#1DA1F2'
    },
    link: {
      url: 'https://twitter.com/florinpop1705',
      text: 'See profile'
    }
  },
  {
    text:
      'I published my first article in the FreeCodeCamp Medium Publication',
    date: 'March 18 2019',
    category: {
      tag: 'medium',
      color: '#018f69'
    },
    link: {
      url:
        'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
      text: 'Check it out here'
    }
  },
  {
    text: 'Over 12.000 views in a single day on my Medium posts',
    date: 'April 05 2019',
    category: {
      tag: 'medium',
      color: '#018f69'
    },
    link: {
      url: 'https://medium.com/@popflorin1705',
      text: 'See profile'
    }
  }
]


const TimelineItem = ({ data, dateTest }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <a href={data.recipient.contact} target="_blank" className="tag" style={{ background: "#1DA1F2" }}>
        {data.recipient.name}
      </a>
      <time>{dateTest}</time>

      <p class="donated"><span class="donateTitle">Donated</span>
            ADA: {data.ada}₳<br />
            USD: {data.usd}$

            </p>
      <p class="donationDesc">The donation was made via {data.intermediate_txs[0].provider}
      <br/>    Transaction id: <br/> <a target="_blank" href={`https://blockchair.com/${data.intermediate_txs[0].provider.toLowerCase()}/transaction/${data.intermediate_txs[0].tx_id}`}>{data.intermediate_txs[0].tx_id.slice(0,11)}...</a> 
      </p> 
      <a href={`https://pools-united.github.io/Donations/${data.files[0]}`} target="_blank"><img class="donationImg" src={`https://pools-united.github.io/Donations/${data.files[0]}`}></img></a>
      
   
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>

  cpuExampleJson.length > 0 && (
    <div className="timeline-container">
      {cpuExampleJson.map((data, idx) => {
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
  );


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


export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [donationData, setDonationData] = useState();
  useEffect(() => {
    setDonationData(cpuExampleJson);
    //MIHA LOG ZA TEBE, cpuExampleJson koristi za developanje a cpuDonationsJson ssu bas nase donacije
    console.log(donationData);
  }, [donationData]);





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
          <PageTitle>Cardano Pools United Donations</PageTitle>
          {/* PRIMJER SLIKE MIHA
KAK SAM DOBIL TAJ LINK?
________________-
U json fileu ces vidjeti  (EXAMPLE JSON FILE-a i console log njegov je u useEffect-u 82 linija)
files: Array [ "CPU/16-06-2021.png" ]
0: "CPU/16-06-2021.png"
​________________

na taj string dodas samo "https://pools-united.github.io/Donations/" (primjer dole u slici)

slike su u Array-u jer mogu dodavati i pdf i vise slika i slicno (taj files value u jsonu su zapravo files koji su dokazi da smo donirali)... uzimaj samo 1. (tj 0.) stvar u array-u, to ce uvijek biti slika...


UZMES: 
1. name (nezz dal treba i adresa i kontakt, odluci ti...)
2.ada
3. USD
4. timestamp (pretvoris timestamp u datum.. lako je... mislim da cak i JS ima built in za to)
5. fotografiju iz files, 1 file u array-united
 i svaka donacija u timeline-u to mora imati.. to je to, sretno :)
*/}
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
