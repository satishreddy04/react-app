import axios from 'axios';

const ROOT_URL= 'https://api.coinmarketcap.com/v1/ticker/';

export const FETCH_CRYPTODATA = 'FETCH_CRYPTODATA';


export function fetchCryptData(){
       const url = ROOT_URL;
       const request = axios.get(url);

       return {
           type: FETCH_CRYPTODATA,
           payload: request
       }


}
