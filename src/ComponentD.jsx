import React,{useContext} from 'react'
import './Components.css'
import { userContext } from './ComponentA'



const ComponentD = () => {
  const user = useContext(userContext)
  return (
    <div className='box'>
        <div>Component D</div>
        <h4>{`Bye ${user}`}</h4>
    </div>
  )
}

export default ComponentD