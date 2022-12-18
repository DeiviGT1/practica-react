import React from "react";
import { useState } from "react";

function useLocalStorage(){
    
    const localStorageActual = localStorage.getItem("TAREAS_V1");
    let parsedTareas;

    if (!localStorageActual) {
        localStorage.setItem("TAREAS_V1", JSON.stringify("[]"));
        parsedTareas = []
    } else {
        parsedTareas = JSON.parse(localStorageActual)
    }

    const [tareas, setTareas] = useState(parsedTareas);

}

export { useLocalStorage }