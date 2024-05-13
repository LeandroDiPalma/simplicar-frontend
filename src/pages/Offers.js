import React, { useState, useEffect } from 'react';
import { getPosts } from '../api/postApi';
import LeadForm from '../components/LeadForm';
import { useDealer } from '../context/DealerContext';

function OffersPage() {
    const { dealer } = useDealer();
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchOffers() {
            try {
                const data = await getPosts(dealer._id);
                setOffers(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch offers');
                setLoading(false);
            }
        }

        fetchOffers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-6">Ofertas disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map(offer => (
                    <div key={offer._id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">{offer.title}</h2>
                        <p>{offer.content}</p>

                        <LeadForm postId={offer._id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OffersPage;
