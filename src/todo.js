import "./todo.css"

function Todo( props ){
    return(
        <div className="todo">
            <p className="item-todo">{ props.children }</p>
            <input type="checkbox"></input>
        </div>
    )
}

export { Todo }