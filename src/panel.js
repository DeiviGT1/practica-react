import "./panel.css"

function Panel({ panelIngreso }){
    return (
        <div className="panel">
            <p>{panelIngreso}</p>
        </div>
    )
}

export {Panel}