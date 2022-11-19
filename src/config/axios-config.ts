/* eslint-disable prettier/prettier */
import axios from 'axios';

export default function axiosService(url: string) {
  const returnAxios = axios.create({
    baseURL: url,
    validateStatus: (status) => {
      return status <= 300;
    },
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  });
  return returnAxios;
}
