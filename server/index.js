const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const imageModel = require("./models/model");
const approvedArtworks = require("./models/approvedArtworks");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
require("dotenv").config();
const app = express();
const port =  5000;

cloudinary.config({
  cloud_name: "dnvblgp76",
  api_key: "551833517997557",
  api_secret: "nEBMz_FqbDMGWI8VhkeY16CM0Ts",
  secure: true,
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://prabh2508:mypass123@cluster0.skvjeds.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("its an error", err));




app.post('/test', async (req, res) => {

  console.log(req.body);
  res.send('yeh')

})






app.post("/", async (req, res) => {
  console.log(req.body);

 /* cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    console.log(err, 'clou errro')

    /*const imageModelTest = imageModel({
      name: req.body.name,
      imgUrl: result.url,
    });

   /* **imageModelTest
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "we have an error");
      });*
  });*/
  res.send("done image doen");
});

app.post("/save", async (req, res) => {
  console.log('got a request');

  console.log(req.body);


 const artworkModel = approvedArtworks({
    artwork: req.body,
  });


  artworkModel
    .save()
    .then((res) => {
      console.log("artwork is approved");
    })
    .catch((err) => {
      console.log(err, "we have an error");
    });

  res.send("save artworks");
});



app.get("/artworks", async (req, res) => {
  approvedArtworks.find({}, function(err,result){
    if (err) {
      console.log(err)
    }else{
      res.json('result')
    }
  })
})


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
