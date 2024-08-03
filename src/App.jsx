import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Adjust the path as needed
import Dashboard from "./components/Dashboard"; // Example of another page component
import Form from "./components/Form";
import CountContext from "../context/RifasContext";
import PaymentConfirmation from "./components/Paymentconfirmation";
import SearchTicket from "./components/SeartchTicket";
import PaymentError from "./components/PaymentError";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(120 * 24 * 3600);
  return (
    <CountContext.Provider
      value={{
        timeLeft,
        setTimeLeft,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route
            path="/payment-confirmation"
            element={<PaymentConfirmation />}
          />
          <Route path="/consultticket" element={<SearchTicket />} />
          <Route
            path="/payment-confirmation/error"
            element={<PaymentError />}
          />
        </Routes>
      </Router>
    </CountContext.Provider>
  );
};

export default App;
