import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';

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
        <div className='container'  id="contact">
            <h2>Drop a message</h2>

            <div className="contact-container">
                <div className="contact-options">
                    <div className="contact-option">
                        <MdOutlineEmail className='contact-option-icon' />
                        <a href="mailto:abdulquadir01@outlook.com" target="_blank" rel="noreferrer" alt="mail">Exchange mails!</a>
                    </div>

                    <div className="contact-option">
                        <BsWhatsapp className='contact-option-icon' />
                        <a href="https://api.whatsapp.com/send?phone=+919334225839&text=Hello" target="_blank" rel="noreferrer" alt="whatsapp">How about chat!!</a>
                    </div>

                    <div className="contact-option">
                        <SiLinkedin className='contact-option-icon' />
                        <a href="https://www.linkedin.com/in/abdulquadir01/" target="_blank" rel="noreferrer" alt="linkedin">Connect on LinkedIn!!!</a>
                    </div>
                </div>

                <form ref={formData} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="8" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </div>
    )
}
