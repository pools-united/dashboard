import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"


import { createGlobalStyle } from 'styled-components';

const NewsLetterStyle = createGlobalStyle`

.wrapper-newsletter{

  display:flex;
  display: flex;
  flex-direction: column;
  align-items: center;
margin-bottom:32px;
margin-top:-8px;
}

button
{

box-shadow: 0 2px 2px 0 rgba(68, 162, 157, 0.15), 0 3px 1px -2px rgba(68, 162, 157, 0.3), 0 1px 5px 0 rgba(68, 162, 157, 0.3);
background-color: #074459;
text-transform: uppercase;
color: #FFFFFF;
border: none;
cursor: pointer;
padding: 12px 30px;
position: relative;
font-size: 16px;
min-width: auto;
box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);
min-height: auto;
text-align: center;
transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
font-weight: 400;
margin-top:8px;
line-height: 1.42857143;
white-space: nowrap;
border-radius:6px;

}

.subscribeParagraph{
  color: #3C4858;

    margin-top: 0;
    
margin-top: 30px;
min-height: 32px;
font-family: "Roboto Slab", "Times New Roman", serif;
font-weight: 700;
margin-bottom: 16px;
text-decoration: none;
font-size:2rem;
}

input[type=email]{

  border-radius:6px;
  text-indent: 8px;
  min-height:48px;

}

.subscribeParagraph + div{

  width:100%;
  display:flex;
  flex-direction:column;
}



`

const Newsletter = () => {
  return (<>
    <NewsLetterStyle />
    <div class="wrapper-newsletter">
      <p class="subscribeParagraph">Subscribe to our Newsletter</p>
      <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
    </div>
    </>
  )
}

export default Newsletter
