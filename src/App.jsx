/* eslint-disable no-unused-vars */
import { useState } from "react";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import InputData2 from "./components/InputData2";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/input" element={<InputData2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
