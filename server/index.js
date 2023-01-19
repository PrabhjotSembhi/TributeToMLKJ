const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const imageModel = require("./model");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000;


cloudinary.config({ 
  cloud_name: 'dnvblgp76', 
  api_key: '551833517997557', 
  api_secret: 'nEBMz_FqbDMGWI8VhkeY16CM0Ts',
  secure: true
});

app.use(fileUpload({
  useTempFiles: true
}))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://prabh2508:mypass123@cluster0.skvjeds.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("its an error", err));


app.post("/", async (req,res) => {

  const file = req.files.photo;
   await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    console.log(result)
  })

  await res.send('done')
})


app.get('/',  async (req, res) =>{
 res.send("this is working")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
