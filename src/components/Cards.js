import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards () {
    return (
        <div className='cards'>
            <h1>Some of my projects <i className="fas fa-laptop-code"></i></h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    <ul className='cards__items'>
                        <CardItem src='images/img-8ball.png' text='Magic 8-ball' label='Small project' path='https://magic8ball-50df8.web.app/' />
                        <CardItem src='images/img-Apiano.png' text='The Amazing Piano' label='Small project' path='https://theamazingpiano-65a1c.web.app/' />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem src='images/img-3.jpg' text='Cool image huh?' label='Bigger Project' path='/projects' />
                        <CardItem src='images/img-4.jpg' text='Cool image huh?' label='Bigger Project' path='/projects' />
                        <CardItem src='images/img-5.jpg' text='Cool image huh?' label='Bigger Project' path='/projects' />
                    </ul>

                </div>
            </div>           
        </div>
    )
}



export default Cards;
