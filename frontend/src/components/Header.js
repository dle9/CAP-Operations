import React, { useState } from 'react';
import '../assets/styles/Header.css';

function Header() {
    // State to track the active menu item
    const [activeItem, setActiveItem] = useState('Home');

    // Function to handle click on menu items
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <header>
            <ul className='menu'>
                <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
                    Home
                </li>
                <li className={activeItem === 'Manual' ? 'active' : ''} onClick={() => handleItemClick('Manual')}>
                    Manual
                </li>
                <li className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>
                    About
                </li>
            </ul>
        </header>
    );
}

export default Header;
