import React, { useState, useEffect } from 'react';

function calculateTimeLeft(deadline) {
  const difference = new Date(deadline) - new Date();
  return difference;
}

function formatTimeLeft(timeLeft) {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function ExpirationTimer({ expirationDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(expirationDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {timeLeft > 0 ? (
        <div className='text-lg text-gray-600 mb-6'>TIME LEFT: {formatTimeLeft(timeLeft)}</div>
      ) : (
        <div className='text-lg text-red-500'>TICKETS EXPIRED</div>
      )}
    </div>
  );
}

export default ExpirationTimer;
