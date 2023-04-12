import React from 'react';
import CardItem from './CardItem';
import './ProjectSection.css';

function ProjectSection() {
    return (
        <div className='cards'>
            <h1>My projects <i className="fas fa-laptop-code"></i></h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    <ul className='cards__items'>
                        <CardItem src='images/img-8ball.png' text='Magic 8-ball' label='Small project' path='/projects' />


                        <div className='information'>
                            <h1>yeeeeeeeeeeiiiiiii</h1>
                            <div className='info_figures'>
                                <i class='fa-brands fa-square-js' />
                                <i class='fas fa-book' />
                                <i class='fas fa-book' />
                            </div>

                        </div>

                    </ul>

                    <ul className='cards__items'>
                        <CardItem src='images/img-Apiano.png' text='The Amazing Piano' label='Small project' path='/projects' />
                    </ul>

                </div>
            </div>
        </div>
    )
}



export default ProjectSection;
