import React from 'react' 
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Newsletter = () => {
  return (
    <div>
      <p>Subscribe to our Newsletter</p>
      <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
    </div>
  )
}

export default Newsletter
