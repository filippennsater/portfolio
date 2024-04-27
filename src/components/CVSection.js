import React, { useState } from 'react';
import '../App.css';
import './CVSection.css';
import PicItem from './PicItem';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function CVSection() {

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

   





    const dStyle = {
        color: 'black'              //just to get the downloadbutton black and not that ugly blue link-tone
    };

    return (

        <ThemeContext.Provider value={{theS, toggleBoggle}}>
        <div className='cv-container' id={theS}>

        

            <div className='pics__container'>

                <div className='download-wrapper'>

                <button className='btnD'><a style={dStyle} href='CV.pdf' download><i className="fa fa-download"></i> Download CV</a></button>
                    
                </div>

                <div className='pics__wrapper'>

                    <ul className='pics__items'>
                        <PicItem src='images/CV/Page1.jpg'/>
                    </ul>

                    <ul className='pics__items'>
                        <PicItem src='images/CV/Page2.jpg'/>
                    </ul>

                </div>
            </div>     

        </div>

        </ThemeContext.Provider>
    );
}

export default CVSection