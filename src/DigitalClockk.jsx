import React, { useEffect, useState } from 'react'
import './DigitalClockk.css'

const DigitalClockk = () => {
  const [time, setTime] = useState(new Date())

  useEffect(()=>{
    const time = setInterval(()=>{
      setTime(new Date())
    },1000)
    return ()=>{
      clearInterval(time)
    }
  },[])

  function formateTime(){
    let hour = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hour = hour % 12 || 12

    return {hour:padTime(hour) ,minutes:padTime(minutes),seconds:padTime(seconds)}
  }

  function padTime(number){
    return (number < 10 ? "0" : "" ) + number 
  }

  return (
    <>
      <div className='date-cont'>
        <div><h4>{time.toLocaleString('default',{month:'short'})}</h4></div>
        <div><h4>{time.toLocaleString('default',{day:'numeric'})},</h4></div>
        <div><h4>{time.toLocaleString('default',{year:'numeric'})}</h4></div>
        <div><h4>{time.toLocaleString('default',{weekday:'short'})}</h4></div>
      </div>
      <div className='clock-cont'>
        <div className='hours'><p>{formateTime().hour}</p> <hr /></div>
        <div className='minutes'><p>{formateTime().minutes}</p> <hr /></div>
        <div className='seconds'><p>{formateTime().seconds}</p> <hr /></div>
    </div>
    <div className='owner-name'>Pinet Digital Clock</div>
    </>
    
  )
}

export default DigitalClockk