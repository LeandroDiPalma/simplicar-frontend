import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { submitLead } from '../api/leadApi';
import { getPostById } from '../api/postApi';

function OfferDetailPage() {
    const { dealerId, offerId } = useParams();
    const [offer, setOffer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [lead, setLead] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOffer() {
            try {
                const data = await getPostById(dealerId, offerId);
                setOffer(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch offer details');
                setLoading(false);
            }
        }

        fetchOffer();
    }, [dealerId, offerId]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLead(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitLead(dealerId, offerId, lead); 
            navigate(`/thanks/${offerId}`); 
        } catch (err) {
            setError('Failed to submit lead');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-6">{offer?.title}</h1>
            <p>{offer?.description}</p>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    name="name"
                    value={lead.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={lead.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="input"
                    required
                />
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default OfferDetailPage;
