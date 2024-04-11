/**
 * Author: Deric Le
 * Description: Handles Elastic API
 */

const FetchEL = async () => {
    try {
        const fetchCriticals = await fetch('http://localhost:8000/api/EL/detections/criticals');
        if (!fetchCriticals.ok) { throw new Error('Failed to fetch criticals from EL'); }

        const fetchHighs = await fetch('http://localhost:8000/api/EL/detections/highs');
        if (!fetchHighs.ok) { throw new Error('Failed to fetch criticals from EL'); }

        const criticals = await fetchCriticals.json();
        const highs = await fetchHighs.json();

        return {criticals: criticals, highs: highs};

    } catch (error) { 
        console.error('Error fetching data:', error);
        return null;
    }
    
};

export default FetchEL;
