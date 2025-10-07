import React, { useState } from 'react'

const UseState = () => {
    const [name, setName] = useState("Guest")
    const [age , setAge] = useState(0)
    const [isStud , setIsStud] = useState(false)

    const changeName = ()=>{
        setName("Nabeel")
    }

    const increamentAge = ()=>{
        setAge(age + 1)
    }

    const toggleStatus = ()=>{
        setIsStud(!isStud)
    }
  return (
        <>
            <h3 style={{color:"white", marginLeft:"20px"}}>Name : {name}</h3>
            <button style={{color:"black", marginLeft:"20px",cursor:"pointer"}} onClick={changeName}>Change Name</button>

            <h3 style={{color:"white", marginLeft:"20px"}}>Age : {age}</h3>
            <button style={{color:"black", marginLeft:"20px",cursor:"pointer"}} onClick={increamentAge}>Increament Age</button>

            <h3 style={{color:"white", marginLeft:"20px"}}>Is Student : {isStud ? "Yes":"No"}</h3>
            <button style={{color:"black", marginLeft:"20px",cursor:"pointer"}} onClick={toggleStatus}>Toggle</button>
        </>
  )
}

export default UseState