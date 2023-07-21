import { useState, useEffect } from 'react'
import axios from 'axios'
import { ImgGatitos } from './gatitos.jsx'
import { useFetchData } from './API.jsx'

const CAT_FACT_API = 'https://catfact.ninja/fact'
const CAT_IMAGE_PREFIX_API = 'https://cataas.com/cat/says/'
const CAT_IMAGE_PREFIX_API2 = 'https://cataas.com'

function App() {  
  const [fact, setFact] = useState('');// se unicializa con un valor por defecto para el estado inicial para que no ocurran errores antes de hacer la solicitud
  const [catImageFirst, setCatImageFirst] = useState('');// se usaria con el fetch para el json de la imagen y almacenar y cambiar la url en cada render
  const [catImageLast, setCatImageLast] = useState('');
  const [firstWord, setFirstWord] = useState('');
  // const [catImageFile, setCatImageFile] = useState('');
  const [lastWord, setLastWord] = useState('');
  const [count, setCount] = useState(0);

  useFetchData(setFact, setFirstWord, setLastWord, setCatImageFirst, setCatImageLast, count);

  const handleNewCatImage = () => {
    setCount(count + 1);
  }
  
  useEffect(() => {
    document.body.className= 'bg-secondary', 'justify-content-center';
  },[]);

  return (
    <>
      <main>
        <div className='col-12'>
        <div className='row'>
          <div className='d-flex justify-content-center mb-4'>
        <h1>Gatitos</h1>
        </div>        
        <ImgGatitos word={firstWord} url={`${CAT_IMAGE_PREFIX_API2}${catImageFirst}`} fact={fact ? fact : null} title={'First Word'} />

        <ImgGatitos word={lastWord} url={`${CAT_IMAGE_PREFIX_API2}${catImageLast}`} fact={fact ? fact : null} title={'Last Word'} />

        </div>
        <button onClick={handleNewCatImage}>Generar Nuevo</button>
        </div>
      </main>
    </>
  );
}

export default App;
