import React, { createContext, useState } from 'react';

const MyContext = createContext();

function ProviderContext ( props ) {
    const hola = "hola"
    console.log("hol")
    
    return(
        <MyContext.Provider
            value={hola}>
                {props.children}
        </MyContext.Provider>
    )
    console.log("hola")
}


export { ProviderContext };