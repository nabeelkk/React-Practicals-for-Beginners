import React,{useContext} from 'react'
import './Components.css'
import ComponentD from './ComponentD'
import { userContext } from './ComponentA'



const ComponentC = () => {
  const user = useContext(userContext)
  return (
    <div className='box'>
        <div>Component C</div>
        <h4>{`Hello again ${user}`}</h4>
        <ComponentD />
    </div>
  )
}

export default ComponentC