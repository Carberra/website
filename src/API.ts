import axios from 'axios';

export default axios.create({
  baseURL: `${
    (process.env.NODE_ENV || 'development') === 'development'
      ? 'http://localhost:3000'
      : 'https://carberra.xyz'
  }/api/`,
  responseType: 'json',
});
