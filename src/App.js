import React from "react";
import "./App.css"
import { Header } from "./header"
import { Todo } from "./todo"

const App = () => {

  return (
    <div>
      <Header/>
      <div className="campo-todo">
        <p className="intro">Mis tareas</p>
        <Todo>heyy</Todo>
      </div>
    </div>
  )
};

export default App;
