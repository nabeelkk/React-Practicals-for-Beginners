import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }
    const reset = ()=>{
        setCount(0)
    }
  return (
    <div className='box'>
        <div className='counterDisplay'><p>{count}</p></div>
        <div className='btns'>
            <button onClick={increment} className='btn-inc'>+</button>
            <button onClick={decrement}  className='btn-dec'>-</button>
            <button onClick={reset}  className='btn-reset'>🚫</button>
        </div>
    </div>
  )
}

export default Counter