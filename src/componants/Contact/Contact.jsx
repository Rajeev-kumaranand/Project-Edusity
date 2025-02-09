import React, { useState } from 'react'
import './Contact.css'
import Msg_icon from '../../assets/msg-icon.png'
import Mail_icon from '../../assets/mail-icon.png'
import Phone_icon from '../../assets/phone-icon.png'
import Location_icon from '../../assets/location-icon.png'
import White_arrow from '../../assets/White-arrow.png'

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "deaa8ca7-092b-449d-8a5b-dd7ebff55c69");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact_boss' >
      <div className="contact">
        <h1 className='flex text-2xl ' >Send us a message <img src={Msg_icon} alt="" /> </h1>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <p> <img src={Mail_icon} alt="" /> Contact@GreatStack.dev</p>
        <p> <img src={Phone_icon} alt="" /> +1 123-456-7890</p>
        <p> <img src={Location_icon} alt="" /> 77 Massachusetts Ave, Cambridge
        MA 02139, United States</p>
      </div>
      <div className="contact_col">
        <form onSubmit={onSubmit} >
        <label>Your name</label>
        <input type="text" placeholder='Enter your name' name='name' required />
        <label>Phone Number</label>
        <input type="tel" name="Phone" placeholder='Enter your Phone no.' required  />
        <label>Your Email</label>
        <input type="text" name='email' placeholder='Enter your email id' required />
        <label>Write your messages here</label>
        <textarea name="massage" placeholder='Enter your massage' rows="6" required></textarea>
        <button type='submit' className='campus_btn flex' >Submit now <img className='w-4 self-center  ml-2' src={White_arrow} alt="" />  </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
