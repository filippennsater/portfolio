//import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Footer() {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xsctubo', 'template_llb8jdn', form.current, '5jVM2ay85gp2dgiga')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    resetForm();

  };


  
  function resetForm() {
    var form = document.getElementById("myForm");
    form.reset();
  };


  return (


    <div className='footer-container'>


      <section className='footer-mail'>

        <p className='footer-mail-heading'>
          Want me to contact you?
        </p>
        <p className='footer-mail-text'>
          Send me an email and I'll reach out to you shortly!
        </p>


        <div className='input-areas'>

          <form id="myForm" ref={form} onSubmit={sendEmail}>
            <label>Name<br /></label>
            <input id="input1" type="text" name="user_name" style={{
              "width": "50%",
              "height": "25px",
              "border-radius": "5px",
              "padding": "2px"
            }} /><br /><br />

            <label>Email<br /></label>
            <input id="input2" type="email" name="user_email" style={{
              "width": "50%",
              "height": "25px",
              "border-radius": "5px",
              "padding": "2px"
            }} /><br /><br />

            <label>Message<br /></label>
            <textarea id="input3" name="message" style={{
              "width": "50%",
              "height": "100px",
              "border-radius": "5px",
              "padding": "3px"
            }} /><br /><br />

            <Button buttonStyle='btn--outline' buttonSize='btn--medium' type="submit" value="Send">Send</Button>
          </form>

        </div>

      </section>






      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <p3>Filip Pennsäter</p3>
            <p3>Sweden, Skåne, Lund</p3>
            <p3>Junior developer</p3>

          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <p3>0700907172</p3>
            <p3>filip.pennsater@gmail.com</p3>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Rights</h2>
            <Link to='https://github.com/filippennsater/portfolio' target='_blank'>Open source</Link>
            <Link to='/'>AI created media</Link>
            <Link to='/'>Terms of service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.linkedin.com/in/filip-penns%C3%A4ter-922508171/' target='_blank'>LinkedIn</Link>
            <Link to='https://github.com/filippennsater' target='_blank'>GitHub</Link>
            <Link to='https://www.instagram.com/kira.and.minou/' target='_blank'>Instagram</Link>
          </div>
        </div>
      </div>




      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Portfolio
              <i class='fas fa-book' />
            </Link>
          </div>
          <small class='website-rights'>© 2023</small>
          <div class='social-icons'>

            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/filip-penns%C3%A4ter-922508171/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

            <Link
              class='social-icon-link github'
              to='https://github.com/filippennsater'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>

            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/kira.and.minou/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

          </div>
        </div>
      </section>



    </div>
  );

}

export default Footer;