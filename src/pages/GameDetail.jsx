import React from 'react';
import { useParams } from 'react-router-dom';
import ans from '/Data/data.js'; 

const GameDetail = () => {
  const { id } = useParams();
  const game = ans.find((g) => g.id === parseInt(id));

  if (!game) {
    return <div className="text-white text-center mt-20 text-xl">😢 Game not found!</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
        <img
          src={game.photo}
          alt={game.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold text-purple-400">{game.title}</h2>
        <p>🎮 Genre: {game.genre}</p>
        <p>🕹️ Platform: {game.platform}</p>
        <p>📅 Year: {game.year}</p>
        <p className="text-green-400 font-bold text-lg">
          ₹{game.price.toFixed(2)}{' '}
          <span className="text-red-400 text-sm">({game.discount}% OFF)</span>
        </p>

      
        {game.link && (
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition"
          >
            🛒 Buy on Steam
          </a>
        )}
      </div>
    </div>
  );
};

export default GameDetail;
