import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CountContext from "../../context/RifasContext";
import ExpirationTimer from "./ExpirationTimer"; // Import the ExpirationTimer component

export default function Dashboard() {
  const { timeLeft, setTimeLeft } = useContext(CountContext);
  const [rifasAvailable, setRifasAvailable] = useState(0);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          "https://rifas-api.vercel.app/tickets-restantes"
        );
        setRifasAvailable(response.data.ticketsDisponiveis);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchTickets();
  }, []); // Add an empty dependency array to run once

  const expirationDate = new Date('2024-12-01T23:59:59');

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#333]">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="bg-white bg-opacity-70 p-10 rounded-lg shadow-lg text-center relative z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          VIP TICKETS LEFT
        </h1>
        {loading ? (
          <div className="flex justify-center items-center my-5">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="text-lg text-gray-700 mb-2">
            {rifasAvailable} REMAINING VIP TICKETS
          </div>
        )}
        <ExpirationTimer expirationDate={expirationDate} />
        <Link to="/form">
          <button className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-md hover:bg-[#333] transition-colors duration-300">
            BUY VIP TICKET NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
