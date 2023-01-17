const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const imageModel = require("./models");
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect(
    "mongodb+srv://prabh2508:mypass123@cluster0.skvjeds.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("connected successfully"))
.catch((err) => console.log('its an error', err) )

app.get("/", (req, res) => {
  res.send("Hello World! this is working fine");
});

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, uploads)
  }
})

const upload = multer({storage:storage})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
