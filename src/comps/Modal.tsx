import React, { FC } from 'react'

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
    <div className="backdrop" onClick={closeModal}>
      <img src={selectedImg} alt="enlarged pic" />
    </div>
  )
}

export default Modal
