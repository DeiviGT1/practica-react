function Boton(props) {

    const numbers = Array.from({ length: props.numeros }, (_, i) => i);
    const handleClick = (number) => {
        console.log(number);
      }

    return(
        <div>
        {numbers.map(number => (
            <button key={number} onClick={() => handleClick(number)}>boton {number}</button>
        ))}
        </div>
    )
}

export default Boton