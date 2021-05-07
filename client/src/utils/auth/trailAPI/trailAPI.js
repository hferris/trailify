import axios from "axios";
import API_KEYS from "../../../api.json";

export default {
  // Gets all titles or whatever the object supplies - be sure to call argument
  getTrail: function (title) {
    return axios.get(
      `https://trailapi-trailapi.p.rapidapi.com/trails/map/%7Bid%7D/gpx/`,
      {
        headers: {
          "x-rapidapi-key": API_KEYS.trail_api_key,
          "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
        },
      }
    );
  },
  // Saves a trail to the database
  handleSave: function (savePark) {
    return axios.post("/api/parks/", savePark);
  },
  // Deletes the trail with the given id
  deleteSave: function (id) {
    return axios.delete("/api/trails/" + id);
  },
  getParks() {
    return axios.get('/api/parks');
  },
};


// from Rapid API
// Get GPX data for a map. Returns a file in GPX format. Input (id) is a map ID, not a trail ID. To get the map ID, call /maps with the trail ID.