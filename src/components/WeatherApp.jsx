import React, { useEffect, useState } from 'react';

import './WeatherApp.css';
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import clear_icon from '../assets/clear.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import { Get } from '../config/Apimethods';


//======================================= Functions to get weather api .
const WeatherApp = () => {
    const [data, setData] = useState([])
    let api_key = "45d11526b939c7d57e8bc1fcce59baf6"

    const [wicon, setWicon] = useState(cloud_icon)
    const search = async () => {
        const element = document.getElementsByClassName('cityInput');
        if (element[0].value === '') {

            return 0;
        }
        const humidity = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-rate');
        const temprature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');

        console.log(element[0].value)
        Get(element[0].value).then((res) => {
            setData(res.data)
            location[0].innerHTML = res.data.name;
            humidity[0].innerHTML = res.data.main.humidity + " %";
            wind[0].innerHTML = Math.floor(res.data.wind.speed) + " km/h";
            temprature[0].innerHTML = Math.floor(res.data.main.temp) + " °C";



            console.log(res.data.weather[0].icon)
            const icon = res.data.weather[0].icon
            if (icon === "01d" || icon === "01n") {
                setWicon(clear_icon)
            }
            else if (icon === "02d" || icon === "02n") {
                setWicon(cloud_icon)
            }
            else if (icon === "03d" || icon === "03n") {
                setWicon(drizzle_icon)
            }
            else if (icon === "04d" || icon === "0n") {
                setWicon(drizzle_icon)
            }
            else if (icon === "09d" || icon === "09n") {
                setWicon(rain_icon)
            }
            else if (icon === "10d" || icon === "10n") {
                setWicon(rain_icon)
            }
            else if (icon === "13d" || icon === "13n") {
                setWicon(snow_icon)
            }
            else {
                setWicon(clear_icon)
            }

        }).catch((err) => {
            console.log(err)
        })

    }

    //==================Html :) =========.
    return (
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className="cityInput" placeholder='Enter Your City Name' />
                <div className="searchIcon" onClick={() => { search() }}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className='weather-image'>
                <img src={wicon} alt="" />
            </div>
            <div className='weather-temp'>--°C</div>
            <div className='weather-location'>Your City ...</div>
            <div className='data-container'>
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">--%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">-- km/h</div>
                        <div className="text2">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WeatherApp