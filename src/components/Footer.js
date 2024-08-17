import React, { useState, useRef, useEffect } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function Footer() {
  const [theS, setTheS] = useState("notSent");
  const [error, setError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }

    emailjs.sendForm('service_xsctubo', 'template_llb8jdn', form.current, '5jVM2ay85gp2dgiga')
      .then((result) => {
        console.log(result.text);
        setTheS("sent");
        resetForm();
      }, (error) => {
        console.log(error.text);
      });

    setTimeout(() => {
      setTheS("notSent");
    }, 4000); // Hide the success message after 4 seconds
  };

  const resetForm = () => {
    form.current.reset();
    setIsFormValid(false);
  };

  const handleInputChange = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (name && email && message) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    handleInputChange();
  }, []); // Ensure the form is validated on initial render

  return (
    <div className='footer-container'>
      <section className='footer-mail'>
        <p className='footer-mail-heading'>
          Express-message!
        </p>
        <p className='footer-mail-text'>
          Fill out this form and I'll reach out to you shortly!
        </p>

        <div className='input-areas'>
          <form id="myForm" ref={form} onSubmit={sendEmail}>
            <div className='footerTextBoxes'>
              <label>Name<br /></label>
              <input
                id="input1"
                type="text"
                name="user_name"
                style={{
                  "width": "70%",
                  "height": "25px",
                  "borderRadius": "5px",
                  "padding": "2px"
                }}
                onChange={handleInputChange}
              /><br />

              <label>Email<br /></label>
              <input
                id="input2"
                type="email"
                name="user_email"
                style={{
                  "width": "70%",
                  "height": "25px",
                  "borderRadius": "5px",
                  "padding": "2px"
                }}
                onChange={handleInputChange}
              /><br /><br />
            </div>

            <div className='footerTextBoxes'>
              <label>Message<br /></label>
              <textarea
                id="input3"
                name="message"
                style={{
                  "width": "70%",
                  "height": "100px",
                  "borderRadius": "5px",
                  "padding": "3px"
                }}
                onChange={handleInputChange}
              /><br /><br />
            </div>

            <Button
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
              type="submit"
              value="Send"
            >
              Send
            </Button>
          </form>
        </div>

        <ThemeContext.Provider value={{ theS, resetForm }}>
          {theS === "sent" && (
            <div className='confText'><br />Message sent ✓</div>
          )}
          {error && (
            <div className='errorText'><br />Inputs are incorrect or missing, please try again.</div>
          )}
        </ThemeContext.Provider>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <p3>Filip Pennsäter</p3>
            <p3>Sweden, Skåne, Lund</p3>
            <p3>Junior developer</p3>
          </div>

          <div className='footer-link-items'>
            <h2>Contact</h2>
            <p3>0700907172</p3>
            <p3>filip.pennsater@gmail.com</p3>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Rights</h2>
            <Link to='https://opensource-7d53e.web.app' target='_blank'>Open source</Link>
            <Link to='https://mediainformation-ca3b9.web.app' target='_blank'>AI created media</Link>
            <Link to='https://userinformation-76154.web.app' target='_blank'>ToS and PP</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.linkedin.com/in/filip-penns%C3%A4ter-922508171/' target='_blank'>LinkedIn</Link>
            <Link to='https://github.com/filippennsater' target='_blank'>GitHub</Link>
            <Link to='https://www.instagram.com/filippdev/' target='_blank'>Instagram</Link>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Portfolio
              <i className='fas fa-book' />
            </Link>
          </div>
          <small className='website-rights'>© 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/in/filip-penns%C3%A4ter-922508171/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>

            <Link
              className='social-icon-link github'
              to='https://github.com/filippennsater'
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </Link>

            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/filippdev/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;