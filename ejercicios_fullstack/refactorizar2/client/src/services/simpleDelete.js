import axios from 'axios'

export async function simpleDelete(url, values){
  try{
    const apiResponse = await axios.delete(url, values);
    return apiResponse
  }catch(error){
    return{ error: `Se ha producido un error ${error}`}
  }
}