import React, { FC } from 'react'

const UploadForm: FC = () => {

  const changeImgHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement
    let selected = target.files && target?.files[0]
    console.log(selected)
  }

  return (
    <form>
      <input type="file" onChange={changeImgHandler} />
    </form>
  )
}

export default UploadForm
