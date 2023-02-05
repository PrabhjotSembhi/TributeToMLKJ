import React from 'react'
import { useState, useEffect } from "react";




const Home = () => {
  const [submissions, setSubmissions] = useState([]);


useEffect(() => {
  fetch("http://localhost:5000/artworks")
    .then((response) => response.json())

    .then((data) => setSubmissions(data))
}, []);

console.log(submissions)
  return (
    <div>{'hey'}</div>
  )
}

export default Home