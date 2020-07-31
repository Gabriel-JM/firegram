import React, { FC } from 'react'
import useFirestore from '../hooks/useFirestore'

interface ImageGridProps {
  setSelectedImg: Function
}

const ImageGrid: FC<ImageGridProps> = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')

  return(
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}
          onClick={() => setSelectedImg(doc.url)}
        >
          <img src={doc.url} alt="An uploaded pic" />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
