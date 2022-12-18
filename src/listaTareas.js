import {Formualario} from "./formulario"
import {Todo} from "./todo"
import React, { useContext, useState } from "react"

// JSON.stringify convierte objeto en texto
// JSON.parse convierte texto en objeto

function ListaDeTareas ( ) {

    const localStorageActual = localStorage.getItem("TAREAS_V1");
    let parsedTareas;

    if (!localStorageActual) {
        localStorage.setItem("TAREAS_V1", JSON.stringify("[]"));
        parsedTareas = []
    } else {
        parsedTareas = JSON.parse(localStorageActual)
    }

    const [tareas, setTareas] = useState(parsedTareas);

    const saveTareas = (tareasActuales) => {
        localStorage.setItem("TAREAS_V1", JSON.stringify(tareasActuales))
        setTareas(tareasActuales)
    }

    const agregarTarea = (tarea) =>{
        if ( tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim()
            const tareasActuales = [tarea, ... tareas];
            saveTareas(tareasActuales);
        }
    }

    const eliminarTarea = (id) => {
        const tareasActuales = tareas.filter(tarea => tarea.id !== id);
        saveTareas(tareasActuales);
    }

    const completarTarea = (id) =>{
        
        const tareasActuales = tareas.map(tarea=>{
            if (tarea.id == id){
                //invierte el estado de la tarea cuando encuentra el id buscado
                tarea.completada = !tarea.completada;
            }
            return tarea
        });

        saveTareas(tareasActuales);
    }

    // Lo que está dentro de la funcion se ejecuta cuando se termina de renderizar
    // Se ejecutará el useEffect solamente cuando se ejecute alguna de las funcioes del segundo argumento
    React.useEffect(() => {
        // console.log("HOLA")
    }, []);

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