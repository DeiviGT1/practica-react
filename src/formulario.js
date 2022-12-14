import "./formulario.css"
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function Formualario ( { onSubmit, eliminarTarea } ) {
    const [input, setInput] = useState("")

    const manejoCambio = (event) => {
        setInput(event.target.value);
    }

    const manejoEnvio = (event) => {
        event.preventDefault();
        const  tareaNueva = {
            id: uuidv4(),
            texto : input,
            completada : false
        }

        onSubmit(tareaNueva);
    }

    

    return(
        <form
        onSubmit={manejoEnvio}>
            <input className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejoCambio}
            />
            <button className="tarea-boton"
            onClick={eliminarTarea}>
                Agregar tarea
            </button>
        </form>
    )
}

export {Formualario}