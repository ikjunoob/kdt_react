import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increamentCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>현재 Count : {count}</h1>

            <button>-</button>
            <button>reset</button>
            <button onClick={increamentCount}>+</button>
        </div>
    )
}

export default Counter