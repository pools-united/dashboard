import React, {useState, useEffect} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"


// import { createGlobalStyle } from 'styled-components';
//
// const NewsLetterStyle = createGlobalStyle`
//
// .wrapper-newsletter{
//
//   display:flex;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// margin-bottom:32px;
// margin-top:-8px;
// }
//
// input[type=email] + button
// {
//
// box-shadow: 0 2px 2px 0 rgba(68, 162, 157, 0.15), 0 3px 1px -2px rgba(68, 162, 157, 0.3), 0 1px 5px 0 rgba(68, 162, 157, 0.3);
// background-color: #074459;
// text-transform: uppercase;
// color: #FFFFFF;
// border: none;
// cursor: pointer;
// padding: 12px 30px;
// position: relative;
// font-size: 16px;
// min-width: auto;
// box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);
// min-height: auto;
// text-align: center;
// transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
// font-weight: 400;
// margin-top:8px;
// line-height: 1.42857143;
// white-space: nowrap;
// border-radius:6px;
//
// }
//
// .subscribeParagraph{
//   color: #3C4858;
//
//     margin-top: 0;
//
// margin-top: 30px;
// min-height: 32px;
// font-family: "Roboto Slab", "Times New Roman", serif;
// font-weight: 700;
// margin-bottom: 16px;
// text-decoration: none;
// font-size:2rem;
// }
//
// input[type=email]{
//
//   border-radius:6px;
//   text-indent: 8px;
//   min-height:48px;
//
// }
//
// .subscribeParagraph + div{
//
//   width:100%;
//   display:flex;
//   flex-direction:column;
// }
//
//
//
// `



const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email,
      MERGE1: firstName,
      MERGE2: lastName,
    });
  }


  return (
      <form className=""
            onSubmit={(e) => handleSubmit(e)}>
        <h3 className="">
          {status === "success"
            ? "Success!"
            : "Join our email list for future updates."
        }</h3>

        {status === "sending" && (
            <div className="">
              sending...
            </div>
        )}
        {status === "error" && (
            <div
                className=""
                dangerouslySetInnerHTML={{ __html: message }}
            />
        )}
        {status === "success" && (
            <div
                className=""
                dangerouslySetInnerHTML={{ __html: message }}
            />
        )}

        <div className="">
          <input
              label="First Name"
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              value={firstName}
              placeholder="First name"
          />

          <input
              label="Last Name"
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              value={lastName}
              placeholder="Last name"
          />

          <input
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              value={email}
              placeholder="your@email.com"
          />

        </div>

        <button
            label="subscribe"
            type="submit"
        >Submit</button>
      </form>
  );
};

//TODO MIHA
const Newsletter = (props) => {
  return (
    <div >
      <p >Subscribe to our Newsletter</p>
      <MailchimpSubscribe
          url={"https://cpoolsunited.us1.list-manage.com/subscribe/post?u=d80a6235cdb29d8c8281bc4c4&amp;id=3a338bf6de"}
          render={({ subscribe, status, message }) => (
              <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
              />
          )}
      />
    </div>
  
  )
}

export default Newsletter
