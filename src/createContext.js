import React from "react";

const tareaContext = React.createContext();

// En el provider se guardan todos los parametros necesarios de App.js
function TareaProvider (props) {
    //Acá van las funciones como const que usaremos

    return(
        //Todas las funciones qu queremos compartir estaran en value
        <tarea.Provider value = {{
            // Se llaman las funciones definidas anteriormente para que tengan el parametro al mommento de llamarlo
        }}>
            {props.children}
        </tarea.Provider>
    )
}

// export 
export {TareaProvider, tareaContext}


// El consumer es el elemento que llamaremos cuando necesitamos algo del provider
{/* <tarea.Consumer></tarea.Consumer> */}

// Por ultimo en index haremos y con esto tendremo:
<>
<TareaProvider>
    <App />
</TareaProvider> 

{/* // Y por el lado de App.js tenemos que agregar */}
<Tarea.Provider>
    {value = () =>{
        return(
            <>
            Aca incluimos el jsx y con value.argumento
            {/* (Tambien podriamos poner {argumento, argumento} en lugar de value. ... 
            ** Puedo volver a ver la clase ya que es un poco complejo al momento de utilizar*/}
            </>
        )
    }}
</Tarea.Provider>


</>