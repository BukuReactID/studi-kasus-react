import * as axios from 'axios'; 
import { config } from '../config';

export async function getOrders(params){
  
  let { token } = localStorage.getItem('auth')
			? JSON.parse(localStorage.getItem('auth')) : {};

  let { limit, page } = params; 
  let skip = (page * limit) - limit; 

  return await axios 
    .get(`${config.api_host}/api/orders`, {
      params: {
        skip, 
        limit
      },
      headers: {
        authorization: `Bearer ${token}`
      }
  });
}

export async function createOrder(payload){

  let { token } = localStorage.getItem('auth')
			? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.post(`${config.api_host}/api/orders`, payload, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
}
