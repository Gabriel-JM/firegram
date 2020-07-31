import React, { FC } from 'react'

interface ModalProps {
  src: string
  alt?: string
}

const Modal: FC<ModalProps> = ({ src, alt }) => {
  return (
    <div className="backdrop">
      <img src={src} alt={alt ? alt : "enlarged pic"} />
    </div>
  )
}

export default Modal
