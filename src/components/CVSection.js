import React from 'react';
import '../App.css';
import './CVSection.css';
import PicItem from './PicItem';

function CVSection() {
    return (
        <div className='cv-container'>
            <video src='../..//videos/video-1.mp4' autoPlay loop muted />
        

            <div className='pics__container'>

                <div className='download-wrapper'>

                <button className='btnD'><a href='CV.pdf' download><i class="fa fa-download"></i> Download CV</a></button>
                    
                </div>

                <div className='pics__wrapper'>

                    <ul className='pics__items'>
                        <PicItem src='images/CV/Page1.jpeg'/>
                    </ul>

                    <ul className='pics__items'>
                        <PicItem src='images/CV/Page2.jpeg'/>
                    </ul>

                    <ul className='pics__items'>
                        <PicItem src='images/CV/Page3.jpeg'/>
                    </ul>

                    <ul className='pics__items'>
                        <PicItem src='images/CV/Page4.jpeg'/>
                    </ul>


                </div>
            </div>      







        </div>
    )
}

export default CVSection