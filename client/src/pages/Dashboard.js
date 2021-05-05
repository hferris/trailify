import React, { useState, useEffect, useCallback } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { api_key } from "../api.json";
import { park_api_key } from "../api.json";
import background from "../imgs/weather.jpeg";

const styles = {
  height: "100vh",
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundPosition: 'center',
  backgroundSize: "cover",
  backgroundImage: `url(${background})`,
  
};

function Dashboard(props) {
  const [park, setPark] = useState({});
  const [weatherResponse, setWeatherResponse] = useState({});
  const [city, setCity] = useState("");
  const { user } = useAuth();

  const getPark = () => {
    const parkURL = `https://developer.nps.gov/api/v1/parks?q=${city}&api_key=${park_api_key}`;
    // 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=INSERT-API-KEY-HERE'
    console.log("parkURL: ", parkURL);
    fetch(parkURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("park:", data);
        setPark(data);
      });
  };

  const getCityWeather = () => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${api_key}`;

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

      {weatherResponse.list
        ? weatherResponse.list.map((weatherItem, idx) => {
            if (idx % 8 === 4) {
              return (
                <div key={idx}>
                  <p>Date: {weatherResponse?.list[idx]?.dt_txt}</p>
                  <p>Temperature: {weatherResponse?.list[idx]?.main?.temp} F</p>
                  <p>Humidity: {weatherResponse?.list[idx]?.main?.humidity}%</p>
                </div>
              );
            }
          })
        : ""}

      {/* add card styles to the below div */}
      <div className="card">
        <img
          // style={{ width: "100px", height: "100px" }}
          src={props.image}
          className="card-img-top"
          alt={setPark}
        />
        <div>
          <div className="card-body">
            <h5 className="card-title">Name: {setPark}</h5>
            <p className="card-text">Description: {setPark}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Directions: {setPark}</li>
            <li className="list-group-item">email to Contact: {setPark}</li>
          </ul>
        </div>
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
