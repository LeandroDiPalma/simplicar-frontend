import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Bienvenido a SimpliCar</h1>
            <p className="text-xl text-center mb-8">Explora nuestra amplia gama de vehículos y ofertas.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="h-12 w-12" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/car-icon.png" alt="Vehicles" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">Vehículos</div>
                        <p className="text-gray-500">Explora nuestro inventario.</p>
                        <Link to="/dealers/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Ver Vehículos
                        </Link>
                    </div>
                </div>

                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="h-12 w-12" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/tag-icon.png" alt="Offers" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">Ofertas</div>
                        <p className="text-gray-500">Descubre promociones especiales.</p>
                        <Link to="/dealers/someDealerId/offers" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Ver Ofertas
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
