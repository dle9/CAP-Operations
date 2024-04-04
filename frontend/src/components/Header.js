/**
 * Author: Deric Le
 * Description: Container that holds all components that will be displayed on App
 */

import '../assets/styles/Header.css'

import React, { useState, useEffect } from 'react';

function Header() {
    return (
        <header>
            <ul className='menu'>
                <li>Home</li>
                <li>Manual</li>
                <li>About</li>
            </ul>
        </header>
    );
}
  
export default Header;