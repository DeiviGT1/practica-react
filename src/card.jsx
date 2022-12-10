import MyImage from "./images.png"
import "./card.css"

function Card(props){
    return(
        <div className="card">
            <img 
            src={MyImage}/>
            <div className="text">
                <h2><strong>{props.nombre.split(" ").slice(0, 2).join(" ")}</strong> 
                &nbsp;{props.nombre.split(" ").slice(2).join(" ")}</h2>

                <h3>{props.cargo.split(" ").slice(0,2).join(" ")}
                &nbsp;<strong>{props.cargo.split(" ").slice(2).join(" ")}</strong></h3>
                
                <p>{props.experiencia}</p>
            </div>
        </div>
    )
}

export {Card}