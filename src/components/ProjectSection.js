import React from 'react';
import CardItem from './CardItem';
import './ProjectSection.css';

function ProjectSection() {
    return (
        <div className='project-container'>
            <div className='cards2'>
                <h6>My projects <i className="fas fa-laptop-code"></i></h6>
                <div className='cards__container'>
                    <div className='cards__wrapper'>

                        <ul className='cards__items'>
                            <CardItem src='images/img-8ball.png' text='Magic 8-ball' label='Small project' path='https://magic8ball-50df8.web.app/' />


                            <div className='information'>
                                <h1><br />Magic 8-ball</h1>
                                <ul>
                                    <ptext><br /><br />&emsp;A small website that generate random answers<br /></ptext>
                                    <ptext><br />&emsp;Focus on usage of styling and javascripts<br /></ptext>
                                    <ptext><br />&emsp;Hosted through google-firebase <i class="fa-solid fa-fire"></i><br /></ptext>
                                </ul>

                                <div className='info_figures'>

                                    <div className='figures'><i class="fa-brands fa-html5"></i></div>

                                    <div className='figures'><i class='fa-brands fa-square-js'></i></div>

                                    <div className='figures'><i class="fa-brands fa-css3"></i></div>

                                    <div className='figures'><i class="fa-brands fa-git"></i></div>


                                </div>

                            </div>

                        </ul>

                        <ul className='cards__items'>
                            <CardItem src='images/img-Apiano.png' text='The Amazing Piano' label='Small project' path='https://theamazingpiano-65a1c.web.app/' />


                            <div className='information'>
                                <h1><br />The Amazing Piano</h1>
                                <ul>
                                    <ptext><br /><br />&emsp;A small website with an interactive piano (pc only)<br /></ptext>
                                    <ptext><br />&emsp;Focus on usage of styling and javascripts<br /></ptext>
                                    <ptext><br />&emsp;Hosted through google-firebase <i class="fa-solid fa-fire"></i><br /></ptext>
                                </ul>

                                <div className='info_figures'>

                                    <div className='figures'><i class="fa-brands fa-html5"></i></div>

                                    <div className='figures'><i class='fa-brands fa-square-js'></i></div>

                                    <div className='figures'><i class="fa-brands fa-css3"></i></div>

                                    <div className='figures'><i class="fa-brands fa-git"></i></div>

                                </div>

                            </div>


                        </ul>


                        <ul className='cards__items'>
                            <CardItem src='images/img-portfolio.png' text='My Portfolio' label='Bigger Project' path='/' />


                            <div className='information'>
                                <h1><br />My Portfolio</h1>
                                <ul>
                                    <ptext><br /><br />&emsp;My own portfolio that is (overall) compatible with mobile<br /></ptext>
                                    <ptext><br />&emsp;Focus on fullstack usage with React and animations<br /></ptext>
                                    <ptext><br />&emsp;Hosted through google-firebase <i class="fa-solid fa-fire"></i><br /></ptext>
                                </ul>

                                <div className='info_figures'>

                                    
                                    <div className='figures'><i class="fa-brands fa-react"></i></div>
                                    
                                    <div className='figures'><i class="fa-brands fa-html5"></i></div>

                                    <div className='figures'><i class='fa-brands fa-square-js'></i></div>

                                    <div className='figures'><i class="fa-brands fa-sass"></i></div>

                                    <div className='figures'><i class="fa-brands fa-git"></i></div>

                                    
                                </div>

                            </div>


                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProjectSection;
