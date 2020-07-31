import { useState, useEffect } from 'react'
import { projectFireStore } from '../firebase/config'
import { firestore } from 'firebase'

type DocumentData = firestore.DocumentData
type FirestoreSnapshot = firestore.QuerySnapshot<firestore.DocumentData>

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState<DocumentData[]>([])

  function extractDocsData(snap: FirestoreSnapshot) {
    const documents: Array<DocumentData> = []
    snap.forEach(doc => {
      documents.push({
        id: doc.id,
        ...doc.data()
      })
    })

    setDocs(documents)
  }

  useEffect(() => {
    const unsub = projectFireStore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(extractDocsData)

    return unsub
  }, [collection])

  return { docs }
}

export default useFirestore
