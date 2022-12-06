import React from 'react';

function Base(props) {
  return (
    <div>
      <header>
          <span>
            <h1> Este es mi primera pagina web con React</h1>
          </span>
        <p>
            Heyy {props.nombre}
        </p>
      </header>
    </div>
  )
}

export default Base