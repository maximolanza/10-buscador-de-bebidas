import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// crear el context
export const ModalContext = createContext('');

// crear el Provider
const ModalProvider = (props) =>{

    // state del provider
    const [ idreceta, guardarIdReceta] = useState(null);
    
    const [ informacion, guardarInformacion ] = useState('');
    // una vez que tenemos una receta, llamar la api

    useEffect(() => {
        const obtenerDetalle = async () =>{
            if (!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ idreceta }`
            const respuesta = await axios(url);
            guardarInformacion(respuesta.data.drinks[0]);
            }
            obtenerDetalle();
    }, [ idreceta ]);
    
    return(
        <ModalContext.Provider
        value={{
            informacion,
            guardarIdReceta,
            guardarInformacion
        }}
        >
            {props.children}
        </ModalContext.Provider>
        
            )
        }
        
export default ModalProvider;
