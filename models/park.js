const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// framework of a model from book hw - need info from api object to complete correctly
const parkSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  directions: { type: Number },
  image: { type: [String] },
  designation: { type: String, required: true },
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;

/*
  axios.get('https://api.example.com')
  .then((response) => {
    Post.create({
      title: response.post_title,
    })
  })
  

*/