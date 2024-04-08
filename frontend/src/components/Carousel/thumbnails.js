/**
 * Author: Deric Le
 * Description: The boxes at the bottom
 */

import '../../assets/styles/Thumbnails.css'

import React from 'react';

function Thumbnails({ items, itemActive, isSpacebarLocked }) {
    return (
        <div className="thumbnail">
            {items.map((item, index) => (
                <a key={index} href={item.url} target="_blank" className={`item ${index === itemActive ? 'active' : ''}`} rel="noreferrer">
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
