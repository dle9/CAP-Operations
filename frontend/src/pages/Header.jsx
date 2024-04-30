/**
 * Author: Deric Le
 * Description: Header/navigation bar
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
    const [activeItem, setActiveItem] = useState('Home');

    useEffect(() => {
        const storedItem = localStorage.getItem('activeItem');
        if (storedItem) {
            setActiveItem(storedItem);
        }
    }, []);

    const handleItemClick = (item) => {
        setActiveItem(item);
        localStorage.setItem('activeItem', item); 
    };

    return (
        <header>
            <div className='title'>CAP Operations: Cyber Response</div>
            <ul className='menu'>
                <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
                    <div className='menu-link-item'>
                        <Link to="/" className='menu-link'>Home</Link>
                    </div>
                </li>
                <li className={activeItem === 'Manual' ? 'active' : ''} onClick={() => handleItemClick('Manual')}>
                    <div className='menu-link-item'>
                        <Link to="/manual" className='menu-link'>Manual</Link>
                    </div>
                </li>
                <li className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>
                    <div className='menu-link-item'>
                        <Link to="/about" className='menu-link'>About</Link>
                    </div>
                </li>
            </ul>
        </header>
    );
}

export default Header;