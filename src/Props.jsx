{/* 
  1) Props        =  Props are read only property that shared between componenets
                     parent component can send data to child 

  2) PropTypes   =  A mechanism that ensure that the passed value is of the 
                     correct data-type
            
  3) defaultProps =  Default value for the props in case they are not passed from
                     parent component
*/}


import React from 'react'
import PropTypes from 'prop-types'


const Props = (props) => {
  return (
    <div className='card-box'>
      <div className='card'>
        <p>Name: {props.name}</p>
        <p>Place: {props.place}</p>
        <p>Age : {props.age}</p>
        <p>Student : {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}

Props.propTypes = {
  name : PropTypes.string,
  place : PropTypes.string,
  age : PropTypes.number,
  isStudent : PropTypes.bool
}

Props.defaultProps ={
  name : "Guest",
  place : "Unknown",
  age : 0,
  isStudent : true

}

export default Props