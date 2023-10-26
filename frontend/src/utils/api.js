import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
  function (config) {
    const token =
      "4c1b61574ca98765b3117078afb3f42132aaf8ffd40a8c46e4a4ac4f160ea3ac2512d36e6d41f770db0ca1fa6c62a12894bf9358047438af115bc2d41c8c3268345432c26a1460f5abe1e55034d7cf299fcfd42406778feddb5e9016ea8ff7e934f34cd51d782de059e9ac1d7950fd6027d1f5f8a16f1b9c56ab026743056460";
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
  }
};
