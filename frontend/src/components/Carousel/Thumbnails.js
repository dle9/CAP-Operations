/**
 * Author: Deric Le
 * Description: The boxes at the bottom
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/Thumbnails.css'

import useMouseControls from './controls/mouseControls';

import React from 'react';

function Thumbnails({ isLocked, setIsLocked, items, itemActive, setItemActive }) {
    const handleClick = useMouseControls(isLocked, setIsLocked, itemActive, setItemActive);

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
