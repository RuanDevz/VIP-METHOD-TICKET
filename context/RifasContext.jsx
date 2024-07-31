import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context state
const defaultValue = {
    rifasAvailable: 0,
    setRifasAvailable: () => {},
};

const RifasContext = createContext(defaultValue);

const RifasProvider = ({ children }) => {
    const [rifasAvailable, setRifasAvailable] = useState(defaultValue.rifasAvailable);

    return (
        <RifasContext.Provider value={{ rifasAvailable, setRifasAvailable }}>
            {children}
        </RifasContext.Provider>
    );
};

export { RifasContext, RifasProvider };
