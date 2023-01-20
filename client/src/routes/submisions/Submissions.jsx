import React from "react";
import { useState, useEffect } from "react";
import './submissions.css'


const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/')
    .then((response) => response.json())
    .then((data) => setSubmissions(data))
    .then(() => console.log( submissions))
  }, [])

  return (

    <div className="submisgrid">
      {
        submissions.map((submission) => {
          return(
            <div className="flexy" key={submission._id}>
              
                 <h1>{submission.name}</h1>
                 <img src={submission.imgUrl} alt="" />

            </div>
           
          )
        })
      }
    </div>
  );
};

export default Submissions;
