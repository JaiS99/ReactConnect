import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./screens/home/Home";
import CreateSpace from "./screens/create-space/CreateSpace";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/create-space" element={<CreateSpace/>} />
   </Routes>
   </>  
  );
}

export default App;
