import React, { useContext, useState } from 'react';
import CategoriasProvider, { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

const [ busqueda, guardarBusqueda ] = useState({
    nombre: '',
    categoria: ''
})
const { categorias } = useContext(CategoriasContext);

// funcion para leer los contenidos

const obtenerDatosReceta = e => {
    guardarBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    })
}

console.log(categorias);
    return (
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend> Busca bebidas por cateogoria o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange= { obtenerDatosReceta }
                    />
                </div>

                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={ obtenerDatosReceta }
                    >
                        <option> Seleccionar categoría   </option>

                        {categorias.map( categorias => (
                            <option 
                            key={ categorias.strCategory }
                            value={ categorias.strCategory }
                            >{ categorias.strCategory }</option>

                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                        />
                </div>
            </div>
        </form>

    );
}

export default Formulario;