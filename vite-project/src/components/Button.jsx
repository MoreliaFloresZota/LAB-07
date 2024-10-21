import { useState } from "react";

export const Button = () => {
    const [count, setCount] = useState(0);

    function handlerButton() {
        const randomValue = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
        alert(`Valor aleatorio: ${randomValue}`);
        setCount(count + 1); // Opcionalmente puedes seguir incrementando el contador
    }

    return (
        <button onClick={handlerButton}>
            {count}
        </button>
    );
}

