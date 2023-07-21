import { useEffect } from 'react';
import axios from 'axios';

const CAT_FACT_API = 'https://catfact.ninja/fact';
const CAT_IMAGE_PREFIX_API = 'https://cataas.com/cat/says/';

export const useFetchData = (setFact, setFirstWord, setLastWord, setCatImageFirst, setCatImageLast, count) => {
    useEffect(() =>{
        const fetchData = async () => {
            try {
              const response = await axios.get(CAT_FACT_API);
              
              setFact(response.data.fact);
              const firstWord = response.data.fact.split(' ', 1)[0];
              setFirstWord(firstWord);
      
              const lastWord = response.data.fact.split(' ').slice(-1)[0]; 
              setLastWord(lastWord);  
      
              const responseUrlImgFirst = await axios.get(`${CAT_IMAGE_PREFIX_API}${firstWord}?json=true`);
              setCatImageFirst(responseUrlImgFirst.data.url);
      
              const responseUrlImgLast = await axios.get(`${CAT_IMAGE_PREFIX_API}${lastWord}?json=true`);
              setCatImageLast(responseUrlImgLast.data.url);
              // setCatImageFile(responseUrlImg.data.file);


            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
    }, [setFact, setFirstWord, setLastWord, setCatImageFirst,setCatImageLast, count])
}