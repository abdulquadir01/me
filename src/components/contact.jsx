import React, {useRef} from 'react';

import emailjs from '@emailjs/browser';

import {MdOutlineEmail} from 'react-icons/md';
import {SiLinkedin} from 'react-icons/si';
import {BsWhatsapp} from 'react-icons/bs';

import '../styles/contact.css';




export const Contact = () => {

    const formData = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1q005wm', 'template_wga530o', formData.current, 'i7_2Wya38wbTmY9IF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    


    return (
        <section id="contact">
            <h2>Drop a message</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <a href="mailto:abdulquadir01@outlook.com" target="_blank" rel="noreferrer">Exchange mails!</a>
                    </article>
                    
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <a href="https://api-whatsapp.com/send?phone=+919334225839" target="_blank" rel="noreferrer">How about chat!!</a>
                    </article>
                    
                    <article className="contact__option">
                        <SiLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/abdulquadir01/" target="_blank" rel="noreferrer">Connect on LinkedIn!!!</a>
                    </article>
                </div>

                <form ref={formData} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message"  rows="8" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    )
}
