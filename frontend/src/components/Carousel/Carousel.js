/**
 * Author: Deric Le 
 * Description: The Carousel is the container for all data.
 */

import '../../assets/styles/Carousel.css'
import ServiceNowLogo from '../../assets/images/servicenow-full.jpg'
import CrowdStrikeLogo from '../../assets/images/crowdstrike-full.png'
import ExtraHopLogo from '../../assets/images/extrahop-full.jpg'

import Thumbnails from './thumbnails'

import React, { useState, useEffect } from 'react';

function Carousel() {
    // define the items on the carousel
    const items = [
        {
        logo: ServiceNowLogo,
        acronym: '',
        name: 'ServiceNow',
        description: '2 Calls queued',
        events: '2', // aggregate # of events and send to thumbnails
        },
        {
        logo: CrowdStrikeLogo,
        acronym: '',
        name: 'CrowdStrike',
        description: '1 Critical and 6 High detections',
        events: '7', // aggregate # of events and send to thumbnails
        },
        {
        logo: ExtraHopLogo,
        acronym: '',
        name: 'ExtraHop',
        description: '6 Critical detections, 30 High detections',
        events: '36', // aggregate # of events and send to thumbnails
        }
    ];

    // init variables
    const [itemActive, setItemActive] = useState(0);
    const itemCount = items.length;
    const [timerInterval, setTimerInterval] = useState(3333);
    
    // handle left and right movement
    const next = () => { setItemActive((itemActive + 1) % itemCount); setTimerInterval(3333); }
    const prev = () => { setItemActive((itemActive - 1 + itemCount) % itemCount); setTimerInterval(3333); }

    // 'keydown' doesn't do anything, just an intermediate point
    // that comes before the action taken after 'keyup'
    const handleKeyDown = ((event) => {
        if (event.key === 'ArrowLeft') {
            setTimerInterval(9999999);
        } else if (event.key === 'ArrowRight') {
            setTimerInterval(9999999);
        }
    });
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);
    
    // take an action when the key is released
    const handleKeyUp = ((event) => {
        if (event.key === 'ArrowLeft') {
            prev();
            setTimerInterval(9999);
        } else if (event.key === 'ArrowRight') {
            next();
            setTimerInterval(9999);
        }
    });
    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp]);
    
    // automatic Carousel
    useEffect(() => {
        const refreshInterval = setInterval(() => {
            next();
        }, timerInterval);

        return () => {
            clearInterval(refreshInterval);
        }
    }, [itemActive, timerInterval]);

    // TODO : Implement spacebar feature to lock current slide
    // TODO : Setup data processor component to process API data to sent to Thumbnails

    return (
        <div>
            <div className="Carousel">
                <div className="list"> 
                {items.map((item, index) => (
                    <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                        <img src={item.logo} alt={item.name} />
                        <div className="content">
                            <p>{item.acronym}</p>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        <Thumbnails items={items} itemActive={itemActive} />

        </div>
    );
}

export default Carousel;