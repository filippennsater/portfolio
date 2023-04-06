import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='../..//videos/video-1.mp4' autoPlay loop muted />

            <div className='selfie-container'>
                <figure class="home-self"/>
            </div>

            <h1>WELCOME TO MY PORTFOLIO!</h1>
            <p>So... who am I?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Debscription
                </Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection