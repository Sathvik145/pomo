import styled from 'styled-components';
import CircularProgress from './CircularProgress/CircularProgress';


const Timer = () => {
  return (
   <TimerContainer>
   <CircularProgress>
    
   </CircularProgress>
   </TimerContainer>
  )
}

export default Timer

const TimerContainer=styled.div`
    
    width: 45rem;
    height: 45rem;
    background: #02133b;
    margin: 2rem auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
`