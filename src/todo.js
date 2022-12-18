import "./todo.css"
import React, {useContext}  from "react"
import { ProviderContext } from "./context"

function Todo( {completada, completarTarea, eliminarTarea, texto} ){
    const context = useContext(ProviderContext);
    console.log(context)

    return(
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="item-todo"
            onClick={() => completarTarea()}>
                {context}
            </div>
            
            <button
            onClick={() => eliminarTarea()}
            ></button>
        </div>
    )
}

export { Todo }