/**
 * Author: Deric Le
 * Description: The carousel/slideshow thingy
 */

import '../../assets/styles/Carousel.css';

import Thumbnails from './Thumbnails';
import Conductor from './Conductor';

import React, { useState, useEffect, useCallback } from 'react';

function Carousel() {
    // init variables
    const autoCarouselTimer = 3333;
    // const activeCarouselTimer = 33333;
    const fetchTimer = 5000;
    const [timerInterval, setTimerInterval] = useState(autoCarouselTimer);
    const [itemActive, setItemActive] = useState(0);
    const [isSpacebarLocked, setIsSpacebarLocked] = useState(false);
    
    // variable containing all API data
    const items = Conductor();

    // handle right arrow movement
    // useCallback = next() remains the same function instance across renders unless its dependencies change. 
    const next = useCallback(() => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive + 1) % items.length);
        } else { // play warning animation
            const footer = document.querySelector('footer');
            if (!footer.classList.contains('footer-shake')) {
                footer.classList.add('footer-shake');
                setTimeout(() => {
                    footer.classList.remove('footer-shake');
                }, 3000);
            }
        }
    }, [isSpacebarLocked, itemActive, items.length, setItemActive, setTimerInterval, autoCarouselTimer]);

    // handle left arrow movement
    // useCallback = prev() remains the same function instance across renders unless its dependencies change. 
    const prev = useCallback(() => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive - 1 + items.length) % items.length);
        } else { // play warning animation
            const footer = document.querySelector('footer');
            if (!footer.classList.contains('footer-shake')) {
                footer.classList.add('footer-shake');
                setTimeout(() => {
                    footer.classList.remove('footer-shake');
                }, 3000);
            }
        }
    }, [isSpacebarLocked, itemActive, items.length, setItemActive, setTimerInterval, autoCarouselTimer]);

    const handleKeyUp = (event) => {
        if (event.key === 'ArrowLeft') {
            prev();
        } else if (event.key === 'ArrowRight') {
            next();
        } else if (event.key === ' ') {
            setIsSpacebarLocked(!isSpacebarLocked);
            const item = document.querySelector('.thumbnail .item.active');
            item.classList.toggle('active-border');
            setTimerInterval(autoCarouselTimer); // reset the timer when unlocked
        }
    };

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    });

    // automatic Carousel
    useEffect(() => {
        const refreshInterval = setInterval(() => {
            if (!isSpacebarLocked) {
                next();
            }
        }, timerInterval);

        return () => {
            clearInterval(refreshInterval);
        };
    }, [itemActive, timerInterval, isSpacebarLocked, next]);

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
                <div>Press 'Space' to pause</div>
            </footer>
            
        </div>
    );
}

export default Carousel;
