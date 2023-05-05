import { useState, useEffect } from 'react'
// custom hook: contiene la lógica para recibir la imagen del gato cada vez que se actualice "fact", llamando
// dentro a useState y useEffect para ello, y podemos reutilizarlo donde queramos.
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')
  // para recuperar la imagen cada vez que la cita cambia
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
