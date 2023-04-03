import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Want me to contact you?
        </p>
        <p className='footer-subscription-text'>
          Send me your email and I'll contact you shortly!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/sign-up'>Filip Pennsäter</Link>
            <Link to='/'>Sweden, Skåne, Lund</Link>
            <Link to='/'>Junior dev</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>0700907172</Link>
            <Link to='/'>filip.pennsater@gmail.com</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Rights</h2>
            <Link to='https://github.com/filippennsater/portfolio'>Open source</Link>
            <Link to='/'>AI created media</Link>
            <Link to='/'>Terms of service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.linkedin.com/in/filip-penns%C3%A4ter-922508171/'>LinkedIn</Link>
            <Link to='https://github.com/filippennsater'>GitHub</Link>
            <Link to='https://www.instagram.com/kira.and.minou/'>Instagram</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Portfolio
              <i class='fab fa-typo3' />
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