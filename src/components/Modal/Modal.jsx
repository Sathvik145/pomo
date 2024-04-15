import React from 'react'
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import BackDrop from './BackDrop';
import { AnimatePresence } from 'framer-motion';

const Modal = ({isOpen,onClose}) => {
  return (
   <>
  <AnimatePresence>
  { isOpen &&
   <>
    <BackDrop/>
    <ModalContainer isOpen={isOpen} onClose={onClose} />
    </>
   }
  </AnimatePresence>
   </>
  )
}

export default Modal
