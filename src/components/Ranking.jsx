import React, { useEffect, useState } from "react";
import axios from "axios";
import Gold from "../../public/Gold.png";
import Prata from "../../public/Prata.png";
import Bronze from "../../public/Bronze.png";

const Ranking = () => {
  const [topBuyers, setTopBuyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopBuyers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/top-buyers`
        );
        setTopBuyers(response.data.topBuyers);
      } catch (error) {
        console.error("Error fetching top buyers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopBuyers();
  }, []);

  const getImageForIndex = (index) => {
    switch (index) {
      case 0:
        return Gold;
      case 1:
        return Prata;
      case 2:
        return Bronze;
      default:
        return null;
    }
  };

  const getLabelForIndex = (index) => {
    if (index >= 3 && index < 5) {
      return (index + 1).toString();
    }
    return null;
  };

  const getEmailWithoutDomain = (email) => {
    return email.split("@")[0];
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center my-5">
          <div className="loader"></div>
        </div>
      ) : topBuyers.length === 0 ? (
        <p className="text-lg text-gray-700 text-center">No buyers yet.</p>
      ) : (
        <ul className="text-lg text-gray-700">
          {topBuyers.map((buyer, index) => (
            <li key={index} className="mb-2 flex items-center">
              {index < 3 ? (
                <img
                  src={getImageForIndex(index)}
                  alt={`Rank ${index + 1}`}
                  className="w-6 h-6 mr-2"
                />
              ) : (
                <span className="w-6 h-6 mr-2 flex items-center justify-center font-semibold">
                  {getLabelForIndex(index)}
                </span>
              )}
              <span className="font-semibold my-2">
                {getEmailWithoutDomain(buyer.email)}
              </span>
              : {buyer.totalTickets} Tickets
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ranking;
