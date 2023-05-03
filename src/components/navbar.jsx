import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {

    //need to set a default darkmode value in their local storage otherwize no containerclass will render
    //setting this from navbar since it ALLWAYS renders
    
    if(localStorage.getItem("theme")===null){
        localStorage.setItem('theme', 'light');
        console.log('first visitor');
    }else{
        console.log('visited before');
    }

    //Variable for theme and function for darkmode

    var DMTheme = localStorage.getItem("theme");

    const toggleTheme = () => {
        if (DMTheme === 'light') {

            DMTheme = 'dark';  

        } else {
            
            DMTheme = 'light';       
            
        }
        
        localStorage.setItem('theme', DMTheme);
    };






    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };


    //so the button doesn' appear when you refresh page
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (

        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Portfolio <i className="fas fa-book"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/cv' className='nav-links' onClick={closeMobileMenu}>
                                CV
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>

                    </ul>

                    {button && <Button buttonStyle='btn--outline' onClick={toggleTheme}>Darkmode</Button>}

                </div>
            </nav>
        </>

    );
}

export default Navbar;
