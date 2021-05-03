import React, { useState, useEffect, useCallback } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import trail from "../utils/auth/trailAPI/trailAPI";
// import weather from "../utils/auth/weatherAPI/weatherAPI";
// breaks if weather is imported

function Dashboard(props) {
  const [trails, setTrails] = useState([]);
  const [weather, setWeather] = useState([]);
  const [originalTrails, setOriginalTrails] = useState([]);
  const [city, setCity] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    trail.getTrail().then(({ data }) => {
      console.log("trail data:", data);
      setTrails(data.results);
    });
  }, []);

  // useEffect(() => {
  //   weather.getWeather().then(({ data }) => {
  //     console.log("weather data:", data);
  //     setWeather(data.results);
  //   });
  // }, []);

  const handleInputChange = useCallback(
    (event) => {
      event.preventDefault();
      console.log(event.target);
      console.log(event.target.value);

      const currentCity = city.filter((area) => {
        if (area.name.indexOf(event.target.value) !== -1) {
          return true;
        }
        return false;
      });
      if (currentCity.length === 0)
        alert(
          "No city with that name is available. Please clear your search and try again."
        );
      setCity([...currentCity]);
    },
    [city]
  );

  // const viewTrails = trails.map((hike) => {
  //   return <p>{hike}</p>;
  // });

  return (
    <div>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          props.handleInputChange(event);
        }}
        value={props.search}
        name="text"
        className="form-control me-2"
        type="text"
        placeholder="Search City Here"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Clear Search
      </button>
    </div>
  );
}

export default Dashboard;
// the search trails input will be used for both the trails and the weather api. The goal is to bring in the current weather specific to the area AND a list of available trails for that area and display on Dashboard.
//

//  const updatedTrails (for example) is a separate input window from original search/city
