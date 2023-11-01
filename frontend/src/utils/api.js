import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
  function (config) {
    const token =
      // "4c1b61574ca98765b3117078afb3f42132aaf8ffd40a8c46e4a4ac4f160ea3ac2512d36e6d41f770db0ca1fa6c62a12894bf9358047438af115bc2d41c8c3268345432c26a1460f5abe1e55034d7cf299fcfd42406778feddb5e9016ea8ff7e934f34cd51d782de059e9ac1d7950fd6027d1f5f8a16f1b9c56ab026743056460"; //contact
      // "4e9fc393409c361b5a8a423e862500a1602713621124c570743c6b87aeb983997707b2b70db4e1916f6eade674beea3bac19ff11d8a72d4a3181e0ce84a6411af374a59615ad6be8346f044bff4348349fbe65e9a6ff796bccfdf4ec2412c36d0597dc8ad355917d85ca27eea8a09d68d6afe2af6732bd0afe9c90365a67a674"; //frontendToken
      // "822c135931c5a76aaf9fe6d1c73727982e73b0c336715d909ada3ce4e47d621d9c64a7ae4cee1df07006c409929a019b36238b744584309e7f152da9d757325556c6d5fbd3009c5c98743822a20778c96f387cbc8ba9c72eaf6b3499c5828aea23aa70f764619abdbabf3a1c848a43c54e9caccd5750557f742694f349d91f74"; //backend
      // "82cc34748eac826015a1602ef104e13ba37b30d19d86212a163da92c3ea971d86ce1bdf7242357d2244d1b54dadf3342d4cab890807796a27f0a95ea397ddc1f597f9ce79dc2fe568fa776c1e8b7d0c94a6452df5f636b53124f4d9491fb9e6998ff66d2768a6806cc92a5e56cfee3e5f00977b66b6102fa78ad9026dba5aa82"; //desingToken
      "4db37500bcdba4d4f12fe5f4cdd8d5c4a09379d3880742b450f588fc3d7aaec0566b9e81db0e936c316a98e5a468270b4a53b5b30ec6e5b0d8dcad5d3e60768c977c0a6ecc37dab4a58fd74372cee999f57b6eb219cb6f5eb55fd27215156769c302e71aeeaa4ac502cac6c8aa8e09849b26e7803c33a4415d811fa486533b7b"; //projectToken
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const api = {
  getMeta: async () => {
    try {
      const response = await axios.get("/seo");
      return response.data
    } catch (error) {
      console.error(err)
    }
  },

  getContacts: async () => {
    try {
      const response = await axios.get("/contacts");
      return response.data.data
    } catch (error) {
      console.error(err)
    }
  },

  createContact: async (contactPayload) => {
    try{
      const response = await axios.post("/contacts", contactPayload)
      return response.data
    } catch (error) {
      console.error(err)
    }
  },

  createFrontend: async (imgFrontendPayload) => {
    try{
      const response = await axios.post("/frontends", imgFrontendPayload)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  createBackend: async (imgBackendPayload) => {
    try{
      const response = await axios.post("/backends", imgBackendPayload)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  createDesing: async (desingPayload) => {
    try{
      const response = await axios.post("/desings", desingPayload)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  createProjects: async (projectsPayload) => {
    try{
      const response = await axios.post("/projects", projectsPayload)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
};
