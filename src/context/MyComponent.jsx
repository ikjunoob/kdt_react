import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

// Context 값 사용
const MyComponent = () => {
    const { value, setValue } = useContext(MyContext);

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue("Updated from MyComponent!")}>
                Update Value
            </button>
        </div>
    );
};

export default MyComponent;
