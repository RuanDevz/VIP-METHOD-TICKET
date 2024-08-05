import React from "react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ranking from "./Ranking";
import TROFEU from "../../public/TROFEU.png";

export default function Home() {
  return (
    <div className="p-6 font-sans bg-[#191919] min-h-screen flex flex-col items-center justify-center relative">
      <div className="w-full max-w-screen-lg">
        <div className="bg-white p-8 rounded-lg shadow-lg m-4 flex-1">
          <div className="flex justify-center gap-3 py-4 flex-row-reverse">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-2">
              Top 5 Buyers
            </h2>
            <img className="w-9" src={TROFEU} alt="TROFEU" />
          </div>
          <Ranking />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg m-4 flex-1">
          <h1 className="text-3xl font-bold mb-4 text-center">
            VIP METHOD TICKET
          </h1>
          <a
            href="https://rentry.co/sevenx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            <h2 className="text-2xl font-semibold mb-2 text-center">
              VIP UPDATED LEAKS
            </h2>
          </a>
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://discord.gg/95BKaYTPPS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaDiscord size={32} />
            </a>
          </div>
          <div className="flex justify-center">
            <Link to="/dashboard">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-[#333] transition duration-300">
                Buy VIP Ticket here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
