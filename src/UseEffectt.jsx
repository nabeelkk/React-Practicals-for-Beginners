import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [ color , setColor] = useState("red")
    const [width , setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=>{
      document.title = `count: ${count} color: ${color} ${width}x${height}` 
      window.addEventListener('resize',handleResize)
    })

    

    const handleResize = ()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    const incrementCount = ()=>{
        setCount(c => c + 1)
    }
    const decrementCount = ()=>{
        setCount(c => c - 1 )
    }
    const ChangeColor = ()=>{
        setColor(c => c === 'green' ? "red" : "green")
    }
  return (
    <div>
        <h1 style={{color:color}}> Count: {count}</h1>
        <button onClick={incrementCount}>Add</button>
        <button onClick={decrementCount}>Subtract</button>
        <button onClick={ChangeColor}>Change Color</button>
        <h1>Window Width: {width}</h1>
        <h1>Window Height: {height}</h1>
    </div>
  )
}

export default UseEffect