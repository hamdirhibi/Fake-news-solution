const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  id: { type: String },
  votes: { type: Number },
});

module.exports = mongoose.model("News", newsSchema);
