import React from 'react'

const ListRendering = (props) => {
    const category = props.category
    const listItems = props.list
    const items = listItems.map(item => <li key={item.id}>{item.name}  :  {item.calories}</li> )
  return (
    <div className='main'>
        <h3>{category}</h3>
        <hr />
        <ol>
            {items}
        </ol>
    </div>
  )
}

export default ListRendering