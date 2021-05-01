import React, { useState, useEffect, useCallback } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import trail from "../utils/auth/trailAPI/trailAPI";
import weather from "../utils/auth/weatherAPI/weatherAPI";

function Dashboard() {
  const [trails, setTrails] = useState([]);
  const [weather, setWeather] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    trail.getTrail().then(({ data }) => {
      console.log("trail data:", data);
      setTrails(data.results);
    });
  }, []);

  const handleInputChange = useCallback((event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.value);
  });
  const viewTrails = trails.map((hike)=> {
      return (
          <p>{hike}</p>
      )
  })
  useEffect(() => {
    weather.getWeather().then(({ data }) => {
      console.log("weather data:", data);
      setWeather(data.results);
    });
  }, []);



  return <div>
      <p>Hello</p>
  </div>;
}

export default Dashboard;
