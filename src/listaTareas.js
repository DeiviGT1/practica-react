import {Formualario} from "./formulario"
import {Todo} from "./todo"
import { useState } from "react"

function ListaDeTareas ( { texto, completada } ) {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
        if ( tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim()
            const tareasActuales = [tarea, ... tareas];
            setTareas(tareasActuales)
        }
    }

    const eliminarTarea = (id) => {
        console.log(id)
        const tareasActuales = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActuales)
    }

    const completarTarea = (id) =>{
        
        const tareasActuales = tareas.map(tarea=>{
            if (tarea.id == id){
                console.log(tarea.completada)
                //invierte el estado de la tarea cuando encuentra el id buscado
                tarea.completada = !tarea.completada;
                console.log(tarea.completada)
            }
            return tarea
        });
        setTareas(tareasActuales)
    }

    return(
        <>
            <Formualario
            onSubmit = {agregarTarea}
            />
            <div className="tarea-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Todo
                        key = {tarea.id}
                        id = {tarea.id}
                        texto = {tarea.texto}
                        completada = {tarea.completada}
                        eliminarTarea = {()=> eliminarTarea(tarea.id)}
                        completarTarea = {()=> completarTarea(tarea.id)}
                        />    
                    )
                }
            </div>
        </>
    )
}

export {ListaDeTareas}