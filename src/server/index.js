const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
var bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
const app = express();
var aylien = require("aylien_textapi");

// Use the API
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});
console.log(process.env);

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

let port = 8080;

app.listen(port);
{
  console.log(`App listening on port ${port}!`);
}
console.log(`__dirname: ${__dirname}`);
app.get("/", function(req, res) {
  res.sendFile(path.resolve("./dist/index.html"));
});

// API request sent to Aylien API
app.post("/article", function(req, res) {
  console.log("POST request received");
  console.log(req.body);
  textapi.sentiment(
    {
      url: req.body.text,
      mode: "document",
    },
    function(error, response) {
      console.log("inside post function");
      console.log(response);
      res.send(response);
      if (error === null) {
        console.log("error");
        console.log(response);
      }
    }
  );
});

module.exports = app;
