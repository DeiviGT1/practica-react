import React from "react";
import "./App.css"
import { Header } from "./header"
import { Button } from "./button"
import { Contador } from "./contador"
import { useState } from "react"

const App = () => {
  const [numClics, setNumClics] = useState(99)

  const Añadir = () =>{
    setNumClics(numClics + 1);
  }

  const Reiniciar = () =>{
    setNumClics(0)
  }


  return (
    <div>
      <Header/>
      <Contador
      numClics={numClics}/>
      <div className="botones">
        <Button
          texto = "Clic"
          tipoDeBoton = {true}
          manejoClic = {Añadir}/>
        <Button
          texto = "Reiniciar"
          tipoDeBoton = {false}
          manejoClic = {Reiniciar}/>
      </div>
    </div>
  )
};

export default App;
