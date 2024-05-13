import React, { useState, useEffect } from 'react';
import VehicleCard from '../components/VehicleCard'; 
import { getVehicles } from '../api/vehicleApi'; 
import { useDealer } from '../context/DealerContext';

function VehiclesPage() {
    const { dealer } = useDealer()
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchVehicles() {
            try {
                const data = await getVehicles(dealer._id);
                setVehicles(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch vehicles');
                setLoading(false);
            }
        }

        fetchVehicles();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-6">Vehiculos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map(vehicle => (
                    <VehicleCard key={vehicle._id} vehicle={vehicle} />
                ))}
            </div>
        </div>
    );
}

export default VehiclesPage;
