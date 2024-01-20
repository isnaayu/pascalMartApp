import { useState } from "react";
import LandingPage from "./component/LandingPage";
import EditUser from "./component/EditUser";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import InputData from "./components/InputData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/transaction" element={<></>} />
          <Route path="/edit" element={<EditUser />} />
          <Route path="/recap" element={<></>} />
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
