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
        <div className="landing-container" style={{
            // backgroundImage: `url(${imgSrc})`,
            // backgroundSize: 'cover', // Ensure the image covers the container
            // backgroundPosition: 'center', // Center the image
            // backgroundRepeat: 'no-repeat', // Avoid repeating the image
            // height: '100vh', // Full viewport height
            // width: '100vw' // Full viewport width
        }}>
                <h1>WeatherVista</h1>
                <h2>Experience the perfect weather, no matter where life takes you.</h2>
                <button onClick={handleButtonClick} className="weather-finder-button">
                    Find your Weather
                </button>
            </div>
    );
};
