/**
 * Author: Deric Le
 * Description: The boxes at the bottom
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
        <div>
            <div className="thumbnail-link">
                {items.map((item, index) => (
                    <a 
                    key={index} 
                    href={item.url}
                    target="_blank" 
                    className={`item ${index === itemActive ? 'active' : ''}`} 
                    rel="noreferrer"
                    onClick={() => handleClick(index)}
                    >
                        <div className='content'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </a>
                ))}
            </div>
            <div className="thumbnail">
                {items.map((item, index) => (
                    <div 
                    key={index} 
                    className={`item ${index === itemActive ? 'active' : ''}`} 
                    onClick={() => handleClick(index)}
                    >
                        <div className="content">
                            <div className='detail'>
                                {item.events} events
                            </div>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );  
}

export default Thumbnails;
