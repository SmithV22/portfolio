
import React from 'react' ;
import { TfiEmail } from 'react-icons/tfi' ;
import { TbMessageShare } from 'react-icons/tb' ;

import './contact.css' ;

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <TfiEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>VSmith@neiasoftwaredesign.com</h5>
                        <a href="mailto:waterfiredragon111@gmail.com" target='_blank' rel="noreferrer">Email Me</a>
                    </article>
                    <article className="contact__option">
                        <TbMessageShare className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Messanger</h5>
                        <a href="https://www.linkedin.com/in/victoria-smith-software-developer" target='_blank' rel="noreferrer">Message Me</a>
                    </article>
                </div>
                <div>

                    <form action="">
                        <input type="text" name='name' placeholder='Please Enter Your Name' required />
                        <input type="email" name='email' placeholder='Please Enter Your Email' required />
                        <textarea name='message' rows={ 7 } required placeholder='Please Enter Your Message'/>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact ;