import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-blue-600 text-white p-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg font-bold">SimpliCar</h2>
                        <p>La mejor experiencia de compra y venta de autos.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold">Productos</h3>
                            <ul>
                                <li><Link to="/vehicles" className="hover:underline">Vehículos</Link></li>
                                <li><Link to="/accessories" className="hover:underline">Accesorios</Link></li>
                                <li><Link to="/offers" className="hover:underline">Ofertas</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Compañía</h3>
                            <ul>
                                <li><Link to="/about" className="hover:underline">Sobre Nosotros</Link></li>
                                <li><Link to="/contact" className="hover:underline">Contacto</Link></li>
                                <li><Link to="/careers" className="hover:underline">Carreras</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    © 2021 SimpliCar - Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
