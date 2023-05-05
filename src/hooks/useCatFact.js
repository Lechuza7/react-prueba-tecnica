import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('')
  // para recuperar la cita (fact) al cargar la página.
  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
