import React, { FC } from 'react'

interface ModalProps {
  selectedImg: string
  alt?: string
}

const Modal: FC<ModalProps> = ({ selectedImg, alt }) => {
  return (
    <div className="backdrop">
      <img src={selectedImg} alt={alt ? alt : "enlarged pic"} />
    </div>
  )
}

export default Modal
