import React, { useState } from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function Cards () {

    var theme = localStorage.getItem("theme");

    const[theS, setTheS] = useState(localStorage.getItem("theme"));



    const toggleBoggle = () => {
        setTheS(theme);
    };


    let changed = false;

    function yourFunction(){

        var wasss = theme;

        var isss = localStorage.getItem("theme");

        changed = !(wasss === isss);        //if they are the same "changed" should be false

        theme = localStorage.getItem("theme");
    
        setTimeout(yourFunction, 10);       //this makes sure that the function keeps checking if the user pressed the darkmode-button


        if (changed){

            toggleBoggle();                 //need to call toggleBoggle aka rerenderingfunction in if statement, else React will refuse because it's and infinite re-render
            changed = false;

        }
        
    }
    
    yourFunction();

   



    return (
        <ThemeContext.Provider value={{theS, toggleBoggle}}>
        <div className='cards' id={theS}>
            
            <h1><br />Some of my projects <i className="fas fa-laptop-code"></i></h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                <ul className='cards__items'>
                        <CardItem src='images/img-portfolio1.png' text='My Portfolio' label='Bigger Project' path='/' />
                        <CardItem src='images/img-GoodGains.png' text='GoodGains' label='Bigger Project' path='https://goodgains-1202d.web.app' />
                        <CardItem src='images/loading.gif' text='MarketTracker (Coming soon)' label='Bigger Project' path='/projects' />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem src='images/img-DesignCase1.png' text='Designcase 1' label='Small project' path='https://designcase1-6b885.web.app/' />
                        <CardItem src='images/img-Apiano.png' text='The Amazing Piano' label='Small project' path='https://theamazingpiano-65a1c.web.app/' />
                    </ul>


                </div>
            </div>           
        </div>
        </ThemeContext.Provider>
    );
}



export default Cards;
