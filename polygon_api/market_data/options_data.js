import axios from 'axios'

const apiKey = process.env.polygon_api

export const example_getStocksOpenClose = async() =>{
  try {
    const ticker = 'AAPL';
    const date = '2023-01-09';
    const response = await axios.get(`https://api.massive.com/v1/open-close/${ticker}/${date}?adjusted=true&apiKey=${apiKey}`);
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}