import { useState } from "react";
import Axios from 'axios'

import './submissionform.css'


const SubmissionForm = () => {

  

  const defaultFormFeilds = {
    name: "",
    title:"",
    qoute:"",
    photo:"",
    email:""
  };
  

  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { name, title, qoute, photo, email } = formFeilds;



  




  const handleSubmit = (e, postdata) => {

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formFeilds),
    };

    fetch("http://localhost:5000/", postOptions);


  };


  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };

  return (
    <div>
        <form className='SubmissionForm' onSubmit={handleSubmit}>
            <input  type='text' name='name' placeholder='Name' value={name} onChange={handleChange} />
            <input  type='text' name='title' placeholder='Title' value={title} onChange={handleChange} />
            <input  type='text' name='qoute' placeholder='Qoute' value={qoute} onChange={handleChange} />
            <input id="photo" type='file' accept="image/*"  name= 'photo' />
            <input  type='email' name='email' placeholder='Email' value={email} onChange={handleChange} />
            <input  type='submit' value='ok'  />
      
            </form>
    </div>
  )
}

export default SubmissionForm