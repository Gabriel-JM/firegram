import React, { FC } from 'react'
import { motion } from 'framer-motion'

interface ModalProps {
  selectedImg: string
  setSelectedImg: Function
}

const Modal: FC<ModalProps> = ({ selectedImg, setSelectedImg }) => {

  function closeModal(e: React.MouseEvent) {
    if((e.target as HTMLElement).classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={closeModal}
    >
      <motion.img src={selectedImg} alt="enlarged pic"
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal
