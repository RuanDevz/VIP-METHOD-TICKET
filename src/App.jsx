import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Ajuste o caminho conforme necessário
import Dashboard from "./components/Dashboard"; // Exemplo de outro componente de página
import Form from "./components/Form";
import {RifasProvider} from '../context/RifasContext'
import PaymentConfirmation from "./components/Paymentconfirmation";
import SearchTicket from "./components/SeartchTicket";

const App = () => {
  return (
    <Router>
      <RifasProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation/>}/>
          <Route path="/consultticket" element={<SearchTicket/>}/>
        </Routes>
      </RifasProvider>
    </Router>
  );
};

export default App;
