class crytoApi{
    static getAllCryptoData(){
        return fetch('https://api.coinmarketcap.com/v1/ticker/').then(response => {
            return response.json();

        }).catch(error =>{
            return error;
        })
    }
}

export default crytoApi;