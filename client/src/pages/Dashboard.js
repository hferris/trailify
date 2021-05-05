import React, { useState, useEffect, useCallback } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { api_key } from "../api.json";
import { park_api_key } from "../api.json";
import background from "../imgs/weather.jpeg";

const styles = {
  width: "100vw",
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${background})`,
};

function Dashboard(props) {
  const [park, setPark] = useState({});
  const [weatherResponse, setWeatherResponse] = useState({});
  const [city, setCity] = useState("");
  const { user } = useAuth();
  const [test, setTest] = useState({ data: [] });

  const getPark = () => {
    const parkURL = `https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=${city}&stateCode&api_key=${park_api_key}`;

    console.log("parkURL: ", parkURL);
    fetch(parkURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        setTest({ data: data.data });
        console.log("test:", test);
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

      {test.data
        ? test.data.map((obj) => {
            return (
              /* add card styles to the below div */
              <div className="card">
                <img
                  // style={{ width: "100px", height: "100px" }}
                  src={obj.images}
                  className="card-img-top"
                  alt={obj.images.altText}
                />
                <div>
                  <div className="card-body">
                    <h5 className="card-title">Name: {obj.name} </h5>
                    <p className="card-text">
                      Description: {obj.description} {}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Directions: {obj.directionsInfo}
                    </li>
                    <li className="list-group-item">
                      Designated as a: {obj.designation}
                    </li>
                    <li className="list-group-item">
                      <button
                        className="btn btn-outline-success"
                        type="submit"
                        onClick={(event) => {
                          console.log(event.target.value);
                          // handleSave(event);
                        }}
                      >
                        Save as Favorite
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })
        : " "}
    </div>
  );
}

export default Dashboard;

//  // Saves a park to the database
//  handleSave: function (savePark) {
//   return axios.post("/api/trails", savePark);
// },
// // Deletes the park with the given id
// deleteSave: function (id) {
//   return axios.delete("/api/trails/" + id);
// },
// };
