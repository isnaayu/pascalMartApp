/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import InputData from "./components/InputData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transaction from "./components/Transaction";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/input" element={<InputData />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
