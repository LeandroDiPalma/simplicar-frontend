import React, { createContext, useContext, useState } from 'react';

const DealerContext = createContext();

export const useDealer = () => useContext(DealerContext);

export const DealerProvider = ({ children }) => {
    const [dealer, setDealer] = useState(null);

    const updateDealer = (newDealer) => {
        setDealer(newDealer);
    };

    return (
        <DealerContext.Provider value={{ dealer, updateDealer }}>
            {children}
        </DealerContext.Provider>
    );
};
