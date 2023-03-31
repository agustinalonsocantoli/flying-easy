const url = 'https://compare-flight-prices.p.rapidapi.com/GetPricesAPI/GetPrices.aspx?SearchID=%3CREQUIRED%3E';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b9ea2efab6mshda82ffc73430ef5p126563jsne9455eef2e8e',
    'X-RapidAPI-Host': 'compare-flight-prices.p.rapidapi.com'
  }
};

export const getData = async () => {

    try{
        const response = await fetch(url, options);
        const data = await response.json();
    
        return data

    } catch(err) {
        console.log(err);
    }
}