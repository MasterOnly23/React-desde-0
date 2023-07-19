import { useState, useEffect } from 'react'

const CAT_FACT_API = 'https://catfact.ninja/fact'
const CAT_IMAGE_PREFIX_API = 'https://cataas.com/cat/says'

function App() {
  const [fact, setFact] = useState()
  // const [catImage, setCatImage] = useState()  // se usaria con el fetch para el json de la imagen y almacenar y cambiar la url en cada render

  useEffect(() => {
    //hacemos un fetchin de datos
    fetch(CAT_FACT_API)
      .then(res => res.json())
      .then(data => {
        const {fact} = data
        setFact(fact)

        const firstWord = fact.split(' ')[0]

        // fetch(`https://cataas.com/cat/says/${firstWord}`) // este fetch se uraria en caso de que los datos de la imagen vinieran en un json
        //   .then(res => res.json())                         // al venir directamente el link de la imagen, lo paso directamente al src
        //   .then(response => {
        //     const {url} = response
        //     setCatImage(url)
        //   })
      })
  }, [])
  return (
    <>
    <main>
      <h1>Gatitos</h1>
      {fact && <p>{fact}</p>} {/* renderizado condicional */}  
      {<img src={`${CAT_IMAGE_PREFIX_API}${firstWord}`} alt={`imagen extraida usando la primera palabra ${fact}`} />}
    </main>
    </>
  )
}

export default App
