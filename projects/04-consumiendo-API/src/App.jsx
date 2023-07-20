import { useState, useEffect } from 'react'
import axios from 'axios'

const CAT_FACT_API = 'https://catfact.ninja/fact'
const CAT_IMAGE_PREFIX_API = 'https://cataas.com/cat/says/'
const CAT_IMAGE_PREFIX_API2 = 'https://cataas.com'

function App() {  
  const [fact, setFact] = useState('');// se unicializa con un valor por defecto para el estado inicial para que no ocurran errores antes de hacer la solicitud
  const [catImage, setCatImage] = useState('');// se usaria con el fetch para el json de la imagen y almacenar y cambiar la url en cada render
  const [firstWord, setFirstWord] = useState('');
  // const [catImageFile, setCatImageFile] = useState('');
  const [lastWord, setLastWord] = useState('');
  cosnt [length, setLength] = useState('');

  //////////////////////////////// USANDO UN USEEFECT PARA CONSUMIR UNA API //////////////////////////////////
  // useEffect(() => {
  //   //hacemos un fetchin de datos con axios
  //   const fetchData = async () => {
  //     try{
  //       const response = await axios.get(CAT_FACT_API)
  //               setFact(response.data.fact)
  //     }
  //     catch(error){
  //             console.log(error)
  //           }
  //   }
  //   fetchData()

  // }, [])

        
  // console.log(fact)
  // const firstWord = fact.split(' ',1)
  // console.log(firstWord)
  // return (
  //   <>
  //   <main>
  //     <h1>Gatitos</h1>
  //     {fact && <p>{fact}</p>} {/* renderizado condicional */}  
  //     <img src={`${CAT_IMAGE_PREFIX_API}${firstWord}`} alt={`imagen extraida usando la primera palabra ${firstWord}`} />
  //   </main>
  //   </>
  // )


  //////// CONSUMIENDO 2 APIS //////////////////////////////////

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CAT_FACT_API);
        setFact(response.data.fact);
        setLength()
        const firstWord = response.data.fact.split(' ', 1)[0];
        setFirstWord(firstWord);
        const lastWord = response.data.fact.split(' ').pop();
        setLastWord(lastWord);


        const response2 = await axios.get(CAT_IMAGE_PREFIX_API+firstWord+'?json=true');
        setCatImage(response2.data.url);
        // setCatImageFile(response2.data.file);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const handledDownload = () => {
  //   const a = document.createElement('a');
  //   a.href = 'https://cataas.com/' + catImageFile; //not found
  //   a.download = 'gatitos.png';
  //   a.click();
  // }

  return (
    <>
      <main>
        <h1>Gatitos</h1>
        {fact && <p>{fact}</p>} {/* renderizado condicional */}
        {catImage && <img src={`${CAT_IMAGE_PREFIX_API2}${catImage}`} alt={`imagen extraida usando la primera palabra ${firstWord}`} />}
        {/* <button onClick={handledDownload}>Descargar Img</button> */}
      </main>
    </>
  );
}

export default App;
