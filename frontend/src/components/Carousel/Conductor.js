/**
 * Author: Deric Le
 * Description: Manages API data, sends to Carousel
 */

// import notifSound from '../../assets/sounds/pop.mp3'
import notifSound from '../../assets/sounds/bmm.mp3'

import ServiceNowBg from '../../assets/images/servicenow-full.jpg';
import CrowdStrikeBg from '../../assets/images/crowdstrike2-full.jpg';
import ExtraHopBg from '../../assets/images/extrahop-full.jpg';
import ElasticBg from '../../assets/images/elastic2-full.jpg';

import FetchSNOW from './workers/servicenow';
import FetchCS from './workers/crowdstrike';
import FetchEH from './workers/extrahop';
import FetchEL from './workers/elastic';

import { useState, useEffect } from 'react';    

function Conductor() {
    const fetchTimer = 5000;
    const notifSoundEffect = new Audio(notifSound);

    // variable containing all API data
    const [apiData, setApiData] = useState({
        SNOW: null, // ServiceNow
        CS: null,   // CrowdStrike
        EH: null,   // ExtraHop
        EL: null,   // Elastic
    });

    // fetch the API data on cycle
    useEffect(() => {
        const fetchData = async () => {
            const SNOWdata = await FetchSNOW();
            const CSdata = await FetchCS();
            const EHdata = await FetchEH();
            const ELdata = await FetchEL();

            setApiData({
                SNOW: SNOWdata,
                CS: CSdata, 
                EH: EHdata,
                EL: ELdata,
            })

            notifSoundEffect.play();
        };

        fetchData();

        // refresh every 5 seconds and cleanup interval on component unmount
        const interval = setInterval(fetchData, fetchTimer); 
        return () => clearInterval(interval); 
    }, []);

    // define the items on the Carousel
    const { SNOW, CS, EH, EL } = apiData;
    const items = [
        {
            name: 'ServiceNow',
            acronym: "SNOW",
            description: 'Ticket System',
            details: SNOW ? `${SNOW.data} Calls queued` : 'Loading...',
            events: SNOW ? `${SNOW.data}` : '-', // aggregate # of events and send to thumbnails
            url: 'https://tamu.service-now.com/',
            background: ServiceNowBg,
        },
        {
            name: 'CrowdStrike',
            acronym: 'CS',
            description: 'Endpoint Detection and Response',
            details: CS ? `${CS.criticals.data} Critical and ${CS.highs.data} High detections` : 'Loading...',
            events: CS ? `${CS.criticals.data + CS.highs.data}`  : '-', // aggregate # of events and send to thumbnails
            url: 'https://falcon.crowdstrike.com/',
            background: CrowdStrikeBg,
        },
        {
            name: 'ExtraHop',
            acronym: 'EH',
            description: 'Network Detection and Response',
            details: EH ? `${EH.criticals.data} Critical and ${EH.highs.data} High detections` : 'Loading...',
            events: EH ? `${EH.criticals.data + EH.highs.data}`  : '-', // aggregate # of events and send to thumbnails
            url: 'https://eda.extrahop.cloud.tamu.edu/',
            background: ExtraHopBg,
        },
        {
            name: 'Elastic',
            acronym: 'EL',
            description: 'Security Information and Event Management',
            details: EL ? `${EL.criticals.data} Critical and ${EL.highs.data} High alerts` : 'Loading...',
            events: EL ? `${EL.criticals.data + EL.highs.data}`  : '-', // aggregate # of events and send to thumbnails
            url: 'https://my-deployment-03382f.kb.us-central1.gcp.cloud.es.io:9243/s/security-operations/app/home#/',
            background: ElasticBg,
        },
    ];

    return items;
}

export default Conductor;