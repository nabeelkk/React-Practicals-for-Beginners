import React, { useState } from 'react'

const ArraysState = () => {
    const [foods , setFoods] = useState(['Orange','Banana','Apple'])

    const handleAddFood = ()=>{
        const newFood = document.getElementById('inp').value
        document.getElementById('inp').value = ""
        setFoods(f => [...f, newFood])
        document.getElementById('inp').focus()
    }
    const handleRemoveFood = (index)=>{
        setFoods(foods.filter((_,i)=> i !== index))
    }
  return (
    <div>
        <h1>Fruits</h1>
        <ul>
            {foods.map((food,index)=> <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li> )}
        </ul>
        <input type="text" id='inp' placeholder='Enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default ArraysState