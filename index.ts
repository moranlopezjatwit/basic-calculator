import axios from 'axios';

async function getWithAxios() {
  try {
    const response = await axios.get('https://httpbin.org/get');
    console.log('Axios Response:', response.data);
  } catch (error) {
    console.error('Error with Axios request:', error);
  }
}

getWithAxios();
