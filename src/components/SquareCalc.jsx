import React, { useState, useMemo } from 'react'

const SquareCalc = () => {

    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const squared = useMemo(()=>{
        console.log('제곱 계산중....')
        return number*number
    }, [number])

    return (
        <div>
            <h2>useMemo 예제 : 숫자의 제곱</h2>
            <input
                value={number}
                type="number"
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <p>{number}의 제곱은 ? ....</p>
            <button
                onClick={() => setCount(count + 1)}
            >
                카운트 증가 : {count}
            </button>
        </div>
    )
}

export default SquareCalc