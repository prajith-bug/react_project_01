import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }

    return (
        <>
        <h2>{count}</h2>
        <button onClick={increment}>plus</button>
        <button onClick={decrement}>-</button>
        </>
    )
}


export default Counter;