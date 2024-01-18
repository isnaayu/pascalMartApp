/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputData from "./components/InputData";
import EditUser from "./components/EditUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transaction from "./components/Transaction";
import InputData2 from "./components/InputData2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<InputData />} />
          <Route path="/i" element={<InputData2 />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
