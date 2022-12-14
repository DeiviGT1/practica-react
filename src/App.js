import React from "react";
import "./App.css"
import { Header } from "./header"
import { Todo } from "./todo"
import { Formualario } from "./formulario"
import { ListaDeTareas } from "./listaTareas";

const App = () => {

  const objectTodos = {
    idTodo : "tarea 1",
    idTodo2 : "tarea 2",
    idTodo3 : "tarea 3"
  }

  return ( 
    <div>
      <Header/>
      <div className="campo-todo">
        <p className="intro">Mis tareas</p>     
        <ListaDeTareas></ListaDeTareas>
        <div className="tarea-lista-contenedor">
                
          </div>

      </div>
    </div>
  )
};

export default App;
