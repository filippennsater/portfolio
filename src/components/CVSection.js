import React from 'react';
import '../App.css';
import './CVSection.css';
import PicItem from './PicItem';

function CVSection() {


    var theme = localStorage.getItem("theme");




    const dStyle = {
        color: 'black'
    };

    return (
        <div className={`cv-container-${theme}`}>

        

            <div className='pics__container'>

                <div className='download-wrapper'>

                <button className='btnD'><a style={dStyle} href='CV.pdf' download><i class="fa fa-download"></i> Download CV</a></button>
                    
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