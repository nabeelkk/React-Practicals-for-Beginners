import React, { useEffect, useRef, useState } from 'react'
import './StopWatch.css'

const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime , setElampsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const statrime = useRef(0)

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElampsedTime(Date.now() - statrime.current)
            },10)
            return()=>{
                clearInterval(intervalIdRef.current)
            }
        }
    },[isRunning])

    const startTime = ()=>{
        setIsRunning(true)
        statrime.current = Date.now() - elapsedTime
    }

    const stopTime = ()=>{
        setIsRunning(false)
    }

    const resetTime = ()=>{
        setElampsedTime(0)
        setIsRunning(false)
    }

    function formateTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60 ))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60 )
        let seconds = Math.floor(elapsedTime / (1000 ) % 60 )
        let milliSeconds = Math.floor((elapsedTime % 1000 ) / 10  )

        hours = String(hours).padStart(2 , "0")
        minutes = String(minutes).padStart(2 , "0")
        seconds = String(seconds).padStart(2 , "0")
        milliSeconds = String(milliSeconds).padStart(2 , "0")

        return {hours:hours,minutes:minutes,seconds:seconds,milliSeconds:milliSeconds}
    }



  return (
    <>
      {/* <div className='date-cont'>
        <div><h4>{time.toLocaleString('default',{month:'short'})}</h4></div>
        <div><h4>{time.toLocaleString('default',{day:'numeric'})},</h4></div>
        <div><h4>{time.toLocaleString('default',{year:'numeric'})}</h4></div>
        <div><h4>{time.toLocaleString('default',{weekday:'short'})}</h4></div>
      </div> */}
      <div className='clock-cont'>
        <div className='hours'><p>{formateTime().minutes}</p> <hr /></div>
        <div className='minutes'><p>{formateTime().seconds}</p> <hr /></div>
        <div className='seconds'><p>{formateTime().milliSeconds}</p> <hr /></div>
    </div>
    <div className='btns'>
        <button className='start-btn' onClick={startTime}>Start</button>
        <button className='stop-btn' onClick={stopTime}>Stop</button>
        <button className='reset-btn' onClick={resetTime}>Reset</button>
    </div>
    </>
  )
}

export default StopWatch