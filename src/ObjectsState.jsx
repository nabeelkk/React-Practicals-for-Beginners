import React, { useState } from 'react'

const ObjectsState = () => {

    const [car , setCar] = useState({year:2011,make:"Toyota",modal:"Fortuner"})

    const handleYearChange = (event)=>{
        setCar(c => ({...c, year : event.target.value}))
    }
    const handleMakeChange = (event) =>{
        setCar(c => ({...c,make:event.target.value}))
    }
    const handleModalChange = (event)  =>{
        setCar(c => ({...c, modal:event.target.value}))
    }
  return (
    <div>
        <h3> - My favorite car is {car.year} {car.make} {car.modal}</h3>

        <input type="number" value={car.year} onChange={handleYearChange}/> <br />
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
        <input type="text" value={car.modal} onChange={handleModalChange} />
    </div>
  )
}

export default ObjectsState