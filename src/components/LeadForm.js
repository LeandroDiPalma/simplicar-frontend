import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitLead } from '../api/leadApi';
import { useDealer } from '../context/DealerContext';

function LeadForm({ postId }) {
    const { dealer } = useDealer();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!dealer) {
            alert('Dealer information is not available.');
            return;
        }

        try {
            await submitLead(dealer._id, {
                ...formData,
                dealer: dealer._id,
                post: postId
            });
            navigate(`/thanks`);
        } catch (error) {
            console.error('Failed to submit lead:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Apellido"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Mail"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Recibir información
            </button>
        </form>
    );
}

export default LeadForm;
