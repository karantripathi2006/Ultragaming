import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    // const res = await fetch('http://localhost:5000/api/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // });
    const res = await fetch(`${BASE_URL}/api/signup`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});

    const data = await res.json();
    if (res.ok) {
       setMessage(`✅ ${data.message}`);
      setTimeout(() => navigate('/'), 2000);
    } else {
       setMessage(`❌ ${data.message || "Signup failed"}`);
    }
  };

  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      
      <motion.div
        className="absolute w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-20 top-10 left-10 animate-pulse"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] bg-cyan-500 rounded-full blur-[100px] opacity-30 bottom-10 right-10 animate-ping"
      />
      <motion.div
        className="absolute w-[200px] h-[200px] bg-pink-500 rounded-full blur-[100px] opacity-20 top-1/3 right-1/4"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      
      <motion.div
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96 border-4 border-purple-500 z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 160 }}
      >
        <h2 className="text-3xl text-center text-purple-400 mb-6 font-retro tracking-wide">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            className="w-full p-3 bg-black border border-purple-400 text-purple-300 font-retro placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            className="w-full p-3 bg-black border border-purple-400 text-purple-300 font-retro placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <motion.button
            type="submit"
            className="bg-purple-500 text-black font-retro py-2 hover:bg-purple-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
          {message && (
            <motion.p
              className="text-center mt-3 font-retro text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: message.startsWith('✅') ? 'lightgreen' : 'red' }}
            >
              {message}
            </motion.p>
          )}
        </form>

        <p className="text-center mt-4 text-purple-300 text-sm font-retro">
          Already have an account? <a href="/" className="underline text-cyan-400">Login here</a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
