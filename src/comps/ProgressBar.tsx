import React, { FC, useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

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
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar
