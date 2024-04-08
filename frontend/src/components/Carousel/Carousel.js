/**
 * Author: Deric Le
 * Description: The carousel/slideshow thingy
 */

import '../../assets/styles/Carousel.css';
import ServiceNowLogo from '../../assets/images/servicenow-full.jpg';
import CrowdStrikeLogo from '../../assets/images/crowdstrike-full.png';
import ExtraHopLogo from '../../assets/images/extrahop-full.jpg';

import Thumbnails from './Thumbnails';

import React, { useState, useEffect, useCallback } from 'react';

function Carousel() {
    // define the items on the carousel
    const items = [
        {
            logo: ServiceNowLogo,
            acronym: 'Ticket System',
            name: 'ServiceNow',
            description: '2 Calls queued',
            events: '2', // aggregate # of events and send to thumbnails
            url: 'https://tamu.service-now.com/',
        },
        {
            logo: CrowdStrikeLogo,
            acronym: 'Endpoint Detection and Response',
            name: 'CrowdStrike',
            description: '1 Critical and 6 High detections',
            events: '7', // aggregate # of events and send to thumbnails
            url: 'https://falcon.crowdstrike.com/',
        },
        {
            logo: ExtraHopLogo,
            acronym: 'Network Detection and Response',
            name: 'ExtraHop',
            description: '6 Critical detections, 30 High detections',
            events: '36', // aggregate # of events and send to thumbnails
            url: 'https://eda.extrahop.cloud.tamu.edu/',
        },
    ];

    // init variables
    const defaultTimer = 3333;
    const extendedTimer = 33333;
    const [itemActive, setItemActive] = useState(0);
    const [timerInterval, setTimerInterval] = useState(defaultTimer);
    const [isSpacebarLocked, setIsSpacebarLocked] = useState(false);
    const [isWarning, setIsWarning] = useState(false);    

    // handle right movement
    // useCallback = next() remains the same function instance across renders unless its dependencies change. 
    const next = useCallback(() => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive + 1) % items.length);
            setTimerInterval(defaultTimer);
        } else {
            const footer = document.querySelector('footer');
            if (!isWarning) {
                setIsWarning(true);
                footer.classList.toggle('footer-shake');
                setTimeout(() => {
                    setIsWarning(false);
                    footer.classList.toggle('footer-shake');
                }, 3000);
            }
        }
    }, [isSpacebarLocked, itemActive, items.length, setItemActive, setTimerInterval, defaultTimer, isWarning, setIsWarning]);

    // handle left movement
    // useCallback = prev() remains the same function instance across renders unless its dependencies change. 
    const prev = useCallback(() => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive - 1 + items.length) % items.length);
            setTimerInterval(defaultTimer);
        } else {
            const footer = document.querySelector('footer');
            if (!isWarning) {
                setIsWarning(true);
                footer.classList.toggle('footer-shake');
                setTimeout(() => {
                    setIsWarning(false);
                    footer.classList.toggle('footer-shake');
                }, 3000);
            }
        }
    }, [isSpacebarLocked, itemActive, items.length, setItemActive, setTimerInterval, defaultTimer, isWarning, setIsWarning]);

    const handleKeyUp = (event) => {
        if (event.key === 'ArrowLeft') {
            prev();
            setTimerInterval(extendedTimer); // extend the timer when recently pressed arrow keys
        } else if (event.key === 'ArrowRight') {
            next();
            setTimerInterval(extendedTimer); // extend the timer when recently pressed arrow keys
        } else if (event.key === ' ') {
            setIsSpacebarLocked(!isSpacebarLocked);
            const item = document.querySelector('.thumbnail .item.active');
            item.classList.toggle('active-border');
            setTimerInterval(defaultTimer); // reset the timer when unlocked
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
                            <img src={item.logo} alt={item.name} />
                            <div className="content">
                                <p>{item.description}</p>
                                <h2>{item.name}</h2>
                                <p>{item.acronym}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Thumbnails items={items} itemActive={itemActive} />

            <footer>
                <div>Navigate w/ Arrow Keys</div>
                <div>Press 'Space' to pause</div>
            </footer>
            
        </div>
    );
}

export default Carousel;
