import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda]= useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e)=> {
    //crear estado y actualizarlo
    setBusqueda(e.target.value);

    //filtrar para buscar coincidencias
    let pelis_encontradas= listadoState.filter(peli=>{
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    if(busqueda.length <=1 || pelis_encontradas <=0){
      pelis_encontradas= JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }

    //actualizar estado del listado principal con lo filtrado
    setListadoState(pelis_encontradas);


  }

  return (
    <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>

                {(noEncontrado === true && busqueda.length >1) && (
                  <span className='no-encontrado'>No se han encontrado coincidencias</span>
                )}
                
                <form>
                    <input type="text"
                            id="search_field"
                            name= "busqueda"
                            autoComplete='off'
                            //value={busqueda}
                            onChange={buscarPeli}
                    />
                    <button id='search'>Buscar</button>
                </form>
            </div>
  )
}
