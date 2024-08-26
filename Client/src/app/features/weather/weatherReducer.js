import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cityName: '',             // Name of the city entered by the user
    country: '',              // Country of the city
    // date: '',                 // Current date in the city
    timezone: '',             // Timezone of the city
    temperature: null,        // Current temperature in the city
    weatherCondition: '',     // Current weather condition (e.g., sunny, windy, etc.)
    precipitation: '',        // Precipitation value (e.g., "0mm")
    humidity: '',             // Humidity value (e.g., "50%")
    wind: '',                 // Wind speed (e.g., "30 km/h")
    hourlyForecast: [],       // Array of weather data for the next 5 hours
};

export const weatherReducer = createSlice({
    name: "weather",
    initialState,
    reducers: {
        updateData: (state, action) => {
            state.cityName = action.payload.location.name;
            state.country = action.payload.location.country;
            state.timezone = action.payload.location.localtime;
            state.temperature = action.payload.current.temp_c;
            state.weatherCondition = action.payload.current.condition.text;
            state.precipitation = action.payload.current.precip_mm;
            state.humidity = action.payload.current.humidity;
            state.wind = action.payload.current.wind_kph;
            const hourArray = action.payload.forecast.forecastday[0].hour;
            const currentHourStr = action.payload.current.last_updated.split(' ')[1].substring(0, 2);
            const currentIndex = hourArray.findIndex(hour => hour.time.endsWith(`${currentHourStr}:00`));
            const totalHours = hourArray.length;
            const nextFiveHours = [];
            for (let i = 1; i <= 5; i++) {
                const index = (currentIndex + i) % totalHours;
                nextFiveHours.push(hourArray[index]);
            }
            state.hourlyForecast = nextFiveHours;
            // const nextFiveHours = hourArray.slice(currentIndex + 1, currentIndex + 6);
            console.log(nextFiveHours);

        },

    }
})

export const { updateData } = weatherReducer.actions;
export default weatherReducer.reducer; 