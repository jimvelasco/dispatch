const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const shuttles = require("./routes/api/shuttles");
const trips = require("./routes/api/shuttles");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config

const db = require("./config/keys").mongoURI;

// Connect to Mongo

mongoose
  .connect(db)
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World.  This is JJV"));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.use("/api/shuttles", shuttles);
app.use("/api/shuttles/trips", trips);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  //

  // need module path for this imported at top
  // so now any requests other than the ones above will go to index.html
  // find out express app.get(*)

  // any route that gets hit here in client.build will go to index.html
  app.get("*", (req, res) => {
    // go to client/build/index.html
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

//mongodb://<dbuser>:<dbpassword>@ds061188.mlab.com:61188/devconnect
