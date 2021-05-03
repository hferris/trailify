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
  // Saves a post to the database
  saveTrail: function (saveTrail) {
    return axios.post("/api/trails", saveTrail);
  },
  // Deletes the post with the given id
  deleteTrail: function (id) {
    return axios.delete("/api/trails/" + id);
  },
};
