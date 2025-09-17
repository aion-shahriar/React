import { useState } from "react"


export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);

    }



    const counterStyle={
        border: "1px solid green"
    }
    return (
        <div style={counterStyle}>
            <h3> Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}