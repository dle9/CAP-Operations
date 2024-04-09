/**
 * Author: Deric Le
 * Description: The carousel/slideshow thingy
 */

import '../../assets/styles/Carousel.css';
import ServiceNowLogo from '../../assets/images/servicenow-full.jpg';
import CrowdStrikeLogo from '../../assets/images/crowdstrike-full.png';
import ExtraHopLogo from '../../assets/images/extrahop-full.jpg';

import Thumbnails from './Thumbnails';
import FetchSNOW from './items/ServiceNow';
import FetchCS from './items/CrowdStrike';
import FetchEH from './items/ExtraHop';

import React, { useState, useEffect, useCallback } from 'react';

function Carousel() {
    // init variables
    const autoCarouselTimer = 3333;
    const activeCarouselTimer = 33333;
    const fetchTimer = 5000;
    const [timerInterval, setTimerInterval] = useState(autoCarouselTimer);
    const [itemActive, setItemActive] = useState(0);
    const [isSpacebarLocked, setIsSpacebarLocked] = useState(false);
    const [isWarning, setIsWarning] = useState(false);    
    
    // variable containing all API data
    const [apiData, setApiData] = useState({
        SNOW: null,
        CS: null,
        EH: null,
    });

    // fetch the API data
    useEffect(() => {
        const fetchData = async () => {
            const SNOWdata = await FetchSNOW();
            const CSdata = await FetchCS();
            const EHdata = await FetchEH();

            setApiData({
                SNOW: SNOWdata,
                CS: CSdata, 
                EH: EHdata,
            })
            // setData2(response2.data.param1);
            // setData3(response3.data.param1);
        };

        fetchData();

        // refresh every 5 seconds and cleanup interval on component unmount
        const interval = setInterval(fetchData, fetchTimer); 
        return () => clearInterval(interval); 
    }, []);

    // define the items on the carousel
    const { SNOW, CS, EH } = apiData;
    const items = [
        {
            name: 'ServiceNow',
            acronym: "SNOW",
            description: 'Ticket System',
            details: SNOW ? `${SNOW.data} Calls queued` : 'Loading...',
            events: SNOW ? `${SNOW.data}` : '-', // aggregate # of events and send to thumbnails
            url: 'https://tamu.service-now.com/',
            logo: ServiceNowLogo,
        },
        {
            name: 'CrowdStrike',
            acronym: 'CS',
            description: 'Endpoint Detection and Response',
            details: CS ? `${CS.criticals.data} Critical and ${CS.highs.data} High detections` : 'Loading...',
            events: CS ? `${CS.criticals.data + CS.highs.data}`  : '-', // aggregate # of events and send to thumbnails
            url: 'https://falcon.crowdstrike.com/',
            logo: CrowdStrikeLogo,
        },
        {
            name: 'ExtraHop',
            acronym: 'EH',
            description: 'Network Detection and Response',
            details: EH ? `${EH.criticals.data} Critical and ${EH.highs.data} High detections` : 'Loading...',
            events: EH ? `${EH.criticals.data + EH.highs.data}`  : '-', // aggregate # of events and send to thumbnails
            url: 'https://eda.extrahop.cloud.tamu.edu/',
            logo: ExtraHopLogo,
        },
    ];

    // handle right movement
    // useCallback = next() remains the same function instance across renders unless its dependencies change. 
    const next = useCallback(() => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive + 1) % items.length);
            setTimerInterval(autoCarouselTimer);
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
    }, [isSpacebarLocked, itemActive, items.length, setItemActive, setTimerInterval, autoCarouselTimer, isWarning, setIsWarning]);

    // handle left movement
    // useCallback = prev() remains the same function instance across renders unless its dependencies change. 
    const prev = useCallback(() => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive - 1 + items.length) % items.length);
            setTimerInterval(autoCarouselTimer);
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
    }, [isSpacebarLocked, itemActive, items.length, setItemActive, setTimerInterval, autoCarouselTimer, isWarning, setIsWarning]);

    const handleKeyUp = (event) => {
        if (event.key === 'ArrowLeft') {
            prev();
            setTimerInterval(activeCarouselTimer); // extend the timer when recently pressed arrow keys
        } else if (event.key === 'ArrowRight') {
            next();
            setTimerInterval(activeCarouselTimer); // extend the timer when recently pressed arrow keys
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
                            <img src={item.logo} alt={item.name} />
                            <div className="content">
                                <p>{item.details}</p>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
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
