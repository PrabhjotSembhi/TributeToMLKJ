import React from 'react'
import { useState, useEffect } from "react";
import ArtworkForm from './components/ArtworkForm';
import SubmissionForm from './components/SubmissionForm';
import Form from './components/Form';


const Home = () => {
  const [submissions, setSubmissions] = useState([]);



  return (
    <div>
      <Form/>
    </div>
  )
}

export default Home