import React from 'react'

const Controller = ({ onClickButton }) => {
    const ButtonValues = [-100, -10, -1, 1, 10, 100];

    return (
        <div>
            {ButtonValues.map((btn, i) => (
                <button key={i} onClick={() => onClickButton(btn)}>
                    {btn > 0 ? `+${btn}` : btn}
                </button>
            ))}
        </div>
    );
};

export default Controller;
