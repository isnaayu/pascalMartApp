/* eslint-disable no-unused-vars */
import { useState } from "react";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import EditUser from "./components/EditUser";
import InputData from "./components/InputData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editUser" element={<EditUser />} />
          <Route path="/inputData" element={<InputData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
