const url = '';

const options = {
  method: 'GET',
  headers: {
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