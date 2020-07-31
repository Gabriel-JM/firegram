import { useState, useEffect } from 'react'
import { projectFireStore } from '../firebase/config'
import { firestore } from 'firebase'

type Collection = firestore.CollectionReference
type FirestoreSnapshot = firestore.QuerySnapshot<firestore.DocumentData>

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState<Collection[]>([])

  function extractDocsData(snap: FirestoreSnapshot) {
    const documents: Array<firestore.DocumentData> = []
    snap.forEach(doc => {
      documents.push({
        id: doc.id,
        ...doc.data()
      })
    })
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
