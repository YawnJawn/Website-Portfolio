import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ozi7jkw', 'template_nt2v5et', form.current, {
            publicKey: 'oJAJyYKOMbBr8CmFz',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              document.getElementById("form").reset();
              alert('Message has been sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactPage'>
        <div id="contact"> 
            <h1 className='contactPageTitle'>
                Contact Me
            </h1>
            <span className='contactPageDescription'>Please fill out the form to reach out to me</span>
        </div>
        <form id='form' className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name'></input>
            <input type='email' className='email' placeholder='Your Email' name='from_email'></input>
            <textarea className='message' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={FacebookIcon} alt='facebook' className='link'></img>
                <img src={InstagramIcon} alt='instagram' className='link'></img>
            </div>
        </form>
    </section>
  )
}

export default Contact
