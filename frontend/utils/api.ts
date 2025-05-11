import axios from "axios";

const API = axios.create({
  baseURL: "example.com",
});

export const createShortURL = async (longUrl: string) => {
  const response = await API.post("/shorten", { long_url: longUrl });
  return response.data;
};

export const getLongURL = async (shortCode: string) => {
  const response = await API.get(`/${shortCode}`);
  return response.data;
};
