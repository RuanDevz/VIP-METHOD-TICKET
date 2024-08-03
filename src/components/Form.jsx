import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExpirationTimer from './ExpirationTimer'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(5);
  const [rifasAvailable, setRifasAvailable] = useState(0);
  const [ticketGenerated, setTicketGenerated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('https://rifas-api.vercel.app/tickets-restantes');
        setRifasAvailable(response.data.ticketsDisponiveis);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchTickets();
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rifasAvailable >= quantity && quantity >= 5 && quantity <= 250) {
      try {
        const response = await axios.post(
          'https://rifas-api.vercel.app/generate-tickets',
          { name, email, quantity }
        );

        localStorage.setItem('UserEmail', email);
        localStorage.setItem('UserName', name);
        localStorage.setItem('QuantityItem', JSON.stringify(quantity));

        const responseData = response.data;
        console.log('Resposta da API:', responseData);

        if (responseData && Array.isArray(responseData.tickets)) {
          const ticketNumbers = responseData.tickets.map(
            (ticket) => ticket.ticket
          );

          localStorage.setItem('UserTicket', JSON.stringify(ticketNumbers));
          console.log('Tickets salvos no localStorage:', ticketNumbers);

          setTicketGenerated(responseData.tickets);
        } else {
          console.error('A resposta da API não contém um array de tickets ou tickets está faltando.');
        }

        const products = [
          {
            name: 'VIP Method Ticket',
            price: 1,
            quantity,
          },
        ];

        try {
          const { data } = await axios.post(
            'https://rifas-api.vercel.app/create-checkout',
            { products }
          );

          console.log(data);
          window.location.href = data.url;
        } catch (error) {
          console.error('Error creating checkout session:', error);
        }
      } catch (error) {
        console.error('Error generating ticket:', error);
      }
    } else {
      alert('A quantidade de ingressos deve estar entre 5 e 250, e não pode exceder o número disponível!');
    }
  };

  const expirationDate = new Date('2024-12-01T23:59:59');

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#333]">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="bg-white bg-opacity-70 p-10 rounded-lg shadow-lg text-center relative z-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">VIP METHOD TICKET</h1>
        <p className="text-xl text-gray-600 mb-6">PRICE: $1</p>
        <h2 className="text-2xl text-gray-700 mb-2 pb-3">
          {loading ? 'Loading...' : `${rifasAvailable} REMAINING VIP TICKETS`}
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          <ExpirationTimer expirationDate={expirationDate} />
        </p>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border rounded-md text-gray-800"
              required
            />
            <input
              type="email"
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border rounded-md text-gray-800"
              required
            />
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">
                Tickets Quantity (5 to 250):
                <input
                  type="number"
                  min={5}
                  max={250}
                  placeholder="Tickets quantity"
                  value={quantity}
                  onChange={(e) => {
                    const newValue = Math.max(5, Math.min(250, parseInt(e.target.value) || 5));
                    setQuantity(newValue);
                  }}
                  className="px-4 py-2 border rounded-md text-gray-800 mt-1"
                  required
                />
              </label>
              <p className="text-black text-sm mt-1">
                Quantity must be between 5 and 250
              </p>
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-md hover:bg-[#333] transition-colors duration-300"
            >
              BUY VIP TICKET NOW
            </button>
            <Link to="/consultticket">
              <p className="text-black underline">CONSULT TICKET</p>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
