import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
  function (config) {
    const token =
      "4eaf15598eabfd4bbfd625aa53898e43497832169888d8c1995c14e6f511ce5a4f7c6f3551faa845d3fe4d2c6962712b9b36b5731dd7f98539c3fe90246c386c322b97ffda65fe67e86f3c700b0673522ebf04a27a052bd4ad1b3b8a0b6afcc0c79cea0823b9ea3e0d670d412147468485d55ae0d7a0449b465c555d8152aae7";
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
      return response.data
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
  }
};
