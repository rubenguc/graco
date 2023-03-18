import axios from "axios";
import { TMDB_API_KEY } from "../config.mjs";

export const moviesAPI = async ({ path = "", querys = "" }) => {
  return axios.get(
    `https://api.themoviedb.org/3/${path}?api_key=${TMDB_API_KEY}&language=es-ES` +
      querys
  );
};
