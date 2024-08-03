import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentError = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#333]">
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-xl font-semibold text-red-600">
          There was an error trying to make the payment, please try again
        </h1>
        <button
          onClick={() => navigate("/")}
          className="w-[100px] px-4 py-2 bg-black text-white font-bold rounded-md hover:bg-[#333] mt-10"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PaymentError;
