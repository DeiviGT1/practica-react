import React from "react";
import "./App.css"
import { Header } from "./header"
import { ListaDeTareas } from "./listaTareas";
import { Modal } from "./modal"

const App = () => {

  return ( 
    <div>
      <Header/>
      <div className="campo-todo">
        <p className="intro">Mis tareas</p>     
        <ListaDeTareas>
          
        </ListaDeTareas>
        {/* <Modal>
          <p>Teleport</p>
        </Modal> */}

      </div>
    </div>
  )
};

export default App;
