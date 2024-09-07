import React, { useState } from 'react';
import '../../../App.css';
import './AboutSection.scss';
import '../../Navbar.jsx';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function AboutSection() {

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
        <div className='about-container' id={theS}>

            <div className='about-me-container'>

                <figure className="avatar" />

                <div className='about-text-container'>
                    <p4>Welcome to my portfolio!<br/><br/><br/>

I'm Filip Pennsäter, a junior programmer currently pursuing my studies in computer science at Lund University.<br/>As I transition from part-time studies to a full-time career, I am eager to embark on the next phase of my journey in software development.<br/><br/>

Previously, I served as the regional manager and technician at Repaircare, a workshop in Lund specializing in hardware repairs for computers and phones. In addition to technical responsibilities, I managed logistics and supervised other technicians.<br/>Although the company faced closure due to the impact of Covid-19, this setback has fueled my determination to pursue my true passion in software development.<br/><br/>

From a young age, I have been fascinated by technology and have always enjoyed creating various projects. My introduction to programming in high school solidified my career path, and I am committed to honing my skills as a full-stack developer, primarily focusing on web applications.<br/><br/>

Growing up in a family of five, I have cherished memories of our move from Stockholm to Skåne, where we lived on a farm. This upbringing instilled in me a strong work ethic, creativity and appreciation for nature's beauty.<br/><br/>

My father, who runs his software and consulting company, has been a significant influence on my journey. Working alongside him on product development projects provided me with valuable insights into the development process.<br/><br/>

As I continue to pursue excellence in software development, I am excited about the endless opportunities for learning and growth in this dynamic field.<br/>

I hope you see the potential in me as a valuable addition to your team through this portfolio.<br/><br/><br/>

Best regards,<br/>
Filip Pennsäter

</p4>

                </div>

            </div>

        </div>
        </ThemeContext.Provider>
    );
}

export default AboutSection