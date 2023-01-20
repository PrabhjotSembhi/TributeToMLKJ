import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Protected from "./routes/Protected";
import Home from "./Home";
import Submissions from "./routes/submisions/Submissions";
import AdminSignIn from "./routes/admin-sign-in/AdminSignIn";



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<AdminSignIn/>} />
      <Route path='/submissions' element={<Protected component={<Submissions/>}/>} />

    </Routes>
  )
}

export default App;
