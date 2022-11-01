import axios from 'axios'


export async function simplePut(url, values) {
  try{
    const apiResponse= await axios.put(url, values);
    return apiResponse
  } catch(error){
    return { error: "Se ha producido un error: " +error}
  }
}