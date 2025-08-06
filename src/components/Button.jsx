import React from 'react'

// const button = () => {
//     return (
//         <button>button</button>
//     )
// }
const Button = ({ text, color = 'gray', children = null }) => {

    const onClickButton = () => {
        console.log(text)
    }

    return (
        <button style={{ color: color }} onClick={onClickButton}>
            {text} - {color.toUpperCase()} {children}
        </button>
    )
}

export default Button
