import "./todo.css"

function Todo( props ){
    return(
        <div className={props.completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="item-todo"
            onClick={() => props.completarTarea()}>
                { props.texto }
            </div>
            
            <button
            onClick={() => props.eliminarTarea()}
            ></button>
        </div>
    )
}

export { Todo }