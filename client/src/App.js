import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Protected from "./Protected";
import Home from "./Home";



function App() {
  return (
    <Routes>
      <Route path='/' element={<Protected component={<Home/>}/>} />

    </Routes>
  )
}

export default App;
