/* import axios from "axios"; */

export const getCoins = async () => {
    try {
        //const {data} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
        const res = await fetch('./markets.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)  
    }
}