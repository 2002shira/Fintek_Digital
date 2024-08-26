import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from "../weather/weatherApi";
import { updateData } from '../weather/weatherReducer';
import './Search.css';

const Search = ({ onSearchSubmit }) => {
    const [textInput, setTextInput] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const submit = async () => {
        if (!textInput) {
            setError('City name is a required field');
            return;
        }
        try {
            const result = await getWeather(textInput);
            if (!result || !result.data || !result.data.location) {
                setError('City not found. Please enter a valid city name.');
                return;
            }
            dispatch(updateData(result.data));
            onSearchSubmit();
        } catch (error) {
            setError('City name does not exist. Please try again.');
        }
    };

    const handleChange = (e) => {
        setTextInput(e.target.value);
        if (error) {
            setError('');
        }
    };

    return (
        <div>
            <div className="text">
                Use our weather app<br />
                to see the weather<br />
                around the world<br />
            </div>
            <div className="input-container">
                <p className='p'>City Name</p>
                <div className="input-wrapper">
                    <input
                        type="text"
                        className='input'
                        placeholder='City name'
                        value={textInput}
                        onChange={handleChange}
                    />
                    <button className='button' onClick={submit}>Check</button>
                </div>
                {error && <p className='error' style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
}

export default Search;
