import React, { useState } from 'react'

export const Crear = () => {

const tituloComponente = "Añadir pelicula";

const [ peliState, setPeliState ]= useState({
    titulo:"",
    descripcion:""
});

const {titulo, descripcion}= peliState;

const conseguirDatosForm =e =>{
    e.preventDefault();

    //conseguir datos del formulario
    let target= e.target;
    let titulo= target.titulo.value;
    let descripcion = target.descripcion.value;

    //crear objeto de la pelicula a guardar
    let peli ={
        id: new Date().getTime(),
        titulo,
        descripcion
    };

    setPeliState(peli);

    console.log(peliState);
}

  return (
    <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <strong>
                {(titulo && descripcion) && "Has creado la pelicula: "+titulo}
                </strong>
                
                <form onSubmit={conseguirDatosForm}>
                    <input type="text"
                    id="titulo"
                    name="titulo" 
                    placeholder="titulo"/>
                    
                    <textarea 
                    id="descripcion"
                    name="descripcion" 
                    placeholder="descripcion"></textarea>

                    <input type="submit"
                    id="save"
                     value="Guardar"/>
                </form>

            </div>
  )
}
