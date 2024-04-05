import React, { useState, useEffect } from 'react';
import '../../assets/styles/Carousel.css';
import ServiceNowLogo from '../../assets/images/servicenow-full.jpg';
import CrowdStrikeLogo from '../../assets/images/crowdstrike-full.png';
import ExtraHopLogo from '../../assets/images/extrahop-full.jpg';
import Thumbnails from './thumbnails';

function Carousel() {
    // define the items on the carousel
    const items = [
        {
            logo: ServiceNowLogo,
            acronym: 'Ticket System',
            name: 'ServiceNow',
            description: '2 Calls queued',
            events: '2', // aggregate # of events and send to thumbnails
        },
        {
            logo: CrowdStrikeLogo,
            acronym: 'Endpoint Detection and Response',
            name: 'CrowdStrike',
            description: '1 Critical and 6 High detections',
            events: '7', // aggregate # of events and send to thumbnails
        },
        {
            logo: ExtraHopLogo,
            acronym: 'Network Detection and Response',
            name: 'ExtraHop',
            description: '6 Critical detections, 30 High detections',
            events: '36', // aggregate # of events and send to thumbnails
        },
    ];

    // init variables
    const [itemActive, setItemActive] = useState(0);
    const defaultTimer = 3333;
    const extendedTimer = 33333;
    const [timerInterval, setTimerInterval] = useState(defaultTimer);
    const [isSpacebarLocked, setIsSpacebarLocked] = useState(false);

    // handle left and right movement
    const next = () => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive + 1) % items.length);
            setTimerInterval(defaultTimer);
        }
    };
    const prev = () => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive - 1 + items.length) % items.length);
            setTimerInterval(defaultTimer);
        }
    };

    // take an action when the key is released
    const handleKeyUp = (event) => {
        if (event.key === 'ArrowLeft') {
            prev();
            setTimerInterval(extendedTimer);
        } else if (event.key === 'ArrowRight') {
            next();
            setTimerInterval(extendedTimer);
        } else if (event.key === ' ') {
            setIsSpacebarLocked(!isSpacebarLocked);
            const item = document.querySelector('.thumbnail .item.active');
            item.classList.toggle('active-border');
            setTimerInterval(defaultTimer);
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
    }, [itemActive, timerInterval, isSpacebarLocked]);

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

                <div className='pause'>
                    <button>Pause</button>
                </div>

                {/* TODO, add pause and unpause button logic */}
            </div>
            <Thumbnails items={items} itemActive={itemActive} />
        </div>
    );
}

export default Carousel;
