import React, { FC, useState } from 'react'

const UploadForm: FC = () => {
  const [file, setFile] = useState<File>({} as File)
  const [error, setError] = useState<string>()

  const allowedTypes = ['image/png', 'image/jpeg']

  const changeImgHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement
    const selected = target.files && target?.files[0]
    
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile({} as File)
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <form>
      <input type="file" onChange={changeImgHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  )
}

export default UploadForm
