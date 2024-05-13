import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {  useDealer } from '../context/DealerContext'; 

function Navbar() {
    const { dealer } = useDealer(); 

    return (
        <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">SimpliCar</Link>
            <div className="flex items-center space-x-4">
                <Link to="/" className="hover:text-gray-300">Inicio</Link>
                <Link to={`/dealers/${dealer?._id}/vehicles`} className="hover:text-gray-300">Vehículos</Link>
                <Link to={`/dealers/${dealer?._id}/offers`} className="hover:text-gray-300">Ofertas</Link>
            </div>
            {dealer && <span className="text-sm">(Dealer: {dealer.name})</span>}
        </nav>
    );
}

export default Navbar;
