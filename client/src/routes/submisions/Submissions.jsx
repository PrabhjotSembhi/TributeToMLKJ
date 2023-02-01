import React from "react";
import { useState, useEffect } from "react";
import "./submissions.css";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => setSubmissions(data))
      .then(() => console.log(submissions));
  }, []);

  async function postData(url = "http://localhost:5000/save", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });


  return (
    <div className="submisgrid">
      {submissions.map((submission) => {
        return (
          <div className="flexy" key={submission._id}>
            <h1>{submission.name}</h1>
            <img src={submission.imgUrl} alt="" />
            <button onClick={() =>{
              fetch('https://example.com/profile', {

                method: 'POST', // or 'PUT'
                headers: {
                  mode: 'cors', // no-cors, *cors, same-origin
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(submission),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Success:', data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            }}>aprove</button>
            {console.log(submission)}
          </div>
        );
      })}
    </div>
  );
};

export default Submissions;
