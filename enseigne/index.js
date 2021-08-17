const express = require("express");
const app = express();
const morgan = require("morgan");
var cors = require("cors");
const helmet = require("helmet");
const { MongoClient } = require("mongodb");

// Connection configuration
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

//Import routes
const niceRoutes = require("./routes/niceRoutes");
const parisRoutes = require("./routes/parisRoutes");
const marseilleRoutes = require("./routes/marseilleRoutes");
const lilleRoutes = require("./routes/lilleRoutes");
const dijonRoutes = require("./routes/dijonRoutes");
const magasinsRoutes = require("./routes/magasinsRoutes");

//Middle ware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

//Routes
app.use("/api/paris", parisRoutes);
app.use("/api/nice", niceRoutes);
app.use("/api/marseille", marseilleRoutes);
app.use("/api/lille", lilleRoutes);
app.use("/api/dijon", dijonRoutes);
app.use("/api/magasins", magasinsRoutes);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(process.env.PORT, () => {
  console.log("bing successfully");
});
// var db;
// var error;
// // var waiting = []; // Callbacks waiting for the connection to be made

// MongoClient.connect(URL,function(err,database){
//   error = err;
//   db = database;
// })
// db.collection('enseigne').aggregate([ {$match:{}}, {$sort:{}}, {$project :{_id:1}}]);
