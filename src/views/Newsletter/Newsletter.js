import React, {useEffect} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import styled from "styled-components";
import cancel from "../../assets/img/misc/cancel_shrinked.png"


const CancelButton = styled.img`
position: absolute;
top: 12px;
right: 12px;
width:32px;
height:32px;

@media (max-width: 600px) {
width:24px;
height:24px;
bottom:20px;
right:20px;
top:unset;
}
`

const Form = styled.form`
padding:20px 0;
color: white !important;
display:flex;
flex-direction:column;
`

const H3Styled = styled.h3`

text-align: center;
`

const InputStyled = styled.input`
padding: 4px;
background: unset;
margin: 10px 12px;
text-align: center;
color: white;
border-radius: 24px;
border: solid 2px;
`

const SubmitButton = styled.button`
width: 34%;
align-self: center;
height: 33px;
margin-top: 14px;
background-color: #074459;
color: white;
border-radius: 24px;
border: 0px;
font-size: 16px;
font-weight: 600;
}
`

const InputContainer = styled.div`
display:flex;


@media (max-width: 600px) {
  flex-direction: column;
}
`
const CustomForm = ({ status, message, onValidated, onClose, reject }) => {

    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('This is not a valid email'),
    });

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        if(status === "success") {
            localStorage.setItem('subscribed', true);
            localStorage.setItem('rejected_sub', false);
            setTimeout(() => {
                onClose()
            }, 2000);
        }
    }, [status])

    const onSubmit = (data) => {
    onValidated({
      EMAIL: data.email,
      MERGE1: data.firstName,
      MERGE2: data.lastName,
    });
    }

  return (
      <Form className=""
            onSubmit={handleSubmit(onSubmit)}>
        <H3Styled className="">
          {status === "success"
            ? "Success!"
            : "Join our email list for future updates."
        }</H3Styled>

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


        <InputContainer className="">
          <InputStyled
              placeholder="First Name"
              type="text"
              {...register('firstName')}
          />
            <p>{errors.firstName?.message}</p>


          <InputStyled
              placeholder="Last Name"
              type="text"
              {...register('lastName')}
          />
            <p>{errors.lastName?.message}</p>

          <InputStyled
              placeholder="Email"
              noValidate="novalidate"
              type="email"
              {...register('email')}
          />
            <p>{errors.email?.message}</p>

        </InputContainer>

        <SubmitButton
            label="Subscribe"
            type="submit"
        >Submit</SubmitButton>
          <CancelButton src={cancel}
            label="Cancel"
            onClick={() => {
                onClose()
                reject()
            }}
        />
      </Form>
  );
};

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
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '50'
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
                  reject={props.reject}
              />
          )}
      />
    </div>
  
  )
}

export default Newsletter
