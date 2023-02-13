import { useState } from "react";
import Axios from 'axios'

const ArtworkForm = () => {
  const [image, setImage] = useState([]);
const [imgUrl, setImgUrl] = useState('')

  const uploadImage = ( ) => {
    const formdata = new FormData()
    formdata.append("file", image)
    formdata.append("upload_preset", "ilehixlw")
    const postOptions = {
      method: "POST",
     
    
    };

    Axios.post("https://api.cloudinary.com/v1_1/dnvblgp76/image/upload", formdata)
     .then((response) => console.log(response.data.secure_url))
  }


    

  return (
    <div>
      <input onChange={(e) => {
        setImage(e.target.files[0])
      }}  type="file" name="image" className="form-control"  />
        <button  onClick={uploadImage}>Submit</button>
        
    </div>
  )
}

export default ArtworkForm