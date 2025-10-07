import React, { useState } from 'react'

const ArrayOfObject = () => {
    const [cars , setCars] = useState([])
    const [year , setYear] = useState(new Date().getFullYear())
    const [make, setMake] = useState("")
    const [modal , setModal] = useState("")

    const handleAddCar = ()=>{
        const newCar = {
            year : year,
            make : make,
            modal : modal
        }

        setCars(c=>[...c,newCar]);

        setYear(new Date().getFullYear())
        setMake("")
        setModal("")
    }
    const handleRemoveCar = (index)=>{
        setCars(cars.filter((_,i)=> i !== index))
    }
    const handleYearChange = (e)=>{
        setYear(e.target.value)
    }
    const handleMakeChange = (e)=>{
        setMake(e.target.value)
    }
    const handleModalChange = (e)=>{
        setModal(e.target.value)
    }
  return (
    <div>
        <h1>List of Cars</h1>
        <ul>
            {cars.map((car,index)=> <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.modal}</li> )}
        </ul>

        <input type="number" value={year} onChange={handleYearChange}/><br />
        <input type="text" value={make} placeholder='Enter make of the car' onChange={handleMakeChange} /><br />
        <input type="text" value={modal} placeholder='Enter modal of the car' onChange={handleModalChange} /><br />
        <button onClick={handleAddCar}>ADD</button>
    </div>
  )
}

export default ArrayOfObject