import axios from 'axios';
import { tokenStorage } from './token-storage';

const api = axios.create({
  baseURL: 'https://agrixa-backend.onrender.com/api/v1',
});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  async (config) => {
    const token = await tokenStorage.getAccessToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
