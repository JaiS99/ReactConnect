import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./screens/home/Home";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
   </Routes>
   </>  
  );
}

export default App;
