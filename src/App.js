import React from "react";
import "./App.css"
import { Header } from "./header"
import { Panel } from "./panel"
import { Button } from "./button";
import { useState } from "react";
import { evaluate } from "mathjs"

const App = () => {
  const [valorActual, setValor] = useState(0);

  const setNumero = (valor) => {
    if ( valor == "." && valorActual === 0){
      setValor("0.")
      console.log(valor)
    } else if ( valorActual === 0 ){
      setValor( valor )
    }
    else {setValor( valorActual.toString() + valor.toString() )}
  }

  const setOperador = (val) => {
    setValor( valorActual + val );
  }

  const setClear = () =>{
    setValor( 0 )
  }

  return (
    <div>
      <Header/>
      <div className="calculadora">
        <Panel
        panelIngreso = {valorActual}/>
        <div className="teclado">
          <div className="fila">
            <Button setNumero = {() => setNumero(7)}>7</Button>
            <Button setNumero = {() => setNumero(8)}>8</Button>
            <Button setNumero = {() => setNumero(9)}>9</Button>
            <Button setNumero = {() => setNumero("*")}>*</Button>
          </div>
          <div className="fila">
            <Button setNumero = {() => setNumero(4)}>4</Button>
            <Button setNumero = {() => setNumero(5)}>5</Button>
            <Button setNumero = {() => setNumero(6)}>6</Button>
            <Button setNumero = {() => setNumero("-")}>-</Button>
          </div>
          <div className="fila">
            <Button setNumero = {() => setNumero(1)}>1</Button>
            <Button setNumero = {() => setNumero(2)}>2</Button>
            <Button setNumero = {() => setNumero(3)}>3</Button>
            <Button setNumero = {() => setNumero("+")}>+</Button>
          </div>
          <div className="fila">
            <Button setNumero = {() => setNumero(".")}>.</Button>
            <Button setNumero = {() => setNumero(0)}>0</Button>
            <Button setNumero = {() => setOperador("=")}>=</Button>
            <Button setNumero = {() => setNumero("/")}>/</Button>
          </div>
          <div className="fila">
            <button 
            className="clear"
            onClick={setClear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
