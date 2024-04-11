/**
 * Author: Deric Le
 * Description: Handles CrowdStrike API
 */

const FetchCS = async () => {
    try {
        const fetchCriticals = await fetch('http://localhost:8000/api/CS/detections/criticals');
        if (!fetchCriticals.ok) { throw new Error('Failed to fetch criticals from CS'); }

        const fetchHighs = await fetch('http://localhost:8000/api/CS/detections/highs');
        if (!fetchHighs.ok) { throw new Error('Failed to fetch criticals from CS'); }

        const criticals = await fetchCriticals.json();
        const highs = await fetchHighs.json();

        return {criticals: criticals, highs: highs};

    } catch (error) { 
        console.error('Error fetching data:', error);
        return null;
    }
    
};

export default FetchCS;
