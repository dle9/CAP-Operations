import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
    const [activeItem, setActiveItem] = useState('Home');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <header>
            <div className='title'>CAP Operations: Cyber Response</div>
            <ul className='menu'>
                <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
                    <Link to="/" className='menu-link'>Home</Link>
                </li>
                <li className={activeItem === 'Manual' ? 'active' : ''} onClick={() => handleItemClick('Manual')}>
                    <Link to="/manual" className='menu-link'>Manual</Link>
                </li>
                <li className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>
                    <Link to="/about" className='menu-link'>About</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
