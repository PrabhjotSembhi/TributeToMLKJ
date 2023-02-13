import React from "react";
import { useState, useEffect } from "react";
import "./submissions.css";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isApproved, setIsApprove] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())

      .then((data) => setSubmissions(data));
  }, []);

  console.log(submissions);

  const handleApprove = (postdata) => {
    setIsApprove(true)
    const postOptions = {
      method: "POST",

      body: JSON.stringify(postdata),
    };

    fetch("http://localhost:5000/save", postOptions);
  };

  return (
    <div className="submisgrid">
      {submissions.map((submission) => {
        return (
          <div className="flexy" key={submission._id}>
            {}
            <h1 style={{ color: "red" }}>{submission.name}</h1>
            <img src={submission.imgUrl} alt="" />
            <button
            style={{ display: isApproved ? "none" : "" }}
             
              onClick={() => {
                
                handleApprove(submission);
              }}
            >
              approve
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Submissions;
