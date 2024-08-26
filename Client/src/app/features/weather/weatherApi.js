import axios from "axios";

const baseUrl="http://localhost:3500/api/weather"
export const getWeather = (cityName) => {
    return axios.get(`${baseUrl}/${cityName}`);
};