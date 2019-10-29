const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const app = express();

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password123@ds339968.mlab.com:39968/heroku_txwt1dj1"
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log(`Mongoose Database connection: ${MONGODB_URI}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Serve up static assets (usually on heroku)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
