import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { StateContext } from '../../../StateProvider';

import audioFile from "./soud.mp3";
export default function Clock() {

    const{time,setTime,initTime,isActive,setIsActive}=useContext(StateContext);
   //use this to control the pause button
    const[audio]=useState(new Audio(audioFile));


    useEffect(()=>{  //this helps to change the timer and when it reaches 0 it will stop
        if(isActive && time>0){
            const interval=setInterval(()=>{
                setTime((time)=>time-1);
            },1000);
            return ()=>clearInterval(interval);
        }else if(time===0){
            audio.play();
        }
    },[time,isActive]);

    const toggleClock=()=>{
        setIsActive(!isActive);//this fn make toggleclock true if it is flase and viceversa
    }

    const resetTime=()=>{
       
        setTime(initTime);
        setIsActive(false);
    }


    const getTime=(time)=>{
        const min=Math.floor(time/60);
        const sec=time%60;
        return `${min < 10 ? "0" + min :min } : ${sec < 10 ? "0" + sec :sec}`
    };

  return (
    <ClockContainer>
        <TimerText>
        {getTime(time)}
        </TimerText>
        <StartPauseButton onClick={toggleClock}>
        {isActive ? "Pause" : "Start"}
        </StartPauseButton>
        {time==0 && <ResetButton onClick={resetTime} >RESET</ResetButton>}
    </ClockContainer>
  )
}
const ClockContainer=styled.div`
    display: grid;
    place-items: center;
`
const TimerText=styled.h3`
    font-size: 9rem;
`
const StartPauseButton=styled.button`
    all:unset;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
`

const ResetButton=styled(StartPauseButton)`
color: red;
`;