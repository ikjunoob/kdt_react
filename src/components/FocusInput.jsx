import { useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus(); // input에 포커스 이동
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="클릭하면 포커스됨" />
            <button onClick={focusInput}>포커스</button>
        </div>
    );
};

export default FocusInput;
