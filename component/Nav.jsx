import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/'); 
  };

  return (
    <motion.nav
      className="w-full px-6 py-3 bg-black shadow-lg shadow-cyan-600 fixed top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
       
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <motion.img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajV6cHMwcjcwdWdkZ3RtMHNyb2s3MDdsMmdmN3ZlYXJyMHo2Y2xyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y0NFayaBeiWEU/giphy.gif"
            alt="logo"
            className="w-16 h-16 rounded-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-300 glow-text font-retro">Ultra Gaming</h1>
        </div>

       
        <div className="flex flex-wrap gap-5 justify-center md:justify-end items-center">
          <Link to="/home">
            <motion.h1 className="text-amber-400 text-lg sm:text-xl hover:text-blue-400 transition font-semibold cursor-pointer" whileHover={{ scale: 1.1 }}>
              Home
            </motion.h1>
          </Link>

          <Link to="/discount">
            <motion.h1 className="text-amber-400 text-lg sm:text-xl hover:text-blue-400 transition font-semibold cursor-pointer" whileHover={{ scale: 1.1 }}>
              Discount
            </motion.h1>
          </Link>

          <Link to="/best-category">
            <motion.h1 className="text-amber-400 text-lg sm:text-xl hover:text-blue-400 transition font-semibold cursor-pointer" whileHover={{ scale: 1.1 }}>
              Best Category
            </motion.h1>
          </Link>

          <Link to="/most-played">
            <motion.h1 className="text-amber-400 text-lg sm:text-xl hover:text-blue-400 transition font-semibold cursor-pointer" whileHover={{ scale: 1.1 }}>
              Most Played
            </motion.h1>
          </Link>

          <Link to="/help">
            <motion.h1 className="text-amber-400 text-lg sm:text-xl hover:text-blue-400 transition font-semibold cursor-pointer" whileHover={{ scale: 1.1 }}>
              Help
            </motion.h1>
          </Link>

         
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-semibold px-4 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
