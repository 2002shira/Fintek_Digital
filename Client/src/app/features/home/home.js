import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Search from "../search/Search";
import Card from "../card/Card";
import "./Home.css";

const Home = () => {
    const [dataAvailable, setDataAvailable] = useState(false);
    const weatherData = useSelector(state => state.weather);

    useEffect(() => {
        if (weatherData.cityName) {
            setDataAvailable(true);
        } else {
            setDataAvailable(false);
        }
    }, [weatherData]);

    const handleSearchSubmit = () => {
      
    };

    return (
        <>
            <div className="container">
                <div>
                    <div className="image">
                        <img src="./logo.png" alt="Logo" />
                    </div>
                    <Search onSearchSubmit={handleSearchSubmit} />
                </div>
                {dataAvailable ? <Card /> : <div className="placeholder"></div>}
            </div>
        </>
    );
};

export default Home;
