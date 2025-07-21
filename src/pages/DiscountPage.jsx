import React from 'react';
import ans from '/Data/data';
import Card from '../../component/Card'; 
import { motion } from 'framer-motion';

const DiscountPage = () => {
  const discountedGames = ans.filter(game => game.discount > 0);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <motion.h1
        className="text-3xl text-center text-green-400 font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        💸 Discounted Games
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {discountedGames.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default DiscountPage;
