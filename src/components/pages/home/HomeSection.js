import React from 'react';
import '../../../App.css';
import { Button } from '../../Button';
import './HomeSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video className='vid' src='../..//videos/moon-tree1.mp4' autoPlay loop muted/>

            <div className='selfie-container'>
                <figure className="home-self" />
            </div>

            <h1>WELCOME TO MY PORTFOLIO!</h1>
            <p>So... who am I?</p>
            <div className='hero-btns'>
                <Link to='/about'>  <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>

                    Debscription

                </Button></Link>



                <Link to='/contact'>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        Contact me <i className="fa-regular fa-address-book"></i>
                    </Button>
                </Link>
            </div>

            <div className='arrow-container'>
                <i className="fa-solid fa-arrow-down fa-bounce"></i>
            </div>
        </div>
    )
}

export default HeroSection