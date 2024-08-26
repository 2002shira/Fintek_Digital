import axios from "axios"


export const getWeatherApibyCityName = (req, res)=>{
    let cityName=req.params.cityName;
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a6db850a0ec04634ab692438242308&q=${cityName}&hours=5`)
    .then(response => {
        return res.status(200).json(response.data);
    }).catch((err) => {
        return res.status(400).json(err);
    });
}
