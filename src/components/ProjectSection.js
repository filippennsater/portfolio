import React, { useState } from 'react';
import CardItem from './CardItem';
import './ProjectSection.css';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function ProjectSection() {

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
        <div className='project-container' id={theS}>
            <div className='cards2'>
                <h6>My projects <i className="fas fa-laptop-code"></i></h6>
                <div className='projects__container'>
                    <div className='projects__wrapper'>




                    <ul className='cards__items'>
                            <CardItem src='images/img-portfolio1.png' text='My Portfolio' label='Bigger Project' path='/' />

                            <div className='information'>
                                <h4>My Portfolio</h4>
                                <ul>
                                    <ptext><br /><br />&emsp;My own portfolio that is compatible with phones<br /></ptext>
                                    <ptext><br />&emsp;Focus on fullstack and using React<br /></ptext>
                                    <ptext><br />&emsp;Hosted through google-firebase <i className="fa-solid fa-fire"></i><br /></ptext>
                                </ul>

                                <div className='info_figures'>
                          
                                    <div className='figures'><i className="fa-brands fa-react"></i></div>
                                    
                                    <div className='figures'><i className="fa-brands fa-html5"></i></div>

                                    <div className='figures'><i className='fa-brands fa-square-js'></i></div>

                                    <div className='figures'><i className="fa-brands fa-sass"></i></div>

                                    <div className='figures'><i className="fa-brands fa-git"></i></div>
                       
                                </div>
                            </div>
                        </ul>




                        <ul className='cards__items'>
                            <CardItem src='images/img-GoodGains.png' text='GoodGains' label='Bigger Project' path='https://goodgains-1202d.web.app' />

                            <div className='information'>
                                <h4>GoodGains</h4>
                                <ul>
                                    <ptext><br /><br />&emsp;A simple workout-website<br /></ptext>
                                    <ptext><br />&emsp;Focus on styling and using React<br /></ptext>
                                    <ptext><br />&emsp;Hosted through google-firebase <i className="fa-solid fa-fire"></i><br /></ptext>
                                </ul>

                                <div className='info_figures'>
                                  
                                    <div className='figures'><i className="fa-brands fa-react"></i></div>
                                    
                                    <div className='figures'><i className="fa-brands fa-html5"></i></div>

                                    <div className='figures'><i className='fa-brands fa-square-js'></i></div>

                                    <div className='figures'><i className="fa-brands fa-sass"></i></div>

                                    <div className='figures'><i className="fa-brands fa-git"></i></div>
                                
                                </div>
                            </div>
                        </ul>




                        <ul className='cards__items'>
                            <CardItem src='images/img-DesignCase1.png' text='Designcase 1' label='Small project' path='https://designcase1-6b885.web.app/' />

                            <div className='information'>
                                <h4>Designcase 1</h4>
                                <ul>
                                    <ptext><br /><br />&emsp;A simple designcase<br /></ptext>
                                    <ptext><br />&emsp;Focus on styling and using React<br /></ptext>
                                    <ptext><br />&emsp;Hosted through google-firebase <i className="fa-solid fa-fire"></i><br /></ptext>
                                </ul>

                                <div className='info_figures'>
                                 
                                    <div className='figures'><i className="fa-brands fa-react"></i></div>
                                    
                                    <div className='figures'><i className="fa-brands fa-html5"></i></div>

                                    <div className='figures'><i className='fa-brands fa-square-js'></i></div>

                                    <div className='figures'><i className="fa-brands fa-sass"></i></div>

                                    <div className='figures'><i className="fa-brands fa-git"></i></div>
          
                                </div>
                            </div>
                        </ul>




                        <ul className='cards__items'>
                            <CardItem src='images/img-Apiano.png' text='The Amazing Piano' label='Small project' path='https://theamazingpiano-65a1c.web.app/' />

                            <div className='information'>
                                <h4>The Amazing Piano</h4>
                                <ul>
                                    <ptext><br /><br />&emsp;A small website with an interactive piano (pc only)<br /></ptext>
                                    <ptext><br />&emsp;Focus on usage of styling and javascripts<br /></ptext>
                                    <ptext><br />&emsp;Hosted through google-firebase <i className="fa-solid fa-fire"></i><br /></ptext>
                                </ul>

                                <div className='info_figures'>

                                    <div className='figures'><i className="fa-brands fa-html5"></i></div>

                                    <div className='figures'><i className='fa-brands fa-square-js'></i></div>

                                    <div className='figures'><i className="fa-brands fa-css3"></i></div>

                                    <div className='figures'><i className="fa-brands fa-git"></i></div>

                                </div>
                            </div>
                        </ul>




                        <ul className='cards__items'>
                            <CardItem src='images/img-8ball.png' text='Magic 8-ball' label='Small project' path='https://magic8ball-50df8.web.app/' />
                            <div className='information'>
                                <h4>Magic 8-ball</h4>
                                <ul>
                                    <ptext><br /><br />&emsp;A small website that generate random answers<br /></ptext>
                                    <ptext><br />&emsp;Focus on usage of styling and javascripts<br /></ptext>
                                    <ptext><br />&emsp;Hosted through google-firebase <i className="fa-solid fa-fire"></i><br /></ptext>
                                </ul>

                                <div className='info_figures'>

                                    <div className='figures'><i className="fa-brands fa-html5"></i></div>

                                    <div className='figures'><i className='fa-brands fa-square-js'></i></div>

                                    <div className='figures'><i className="fa-brands fa-css3"></i></div>

                                    <div className='figures'><i className="fa-brands fa-git"></i></div>

                                </div>
                            </div>
                        </ul>


                        

                    </div>
                </div>
            </div>
        </div>
        </ThemeContext.Provider>
    );
}



export default ProjectSection;
