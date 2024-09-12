import { useState } from 'react'

export function Counter2() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(5);
    let[inputValueNumber, setInputValue] = useState(0);


    const inputValue = (event) => {
        setInputValue (event.target.value);
    }
    const setValueFn = () => {
        setValue(Number(inputValueNumber));
    }


    return (
        <>
            <h1>Counter-2</h1>
            <input type="number" placeholder='Enter Number' onChange={inputValue} /><button onClick={setValueFn}>set</button>
            <p>current set value :{value}</p>
            <button onClick={() => { setCount(count + value) }}>Add</button>
            <button onClick={() => { if (count - value >= 0) { setCount(count - value) } }}>Remove</button>
            <h1>{count}</h1>
        </>

    )
}
