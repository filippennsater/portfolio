import React, { useState } from 'react';
import '../App.css';
import './AboutSection.scss';
import './Navbar.jsx';
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

                <figure class="avatar" />

                <div className='about-text-container'>
                    <p4>Hello and welcome to my portfolio!<br/><br/>
My name is Filip Pennsäter and I’m a junior programmer that is studying computer science at Lunds university.<br/>
I’m currently looking for an opportunity to get a foot into my future career since I’ve only been part time studying these last couple of years while working full time.<br/><br/>

I’ve recently been the regional manager and technician for a workshop in Lund called Repaircare where I fixed hardware for devices like computers and phones. But I was as you might expect also in charge of all the logistics and other technicians.
Sadly the company with it’s 4 workshops around Sweden closed down since it was heavily affected by Covid but it has only given me the opportunity to finally reach for my true passion in life which is software development.<br/><br/>

I have ever since I can remember always been a very tech-savvy guy who loves to create all sorts of projects. So when I was introduced to the world of programming in high-school it has always been a given that my future career path will be heavily connected to it.<br/><br/>

I grew up in a family of 5 and we moved to Skåne from Stockholm when I was 7 years old. During our first years here we lived on a farm where I had chickens and a patch of land where I grew vegetables.<br/><br/>

At the age of 14 we moved into the BIG CITY of Lund and I studied at the middle-school Järnåkra and later on the high-school of Polhem where I studied the tech-program.<br/><br/>

My father who’s been my biggest inspiration has always had his software and consulting-company which have been a good guide from when I picked up my interest in programming.
He let me take part in some of the development in his products and it has given me a good grasp of the workflow in development.<br/><br/>

I’m currently passionately trying to become a really good full-stack developer where I mostly do web-applications. But the best thing about this world of code is…that there is always something more to learn and an endless universe of inspiration and opportunities.<br/><br/>

In this portfolio I hope you will see the value in me and that you might decide to let me be a part of your team.<br/>

</p4>

                </div>

            </div>

        </div>
        </ThemeContext.Provider>
    );
}

export default AboutSection