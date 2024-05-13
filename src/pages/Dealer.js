import React, { useEffect, useState } from 'react';
import { getDealers } from '../api/dealerApi';
import { useNavigate } from 'react-router-dom';
import { useDealer } from '../context/DealerContext';

function DealersList() {
    const { updateDealer } = useDealer();
    const [dealers, setDealers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDealers = async () => {
            try {
                const data = await getDealers();
                setDealers(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch dealers');
                setLoading(false);
            }
        };

        fetchDealers();
    }, []);

    const selectDealer = (dealer) => {
        updateDealer(dealer);
        navigate(`/dealers/${dealer._id}/vehicles`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center my-4">Selecciona un Concesionario</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {dealers.map(dealer => (
                    <div key={dealer._id} className="p-4 bg-white rounded-lg shadow-lg cursor-pointer" onClick={() => selectDealer(dealer)}>
                        <h2 className="text-xl font-bold">{dealer.name}</h2>
                        <p>{dealer.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DealersList;
