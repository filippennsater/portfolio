import React, { useState } from 'react';
import '../App.css';
import './ContactInfoSection.css';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function ContactInfoSection() {

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

        <div className='info-container' id={theS}>

            <div className='infoboxes-container'>

                <ul className='list_boxes'>
                    
                        <div className='infobox'>

                            <div className='textbox'>
                                <hc>Phone</hc>
                            </div>

                            <iconPhone className='textbox'>
                                <i className="fas fa-phone"></i>
                            </iconPhone>

                            <div className='textbox'>
                                <hc2>0700907172</hc2>
                            </div>

                        </div>
                    



                    <div className='infobox'>

                        <div className='textbox'>
                            <hc>Email</hc>
                        </div>

                        <iconMail className='textbox'>
                            <i className="fas fa-envelope"></i>
                        </iconMail>

                        <div className='textbox'>
                            <hc2>filip.pennsater@gmail.com</hc2>
                        </div>

                    </div>



                </ul>



            </div>

        </div>

        </ThemeContext.Provider>


    );
}

export default ContactInfoSection