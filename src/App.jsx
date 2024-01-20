import { ChakraProvider } from '@chakra-ui/react'
import PurchaseRecap from './pages/PurchaseRecap'
import { useState } from "react";
import "./App.css";
import LandingPage from "./component/LandingPage";
import EditUser from "./components/EditUser";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import InputData from "./components/InputData";
import Transaction from "./components/Transaction";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editUser" element={<EditUser />} />
          <Route path="/inputData" element={<InputData />} />
          <Route path="/purchase" element={<PurchaseRecap />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
