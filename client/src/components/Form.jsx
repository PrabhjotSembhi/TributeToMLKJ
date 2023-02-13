import {useState} from 'react'
import Axios from 'axios'

const Form = () => {


    const [imgUrl, setImgUrl] = useState('') 
    let urlll ="";
    const defaultFormFeilds = {
        name: "",
        title:"",
        qoute:"",
        photo:urlll,
        email:""
      };

  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { name, title, qoute, photo, email } = formFeilds;
 const [image, setImage] = useState([]);
 



  const handleSubmit = async ( e) => {
    e.preventDefault()

    console.log('handle change is starter')

    const formdata = new FormData()
    formdata.append("file", image)
    formdata.append("upload_preset", "ilehixlw")


   await Axios.post("https://api.cloudinary.com/v1_1/dnvblgp76/image/upload", formdata)
    .then((response) => urlll = response.data.secure_url)
    console.log(imgUrl,'handle change is working')

    const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFeilds,{ photo:urlll}),
      };
  
    await  fetch("http://localhost:5000/test", postOptions).then((response) => console.log(response))
    
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFeilds({ ...formFeilds, [name]: value });
    console.log('handle change is working')
  };



  





  return (
    <form className='SubmissionForm' onSubmit={handleSubmit}>
    <input  type='text' name='name' placeholder='Name' value={name} onChange={handleChange} />
    <input  type='text' name='title' placeholder='Title' value={title} onChange={handleChange} />
    <input  type='text' name='qoute' placeholder='Qoute' value={qoute} onChange={handleChange} />
    <input id="photo" type='file' accept="image/*" onChange={(e) => {
        setImage(e.target.files[0])
      }}   />
    <input  type='email' name='email' placeholder='Email' value={email} onChange={handleChange} />
    <input  type='submit' value='ok'  />

    </form>
  )
}

export default Form