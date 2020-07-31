import React from 'react'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'

function App() {
  return (
    <div className="app-container">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

export default App;
