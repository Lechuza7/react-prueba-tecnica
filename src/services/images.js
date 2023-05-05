export const getRandomImage = (firstWord) => {
  return fetch(
    `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
  )
    .then((res) => res.json())
    .then((response) => {
      const { url } = response
      return url
    })
}
