import React, { FC, useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm: FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string>()

  const allowedTypes = ['image/png', 'image/jpeg']

  const changeImgHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement
    const selected = target.files && target?.files[0]
    
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={changeImgHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm
