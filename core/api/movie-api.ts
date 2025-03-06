import axios from "axios";

export const moviesApi = axios.create({
  // Pasamos la URL de la API desde .env
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  // Colocamos parametros de la URL
  params: {
    language: 'es-HN',
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY
  },
});
