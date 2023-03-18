import components from "./components.mjs";
import { post } from "./paths/loginPath.mjs";
import { getMovieDetail, getMovies } from "./paths/moviePath.mjs";
import { editPassword, editProfile, getProfile } from "./paths/profilePath.mjs";
import { register } from "./paths/registerPath.mjs";
import { getTickets, registerTicket } from "./paths/ticketPath.mjs";

const docs = {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "VG Cine APIs", // short title.
    description: "Documentación de las APIs para usuarios, peliculas y tickets", //  desc.
    version: "1.0.0", // version number
    contact: {
      name: "Rubén Gutiérrez", // your name
      email: "rubdeivis@gmail.com", // your email
    },
  },
  components,
  paths: {
    "/login": {
      post,
    },
    "/register": {
      post: register,
    },
    "/ticket": {
      get: getTickets,
      post: registerTicket,
    },
    "/movies": {
      get: getMovies,
    },
    "/movie-detail/{id}": {
      get: getMovieDetail,
    },
    "/profile": {
      get: getProfile,
    },
    "/edit-profile": {
      put: editProfile,
    },
    "/change-password": {
      put: editPassword,
    },
  },
};

export default docs;
