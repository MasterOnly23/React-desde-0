import { useState, useEffect } from 'react'
import axios from 'axios'

const CAT_FACT_API = 'https://catfact.ninja/fact'
const CAT_IMAGE_PREFIX_API = 'https://cataas.com/cat/says/'
const CAT_IMAGE_PREFIX_API2 = 'https://cataas.com'

export function ImgGatitos ({word, url,fact, tiitle}) { 
return(
    <div className='d-flex flex-column align-items-center col-6'>
        
        <h2>{tiitle}</h2>
        {fact && <p>{fact}</p>} {/* renderizado condicional */}
        <div>
        {url && <img width={250} src={url} alt={`imagen extraida usando la palabra ${word}`} />}
        {/* <button onClick={handledDownload}>Descargar Img</button> */}
        </div>
        </div>
)

}