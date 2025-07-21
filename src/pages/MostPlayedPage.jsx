import React from 'react';
import ans from '/Data/data';
import Card from '../../component/Card';
import { motion } from 'framer-motion';

const MostPlayedPage = () => {
  
  const sortedGames = [...ans].sort((a, b) => b.plays - a.plays);
  const topGames = sortedGames.slice(0, 8); 

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <motion.h1
        className="text-3xl text-center text-green-400 font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🔥 Most Played Games
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {topGames.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default MostPlayedPage;
