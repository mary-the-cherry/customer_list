import React, { createContext } from 'react';

//create the Context
export const ColorContext = createContext();

//add data to the Provider and set the ContextProvider for other components
const ColorContextProvider = (props) => {
    const colors = {
        female: 'pink',
        male: 'blue',
        other: 'yellow'
    };
    return (
        <ColorContext.Provider value={{
            colors: colors,
        }}>
            {props.children}
        </ColorContext.Provider>
    );
}
export default ColorContextProvider;
