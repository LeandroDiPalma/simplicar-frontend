const API_URL = 'http://localhost:3000/api';

export const getVehicles = async (dealerId) => {
    const response = await fetch(`${API_URL}/dealer/${dealerId}/vehicles`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};