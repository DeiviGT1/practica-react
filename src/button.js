import "./button.css"

function Button(props){
    const esNumero = (valor) =>{
        return valor >= 0;
    }

    return(
        <div className={`es-numero${esNumero(props.children) ? "" : "-operador"}`}>
            <button
            onClick={props.setNumero}>{props.children}</button>
        </div>
    )
}

export {Button}