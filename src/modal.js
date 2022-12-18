import React from 'react';
import ReactDOM from 'react-dom';

//De esta forma, lo que tengamos en este nodo podrá utilizar las funciones o metodos del nodo root en el archivo App
// Utilizando CSS podemos hacer que esto quede encima del resto de elementos y será un modal


function Modal ( { children,  } ){
    
    return ReactDOM.createPortal(
        children,
        document.getElementById("modal")
    )
}

export { Modal }