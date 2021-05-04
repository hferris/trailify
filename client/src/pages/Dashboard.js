import React, { useState, useEffect, useCallback } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import trail from "../utils/auth/trailAPI/trailAPI";
import { api_key } from "../api.json";
import { park_api_key } from "../api.json";
import background from "../imgs/weather.jpg";

const styles = {
  fontFamily: "Roboto, Times New Roman, Times, serif",
  boxSizing: "border-box",
  backgroundImage: `url(${background})`,
};

function Dashboard(props) {
  const [park, setPark] = useState(null);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [originalTrails, setOriginalTrails] = useState([]);
  const [weatherResponse, setWeatherResponse] = useState(null);
  const [city, setCity] = useState("");
  const { user } = useAuth();

  // useEffect(() => {
  //   trail.getTrail().then(({ data }) => {
  //     console.log("trail data:", data);
  //     setTrails(data.results);
  //   });
  // }, []);

  const getPark = () => {
    const parkURL = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${park_api_key}`;
                                                  //  Query String Parameters - parkCode=acad,dena
    fetch(parkURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("park:", data);
        setPark(data);
      });
  };

  const getCityWeather = () => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${api_key}`;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("weather:", data);
        setWeatherResponse(data);
      });
  };

  const handleInputChange = (event) => {
    const val = event.target.value;
    setCity(val);
    console.log("city:", city);
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log("city:", city);
    getCityWeather();
    getPark();
  });

  return (
    <div style={styles}>
      <div>
        <input
          value={city}
          onChange={handleInputChange}
          name="text"
          className="form-control me-2"
          type="text"
          placeholder="Search City Here"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={(event) => {
            console.log(event.target.value);
            handleSubmit(event);
          }}
        >
          Submit
        </button>
      </div>

      <div>
        <p>Temperature: {weatherResponse?.main?.temp} F</p>
        <p>Humidity: {weatherResponse?.main?.humidity}%</p>
      </div>
    </div>
  );
}

export default Dashboard;
// the search trails input will be used for both the trails and the weather api. The goal is to bring in the current weather specific to the area AND a list of available trails for that area and display on Dashboard.
//

//  const updatedTrails (for example) is a separate input window from original search/city

//
//  {weatherResponse
// && JSON.stringify(weatherResponse)}
