import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"

export const LandingPage = ({ onButtonClick }) => {
    let navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/weather");
    };
    let imgSrc="./landingImage.png"
    return (
        <div className="landing-container" >
                <h1>WeatherVista</h1>
                <h2>Experience the perfect weather, no matter where life takes you.</h2>
                <button onClick={handleButtonClick} className="weather-finder-button">
                    Find your Weather
                </button>
            </div>
    );
};
