/**
 * Author: Deric Le
 * Description: Handles ServiceNow API
 */

const FetchSNOW = async () => {
    try {
        const fetchCalls = await fetch('http://localhost:8000/api/SNOW/calls');
        if (!fetchCalls.ok) { throw new Error('Failed to fetch calls from SNOW'); }

        const calls = await fetchCalls.json();
        return calls;

    } catch (error) { 
        console.error('Error fetching data:', error);
        return null;
    }
    
};

export default FetchSNOW;
