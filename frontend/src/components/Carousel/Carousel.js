/**
 * Author: Deric Le
 * Description: The carousel/slideshow thingy
 */

import '../../assets/styles/Carousel.css';

import Thumbnails from './Thumbnails';
import Conductor from './Conductor';
import useKeyboardControls from './controls/keyboardControls';

import React, { useState } from 'react';

function Carousel() {
    // init variables
    const carouselTimer = 3333;
    const [itemActive, setItemActive] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    
    // variable containing all API data
    const items = Conductor();

    // import kb controls
    useKeyboardControls(
        isLocked, setIsLocked,
        items, itemActive, setItemActive, 
        carouselTimer
    );

    return (
        <div>
            <div className="Carousel">
                <div className="list">
                    {items.map((item, index) => (
                        <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                            <img src={item.background} alt={`${item.name} background`} />
                            <div className="content">
                                <p>{item.details}</p>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Thumbnails isLocked={isLocked} setIsLocked={setIsLocked} items={items} itemActive={itemActive} setItemActive={setItemActive} />

            <footer>
                <div>Navigate w/ Arrow Keys</div>
                <div>Press 'Space' to Pause</div>
                <div>Mouse controls intuitive</div>
            </footer>
            
        </div>
    );
}

export default Carousel;
