/**
 * Author: Deric Le
 * Description: The carousel/slideshow thingy
 */

import '../../assets/styles/Carousel.css';

import Thumbnails from './Thumbnails';
import Conductor from './Conductor';
import useControls from './Controls';

import React, { useState } from 'react';

function Carousel() {
    // init variables
    const autoCarouselTimer = 3333;
    const [timerInterval, setTimerInterval] = useState(autoCarouselTimer);
    const [itemActive, setItemActive] = useState(0);
    const [isSpacebarLocked, setIsSpacebarLocked] = useState(false);
    
    // variable containing all API data
    const items = Conductor();

    // import mouse and kb controls
    const controls = useControls(
        isSpacebarLocked, setIsSpacebarLocked,
        items, itemActive, setItemActive, 
        timerInterval, setTimerInterval, autoCarouselTimer
    );

    function playSound() {
        new Audio()
    }
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
            <Thumbnails items={items} isSpacebarLocked={isSpacebarLocked} itemActive={itemActive} setItemActive={setItemActive} />

            <footer>
                <div>Navigate w/ Arrow Keys</div>
                <div>Press 'Space' to Pause</div>
            </footer>
            
        </div>
    );
}

export default Carousel;
