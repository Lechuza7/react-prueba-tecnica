const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// Como necesitamos recuperar fact desde varios
// sitios (useEffect, button), creamos un service aparte para encapsular la lógica y hacerla reutilizable,
// y así simplemente invocamos getRandomFact() haciendo el código más limpio y refactorizable.
// Muy importante no olvidar hacer return del fetch también
export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then((res) => res.json())
    .then((data) => {
      const { fact } = data
      return fact
    })
}

// Esto funciona también pero no es buena práctica, es mejor no llevar el setFact
// fuera del componente al que pertenece.
// export const getRandomFact = (setFact) => {
//  fetch(CAT_ENDPOINT_RANDOM_FACT)
//   .then((res) => res.json())
//   .then((data) => {
//   const { fact } = data;
//   setFact(fact);
//  })
// }
