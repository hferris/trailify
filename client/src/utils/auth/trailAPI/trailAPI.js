import axios from "axios";
import API_KEYS from "../../../api.json";

export default {
  // Gets all titles or whatever the object supplies - be sure to call argument
  getpark: function (title) {
    return axios.get(
      `https://parkapi-parkapi.p.rapidapi.com/park/map/%7Bid%7D/gpx/`,
      {
        headers: {
          "x-rapidapi-key": API_KEYS.park_api_key,
          "x-rapidapi-host": "parkapi-parkapi.p.rapidapi.com",
        },
      }
    );
  },
  // Saves a park to the database
  handleSave: function (savePark) {
    return axios.post("/api/park", savePark);
  },
  // Deletes the park with the given id
  deleteSave: function (id) {
    return axios.delete("/api/park/" + id);
  },
};


// from Rapid API
// Get GPX data for a map. Returns a file in GPX format. Input (id) is a map ID, not a park ID. To get the map ID, call /maps with the park ID.