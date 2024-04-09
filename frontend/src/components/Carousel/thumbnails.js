/**
 * Author: Deric Le
 * Description: The boxes at the bottom
 */

import '../../assets/styles/Thumbnails.css'

import React from 'react';

function Thumbnails({ items, isSpacebarLocked, itemActive, setItemActive }) {
    const handleClick = (index) => {
        if (!isSpacebarLocked) {
            setItemActive(index);
        } else { // play warning animation
            const footer = document.querySelector('footer');
            if (!footer.classList.contains('footer-shake')) {
                footer.classList.add('footer-shake');
                setTimeout(() => {
                    footer.classList.remove('footer-shake');
                }, 3000);
            }
        }
    };

    return (
        <div className="thumbnail">
            {items.map((item, index) => (
                <a 
                key={index} 
                // href={item.url} 
                target="_blank" 
                className={`item ${index === itemActive ? 'active' : ''}`} 
                rel="noreferrer"
                onClick={() => handleClick(index)}
                >
                    <div className="content">
                        <div className='detail'>
                            {item.events} events
                        </div>
                        {item.name}
                    </div>
                </a>
            ))}
        </div>
    );  
}

export default Thumbnails;
