import React from "react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 font-sans bg-[#333] min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">
          VIP METHOD TICKET
        </h1>
        <p className="mb-4 text-center">We are happy to have you here.</p>
        <a
          href="https://rentry.co/sevenx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          <h2 className="text-2xl font-semibold mb-2">VIP UPDATED LEAKS</h2>
        </a>
        <p className="mb-4"></p>
        <h2 className="text-2xl font-semibold mb-2">VIP DISCORD</h2>
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
  );
}
