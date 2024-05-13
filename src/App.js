import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VehiclesPage from './pages/Vehicles';
import OfferDetailPage from './pages/OfferDetail';
import ThankYouPage from './pages/ThankYouPage';
import './styles/output.css'
import DealersList from './pages/Dealer';
import { DealerProvider } from './context/DealerContext';
import OffersPage from './pages/Offers';

function App() {
  return (
    <DealerProvider>
      <Router>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dealers/:dealerId/vehicles" element={<VehiclesPage />} />
            <Route path="/dealers" element={<DealersList />} />
            <Route path="/dealers/:dealerId/offers" element={<OffersPage />} />
            <Route path="/dealers/:dealerId/offers/:offerId" element={<OfferDetailPage />} />
            <Route path="/thanks" element={<ThankYouPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DealerProvider>
  );
}

export default App;
