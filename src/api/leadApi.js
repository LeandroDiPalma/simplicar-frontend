export const getLeads = async (dealerId) => {
    const response = await fetch(`http://localhost:3000/api/dealer/${dealerId}/leads`, {
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};

export const submitLead = async (dealerId, leadData) => {
    try {
        const response = await fetch(`http://localhost:3000/api/dealer/${dealerId}/leads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();  
    } catch (e) {
        console.error("Failed to submit lead: ", e);
        throw e; 
    }
};