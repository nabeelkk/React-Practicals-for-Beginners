import React, { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState("#000000")

    const handleColorChange = (event)=>{
        setColor(event.target.value)
    }

  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{background: color}}>
            <p>Selected Color </p> 
            <p>{color}</p>
        </div>
        <label htmlFor="color">Pick Color</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker