import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props)=> {
    const [input,setInput]= useState('');
    const [query,setQuery]= useState('');
    return (
        <MovieContext.Provider value={{input: [input,setInput],query: [query,setQuery]}} > 
            {props.children}
        </MovieContext.Provider>
    );
}
