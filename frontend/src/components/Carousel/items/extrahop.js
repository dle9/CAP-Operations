/**
 * Author: Deric Le
 * Description: Handles ExtraHop API
 */

const FetchEH = async () => {
    try {
        const fetchCriticals = await fetch('http://localhost:8000/api/EH/detections/criticals');
        if (!fetchCriticals.ok) { throw new Error('Failed to fetch criticals from EH'); }

        const fetchHighs = await fetch('http://localhost:8000/api/EH/detections/highs');
        if (!fetchHighs.ok) { throw new Error('Failed to fetch criticals from EH'); }

        const criticals = await fetchCriticals.json();
        const highs = await fetchHighs.json();

        return {criticals: criticals, highs: highs};

    } catch (error) { 
        console.error('Error fetching data:', error);
        return null;
    }
    
};

export default FetchEH;