import "./button.css"

function Button ({ texto, tipoDeBoton, manejoClic }) {
    return(
        <button 
        className={ tipoDeBoton ? "boton-click" : "boton-reiniciar" }
        onClick = {manejoClic} >
            {texto}</button>
    )
}

export {Button}