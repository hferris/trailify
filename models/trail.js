const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// framework of a model from book hw - need info from api object to complete correctly
const postSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  // length: { type: Number },
  // image: { type: [String] },
  // link: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Trail;

/*
  axios.get('https://api.example.com')
  .then((response) => {
    Post.create({
      title: response.post_title,
    })
  })
  

*/