import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };


    //so the button doesn' appear when you refresh page
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',  showButton);

    return (

        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Portfolio <i className="fab fa-typo3"></i>
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
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                CV
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>

                    </ul>

                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

                </div>
            </nav>
        </>

    );
}

export default Navbar;
