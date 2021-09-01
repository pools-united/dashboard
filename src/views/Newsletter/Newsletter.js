import React, {useEffect} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


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



const CustomForm = ({ status, message, onValidated, onClose }) => {

    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('This is not a valid email'),
    });

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        if(status === "success") setTimeout(() => {
            onClose()
        }, 2000);;
    }, [status])

    const onSubmit = (data) => {
    onValidated({
      EMAIL: data.email,
      MERGE1: data.firstName,
      MERGE2: data.lastName,
    });
    }

    console.log(errors.email)

  return (
      <form className=""
            onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="First Name"
              type="text"
              {...register('firstName')}
          />
            <p>{errors.firstName?.message}</p>

          <input
              placeholder="Last Name"
              type="text"
              {...register('lastName')}
          />
            <p>{errors.lastName?.message}</p>

          <input
              noValidate="novalidate"
              placeholder="Email"
              type="email"
              {...register('email')}
          />
            <p>{errors.email?.message}</p>

        </div>

        <button
            label="Subscribe"
            type="submit"
        >Submit</button>
          <button
            label="Cancel"
            onClick={onClose}
        >Cancel</button>
      </form>
  );
};

//TODO MIHA
const Newsletter = (props) => {
    if (!props.show) {
        return null
    }

    const modalStyle = {
        position: 'fixed',
        left: '0',
        right: '0',
        to: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    }

  return (
    <div style={modalStyle} >
      <MailchimpSubscribe
          url={"https://cpoolsunited.us1.list-manage.com/subscribe/post?u=d80a6235cdb29d8c8281bc4c4&amp;id=3a338bf6de"}
          render={({ subscribe, status, message }) => (
              <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                  onClose={props.onClose}
              />
          )}
      />
    </div>
  
  )
}

export default Newsletter
