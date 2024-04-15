import React, { createContext, useEffect, useState } from 'react'
export const StateContext = createContext();



export default function StateProvider({children}) {

  const[workTime,setWorkTime]=useState(25 * 60);
  const[shortBreakTime,setShortBreakTime]=useState(5 * 60 );
  const[longBreakTime,setLongBreaktime]=useState(30 * 60);

  const [initTime,setInitTime]=useState(0);

  const[activeTag,setActiveTag]=useState(0);
  const[progress,setProgress]=useState(55)
  const[time,setTime]=useState(0);
  const[isActive,setIsActive]=useState(false);

  useEffect(()=>{

    switch(activeTag){
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
      default:
        break;
    }
  },[activeTag,workTime,shortBreakTime,longBreakTime]);//these are dependencies we are using in this fn

  return (
    <StateContext.Provider value={{
      activeTag,
      setActiveTag,
      progress,
      setProgress,
      longBreakTime,
      setLongBreaktime,
      shortBreakTime,
      setShortBreakTime,
      progress,setProgress,
      time,
      setTime,
      isActive,
      setIsActive,
      initTime,
      setInitTime,
      workTime,
      setWorkTime
    }}>
      {children}
      </StateContext.Provider>
  )
}
