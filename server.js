const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password123@ds339968.mlab.com:39968/heroku_txwt1dj1"
mongoose.connect(MONGODB_URI);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
