//use npm run dev to start the browser

import { useState } from 'react'
import styled from "styled-components";
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';
import {FaCog} from "react-icons/fa";

function App() {
 
  const[isOpen,setIsOpen]=useState(false);

  const onClose=()=>{
    setIsOpen(false);
  }
  const onOpen=()=>{
    setIsOpen(true);
  }


  return (
    <>
    <Modal  isOpen={isOpen} onClose={onClose} />
     <Title>Pomodoro</Title>
     <Tags/>
     <Timer></Timer>
     <CogIcon onClick={onOpen}>
      <FaCog/>
     </CogIcon>
     <Name>~Sathvik</Name>
    </>
  )
}

export default App;

const Title=styled.h1`
font-size: 6rem;
padding: 2rem 0 ;
text-align: center;
`;

const CogIcon = styled.div`
display: flex;
justify-content: center;
font-size: 4rem;

`;

const Name=styled.div`
  letter-spacing: 0.5rem;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
`