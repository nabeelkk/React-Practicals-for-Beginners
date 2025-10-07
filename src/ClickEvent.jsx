import React from 'react'

const ClickEvent = () => {
    const handleClick = (e)=> e.target.textContent = "Click me 👍🏻" 
  return (
    <button className='btn' onClick={(e)=>handleClick(e)}>Click me 😎</button>
  )
}

export default ClickEvent