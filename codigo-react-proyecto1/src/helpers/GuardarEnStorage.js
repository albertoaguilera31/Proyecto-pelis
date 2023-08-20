export const GuardarEnStorage= (clave, elemento) =>{
    //Conseguir los elementos que ya tenemos en localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos);
    //Comprobar si es un array
    if(Array.isArray(elementos)){
        //añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else{
        //crear un array con el nuevo elemento
        elementos=[elemento];
    }

    //Guardar en el localstograge
    localStorage.setItem(clave, JSON.stringify(elementos));
    //Devolver objeto guardado
    return elemento;

}