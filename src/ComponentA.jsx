import React, { useState, createContext } from 'react'
import './Components.css'
import ComponentB from './ComponentB'

export const userContext = createContext()

const ComponentA = () => {
    const [ user , setUser] = useState('Nabeel')
  return (
    <div className='box'>
        <div>Component A</div>
        <h4>{`Hello ${user}`}</h4>
        <userContext.Provider value={user}>
            <ComponentB user = {user}/>
        </userContext.Provider>
        
    </div>
  )
}

export default ComponentA