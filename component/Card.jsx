import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Card = ({ game }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="cursor-pointer bg-black bg-opacity-60 border border-purple-600 rounded-xl p-4 hover:shadow-purple-600 transition"
      onClick={() => navigate(`/game/${game.id}`)}
      whileHover={{ scale: 1.05 }}
    >
      <img src={game.photo} alt={game.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold text-purple-300">{game.title}</h2>
      <p className="text-sm text-purple-200">🎮 {game.genre}</p>
      <p className="text-sm text-purple-200">🕹️ {game.platform}</p>
      <p className="text-sm text-purple-200">📅 {game.year}</p>
      <p className="text-green-400 font-semibold">
        ₹{game.price} <span className="text-red-400 text-sm">({game.discount}% OFF)</span>
      </p>
    </motion.div>
  );
};

export default Card;
