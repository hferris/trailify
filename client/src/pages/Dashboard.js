import React, { useState, useEffect, useCallback } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import trail from "../utils/auth/trailAPI/trailAPI";
import weather from "../utils/auth/weatherAPI/weatherAPI";

function Dashboard(props) {
  const [trails, setTrails] = useState([]);
  const [weather, setWeather] = useState([]);
  const [originalTrails, setOriginalTrails] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    trail.getTrail().then(({ data }) => {
      console.log("trail data:", data);
      setTrails(data.results);
    });
  }, []);

  const handleInputChange = useCallback(
    (event) => {
      event.preventDefault();
      console.log(event.target);
      console.log(event.target.value);

      const updatedTrails = originalTrails.filter((trail) => {
        if (trail.name.indexOf(event.target.value) !== -1) {
          return true;
        }
        return false;
      });
      if (updatedTrails.length === 0)
        alert(
          "No trail with that name is currently on the provided list. Please clear your search and try again."
        );
      setTrails([...updatedTrails]);
    },
    [originalTrails]
  );

  const viewTrails = trails.map((hike) => {
    return <p>{hike}</p>;
  });
  useEffect(() => {
    weather.getWeather().then(({ data }) => {
      console.log("weather data:", data);
      setWeather(data.results);
    });
  }, []);

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
// the search trails input will be used for both the trails and the weather api.
//
