import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';




function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const Receta = ({ receta }) => {

  // Configuracion del modal de material-ui

  const [ modalStyle ] = useState( getModalStyle  );
  const [ open, setOpen ] = useState(false);


  const classes = useStyles();

  const handleOpen  = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

const { informacion, guardarIdReceta, guardarInformacion } = useContext ( ModalContext);
  
  const mostrarIngredientes = info => {
    let ingredientes = [];

    for( let i = 1; i < 16; i++){
      if( informacion[`strIngredient${i}`]){
        ingredientes.push(
          <li> { informacion[`strIngredient${i}`] }  { informacion[`strMeasure${i}`] }</li>
        )
      }
    }

    return ingredientes;
  }


  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header"> {receta.strDrink}</h2>

        <img
          className="card-img-top mt-5"
          key={receta.idDrink}
          alt={`Imagen de ${receta.strDrink}`}
          src={receta.strDrinkThumb}
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary"
            onClick={ () => {
              guardarIdReceta( receta.idDrink );
              handleOpen();}
            }
          >
            Ver más</button>

            <Modal
              open={ open }
              onClose={() => {
                handleClose();
                guardarIdReceta(null);
                guardarInformacion();
              }}>
              <div style={ modalStyle } className={ classes.paper }>
                <h4> { informacion.strDrink }</h4>
                <h5 className="mt-4"> Instrucciones </h5>
              <p>
              { informacion.strInstructions }
              </p>
              <img className="img-fluid my-4" src={ informacion.strDrinkThumb } />
                <h3> Ingredientes y cantidades </h3> 
                <ul>
                  { mostrarIngredientes( informacion )}
                </ul>
              
                </div>
            </Modal>
        </div>

      </div>
    </div>

  );
}

export default Receta;