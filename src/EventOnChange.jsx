import { useState } from "react"

function EventOnChange(){
    const [name , setName] = useState('Guest')
    const [number , setNumber] = useState(1)
    const [ comment , setComment] = useState('')
    const [ delivery, setDelivery ] = useState('Pickup')


    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    const handleNumberChange = (event)=>{
        setNumber(event.target.value)
    }
    const hanldecommentChange = (event)=>{
        setComment(event.target.value)
    }
    const hanldeDeliveryChange = (event)=>{
        setDelivery(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={handleNameChange} />
            <h4>Name: {name}</h4>

            <input type="number" onChange={handleNumberChange} />
            <h4>Number: {number}</h4>


            <textarea placeholder="Enter Delivery Instruction" onChange={hanldecommentChange}></textarea>
            <h4>comment: {comment}</h4>

            <label htmlFor="pickUp"> <input id="pickUp" name="pickUp" type="radio" value="Pickup" checked = {delivery === "Pickup"} onChange={hanldeDeliveryChange}/> Pickup</label>
            <br />
            <label htmlFor="delivery"> <input type="radio" id="delivery"  value="Delivery" checked = {delivery === "Delivery"} onChange={hanldeDeliveryChange}/> Delivery</label>
            <h4>Status: {delivery}</h4>
        </div>
    )
}
export default EventOnChange