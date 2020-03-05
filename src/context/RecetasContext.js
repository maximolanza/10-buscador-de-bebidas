import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();


const RecetasProvider = (props) =>{
const [ recetas, guardarRecetas ] = useState([]);
const [ busqueda, buscarRecetas ]  = useState({
    ingrediente: '',
    categoria: ''
})
    return(
<RecetasContext.Provider
value={{
    buscarRecetas
}}
>

</RecetasContext.Provider>

    )
}

export default RecetasProvider;