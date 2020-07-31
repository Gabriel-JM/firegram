import React, { FC, useEffect } from 'react'
import useStorage from '../hooks/useStorage'

interface ProgressBarProps {
  file: File
  setFile: Function
}

const ProgressBar: FC<ProgressBarProps> = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)
  
  useEffect(() => {
    if(url) setFile(null)
  }, [url, setFile])

  return (
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
  )
}

export default ProgressBar
