import { useState, useEffect } from 'react'
import { projectStorage, projectFireStore, timestamp } from '../firebase/config'

const useStorage = (file: File) => {
  const [progress, setProgress] = useState<number>(0)
  const [error, setError] = useState<Error>()
  const [url, setUrl] = useState<string>()

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFireStore.collection('images')

    storageRef.put(file).on('state_changed', 
      snap => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100

        setProgress(percentage)
      },
      err => setError(err),
      async () => {
        const url = await storageRef.getDownloadURL()
        const createdAt = timestamp()
        collectionRef.add({ url, createdAt })
        setUrl(url)
      }
    )
  }, [file])

  return {
    progress,
    error,
    url
  }

}

export default useStorage
