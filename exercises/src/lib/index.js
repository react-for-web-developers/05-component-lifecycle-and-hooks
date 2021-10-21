const axios = require("axios");

axios.defaults.baseURL = "https://digimon-api.vercel.app/api/digimon";
axios.defaults.headers.get["Accept"] = "application/json";

const fetchDigimons = async () => {
  const { data } = await axios.get();
  return data;
};

const fetchDigimonsByLevel = async (level) => {
  return axios.get("/level/" + level);
};

export { fetchDigimons, fetchDigimonsByLevel };
