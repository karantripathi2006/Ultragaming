import React from 'react';
import ans from '/Data/data';
import Card from '../../component/Card';
import { motion } from 'framer-motion';

const getBestCategory = () => {
  const genreCount = {};
  ans.forEach(game => {
    genreCount[game.genre] = (genreCount[game.genre] || 0) + 1;
  });

  const bestGenre = Object.entries(genreCount).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return bestGenre;
};

const BestCategoryPage = () => {
  const bestGenre = getBestCategory();
  const bestGames = ans.filter(game => game.genre === bestGenre);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <motion.h1
        className="text-3xl text-center text-yellow-400 font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🏆 Best Category: {bestGenre}
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bestGames.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default BestCategoryPage;
