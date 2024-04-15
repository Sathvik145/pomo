import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import Clock from "./Clock/Clock"
import { StateContext } from '../../StateProvider';
export default function CircularProgress() {

  const{progress,setProgress,time,initTime}=useContext(StateContext)


  useEffect(()=>{
    setProgress(time/(initTime/100));
  },[setProgress,time,initTime]);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle >
        <Clock></Clock>
      </InnerCircle>
    </OuterCircle>
  )
}


const OuterCircle=styled.div`
     width: 35rem;
    height: 35rem;
    background: #b85600;
    
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: conic-gradient(red ${({progress})=>progress}%, transparent ${({progress})=>progress}%)
`

const InnerCircle = styled.div`
     width: 33rem;
    height: 33rem;
    background: #0b0352;
    
    border-radius: 50%;
    display: grid;
    place-items: center;
`