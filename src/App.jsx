import { ChakraProvider } from '@chakra-ui/react'
import PurchaseRecap from './pages/PurchaseRecap'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import Users from './components/pages/users/Users';
import InputData from './components/pages/transactions/InputData';
import Transactions from './components/pages/transactions/Transactions';
import RecapTransactions from './components/pages/transactions/RecapTransactions';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-user" element={<Users />} />
          <Route path="/input-data" element={<InputData />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/recap-trx" element={<RecapTransactions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
