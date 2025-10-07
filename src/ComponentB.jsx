import React from 'react'
import './Components.css'
import ComponentC from './ComponentC'


const ComponentB = () => {
  return (
    <div className='box'>
        <div>Component B</div>
        <ComponentC />
    </div>
  )
}

export default ComponentB