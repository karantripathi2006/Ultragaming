import React, { useState } from 'react';
import ans from '../Data/data';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredGames = ans.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase()) ||
    game.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-4"> */}
      {/* <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-28 sm:pt-32 px-4"> */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 pt-[8rem]">

        <motion.h1
          className="text-4xl sm:text-5xl text-center text-purple-500 font-extrabold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎮 Game Store
        </motion.h1>

        {/* <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="🔍 Search by title or genre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg px-4 py-2 rounded-md border border-purple-500 bg-black text-purple-200 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div> */}
        <div className="flex justify-center px-4 sm:px-0 mb-8">
  <input
    type="text"
    placeholder="🔍 Search by title or genre..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full sm:max-w-lg px-4 py-2 rounded-md border border-purple-500 bg-black text-purple-200 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
  />
</div>


        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              className="cursor-pointer bg-black bg-opacity-60 backdrop-blur-lg border border-purple-600 rounded-xl p-4 hover:shadow-purple-600 shadow-md transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => navigate(`/game/${game.id}`)}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={game.photo}
                alt={game.title}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <h2 className="text-xl font-semibold text-purple-300">{game.title}</h2>
              <p className="text-sm text-purple-200">🎮 Genre: {game.genre}</p>
              <p className="text-sm text-purple-200">🕹️ Platform: {game.platform}</p>
              <p className="text-sm text-purple-200">📅 Year: {game.year}</p>
              <p className="text-md mt-2 text-green-400 font-semibold">
                ₹{game.price.toFixed(2)}{' '}
                <span className="text-sm text-red-400 ml-1">({game.discount}% OFF)</span>
              </p>
            </motion.div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <motion.p
            className="text-center text-purple-400 mt-10 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            😢 No games found for "{search}"
          </motion.p>
        )}
      </div>

      <footer className="mt-16 text-center text-sm text-purple-500 border-t border-purple-700 pt-6">
        <p>© {new Date().getFullYear()} GameStore Inc. — All Rights Reserved.</p>
        <p className="mt-1 italic text-purple-400">
          ⚖️ We reserve the right to reverse any transaction. |"🌍 Duniya Dari: Loot toh sabko chahiye hoti hai, par risk sirf player uthata hai."
        </p>
      </footer>
    </>
  );
};

export default Home;
