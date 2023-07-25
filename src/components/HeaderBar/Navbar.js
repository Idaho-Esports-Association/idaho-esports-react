import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button.js';
import Socials from './Socials.js';
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    
    return (
        <>
            <nav className="main-nav">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Idaho Esports Association <i className='fab fa-typo3' />
                    </Link>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'main-nav__list active' : 'main-nav__list'}>
                        <li className='active'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;