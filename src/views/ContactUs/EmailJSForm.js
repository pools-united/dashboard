import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import styled from "styled-components";

// import './ContactUs.css';
require('dotenv').config();

const MsgSent = styled.div`
opacity:${(props) => props.sent === "sent" ? "1" : "0"};
transition: 0.5s all;
margin-top:16px;
`

const MsgError = styled.div`
opacity:${(props) => props.sent === "error" ? "1" : "0"};
transition: 0.5s all;
margin-top:16px;
`

export default function ContactUs() {
    const [emailSentStatus, setEmailSentStatus] = useState("");

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_kk6x27q', e.target, process.env.REACT_APP_USER_KEY)
            .then((result) => {
                console.log(result.text);

                setEmailSentStatus("sent")
                setTimeout(async () => {
                    setEmailSentStatus("")

                }, 2000);

            }, (error) => {
                console.log(error.text);
                setEmailSentStatus("error")
                setTimeout(async () => {
                    setEmailSentStatus("")
                }, 2000);

            });
        e.target.reset();
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                            <MsgSent sent={emailSentStatus}>Your message has been sent</MsgSent>
                            <MsgError sent={emailSentStatus}>There has been an error sending your message</MsgError>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}