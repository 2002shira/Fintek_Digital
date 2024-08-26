import "./Card.css";
import { useSelector } from 'react-redux';

const Card = () => {
    const data = useSelector(state => state.weather);
    console.log(data);
    const formatDateTime = (localtime) => {
        if (!localtime) return '';
        const [date, time] = localtime.split(' ');
        const [year, month, day] = date.split('-');
        const formattedDate = `${month}/${day}/${year}`;
        return `${formattedDate} at ${time}`;
    };
    let roundedTemperature = Math.round(data.temperature);
    return (
        <div className="outerSquare">
            <div className="innerSquare">
                {/* Location Information */}
                <div className="location">
                    <h2>{data.cityName}</h2>
                    <p>{data.country}</p>
                    <p className="date-time">{formatDateTime(data.timezone)}</p>
                </div>

                {/* Temperature and Weather Condition */}
                <div className="weather">
                    <h1 className="temperature">{roundedTemperature}°C</h1>
                    <p className="condition">{data.weatherCondition}</p>
                </div>

                {/* Weather Details */}
                <div className="weather-details">
                    <div className="detail">
                        <p className="label">Precipitation</p>
                        <p className="value">{data.precipitation} mm</p>
                    </div>
                    <div className="detail">
                        <p className="label">Humidity</p>
                        <p className="value">{data.humidity}%</p>
                    </div>
                    <div className="detail">
                        <p className="label">Wind</p>
                        <p className="value">{data.wind} km/h</p>
                    </div>
                </div>

                {/* Hourly Forecast */}
                <div className="hourly-forecast">
                    {data.hourlyForecast.map((hour, index) => (
                        <div className="hour" key={index}>
                            <p className="hour-time">{hour.time.split(' ')[1]}</p> 
                            <p className="hour-temp">{Math.round(hour.temp_c)}°C</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
