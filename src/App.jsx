import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
// import { getRandomImage } from './services/images'
// import { getRandomFact } from './services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  const handleClick = () => {
    refreshFact()
  }
  // encapsulamos la parte estática de la url de la api en CAT_PREFIX_ para poder interpolar esa parte directamente
  // en el src de la img del return, y dejar dentro del useEffect únicamente la información variable que necesitamos
  // que este recupere.
  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first three word of ${fact}`}
        />
      )}
    </main>
  )
}
