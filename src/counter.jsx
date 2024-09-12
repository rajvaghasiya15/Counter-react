import { useState } from 'react'


import './counter.css'

function Counter() {
  const [value, setValue] = useState(0)

  function plus() {
    setValue(value + 1)
  }

  function minus() {
    // console.log("click")
    setValue(value - 1)
    if (value <= 0) {
      setValue(0)
    }
  }

  function reset() {
    setValue(0)
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>{value}</h1>
      <button onClick={plus} >Plus</button>
      <button onClick={minus} >Minus</button>
      <button onClick={reset} >Reset</button>
      <hr />
    </>
  )
}

export default Counter
