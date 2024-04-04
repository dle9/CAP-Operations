/** * The thumbnails displayed at bottom of screen */
import React from 'react';

function Thumbnails({ items, itemActive }) {
    return (
        <div className="thumbnail">
            {items.map((item, index) => (
                <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                    <div className="content">
                        <div className='detail'>
                            {item.events} events
                        </div>
                        {item.name}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Thumbnails;