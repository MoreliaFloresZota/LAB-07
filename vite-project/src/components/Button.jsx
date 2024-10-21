import { useState } from "react";

export const Button = () => {
    const [count, setCount] = useState(0);

    function handlerButton() {
        setCount(count + 5); // Incrementa el contador en 5
    }

    return (
        <button onClick={handlerButton}>
            {count}
        </button>
    );
}
