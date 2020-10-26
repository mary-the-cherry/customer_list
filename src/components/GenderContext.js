import React, {createContext } from 'react';
export const PageContext = createContext();
const PageContextProvider = (props) => {
    const colors = {
        female: 'pink',
        male: 'blue',
        other: 'yellow'
    };
    return (
        <PageContext.Provider value={{
            colors: colors,
        }}>
            {props.children}
        </PageContext.Provider>
    );
}
export default PageContextProvider;
