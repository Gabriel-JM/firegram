import React, { useState } from 'react'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'
import Modal from './comps/Modal'

function App() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  return (
    <div className="app-container">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <Modal selectedImg={selectedImg ? selectedImg : ''} />
    </div>
  )
}

export default App;
