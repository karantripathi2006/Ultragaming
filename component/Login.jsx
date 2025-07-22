// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

  


// const Login = () => {
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const [error, seterror] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [stars, setStars] = useState([]);
//   const navigate = useNavigate();


//   useEffect(() => {
//     const starArray = Array.from({ length: 100 }).map(() => ({
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       size: Math.random() * 2 + 1,
//       duration: Math.random() * 10 + 5
//     }));
//     setStars(starArray);
//   }, []);

// const handlelogin = async (e) => {
//   e.preventDefault();

//   const res = await fetch('http://localhost:5000/api/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await res.json();
//   if (data.success) {
//     alert('🕹️ Login Successful!');
//     localStorage.setItem('token', data.token);
//     localStorage.setItem('user', JSON.stringify(data.user));
//     navigate('/home'); 
//   } else {
//     seterror(data.message);
//   }
// };


//   return (
//     <motion.div
//       className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
     
//       <motion.div
//         className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-900/40 to-black"
//         animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//         transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
//         style={{ backgroundSize: '400% 400%' }}
//       />

    
//       {stars.map((star, index) => (
//        <div
//   key={index}
//   className="absolute bg-white rounded-full opacity-50 animate-twinkle"
//   style={{
//     left: `${star.left}%`,
//     top: `${star.top}%`,
//     width: `${star.size}px`,
//     height: `${star.size}px`,
//     zIndex: 0
//   }}
// />
//       ))}

      
//       <div className="absolute w-[300px] h-[300px] bg-fuchsia-500 rounded-full blur-[120px] opacity-30 top-10 left-10 animate-pulse" />
//       <div className="absolute w-[250px] h-[250px] bg-cyan-500 rounded-full blur-[100px] opacity-30 bottom-10 right-10 animate-ping" />
//       <div className="absolute w-[200px] h-[200px] bg-pink-600 rounded-full blur-[100px] opacity-20 top-1/3 right-1/4 animate-bounce" />

    
//       <motion.div
//         className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96 border-4 border-cyan-400 z-10"
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         transition={{ type: 'spring', stiffness: 160 }}
//       >
//         <div className="text-center mb-6 text-6xl">
//           {showPassword ? '🙈' : '🐵'}
//         </div>

//         <h2 className="text-lg font-retro text-cyan-400 text-center mb-6 tracking-wider">
//           LOGIN TO START
//         </h2>

//         <form onSubmit={handlelogin}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             className="w-full p-3 mb-4 bg-black border border-cyan-400 text-cyan-300 font-retro placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             required
//           />
  
//           <div className="relative mb-4">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               className="w-full p-3 bg-black border border-cyan-400 text-cyan-300 font-retro placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               required
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-3 text-cyan-500 cursor-pointer"
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//                   <p className="text-center text-cyan-400 mt-3">
//   New user? <a href="/signup" className="underline">Signup here</a>
// </p>
//           <motion.button
//             type="submit"
//             className="w-full bg-cyan-500 py-2 font-retro text-black hover:bg-cyan-400 transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             ENTER WEBSITE
//           </motion.button>
//           {error && (
//             <motion.p
//               className="text-red-500 text-center mt-3 font-retro text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               {error}
//             </motion.p>
//           )}
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [stars, setStars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const starArray = Array.from({ length: 100 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 5,
    }));
    setStars(starArray);
  }, []);

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert('🕹️ Login Successful!');
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/home');
      } else {
        seterror(data.message || 'Login failed');
      }
    } catch (err) {
      seterror('❌ Unable to connect to server');
      console.error('Login Error:', err);
    }
  };

  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
     
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-900/40 to-black"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundSize: '400% 400%' }}
      />

  
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full opacity-50 animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            zIndex: 0,
          }}
        />
      ))}

     
      <div className="absolute w-[300px] h-[300px] bg-fuchsia-500 rounded-full blur-[120px] opacity-30 top-10 left-10 animate-pulse" />
      <div className="absolute w-[250px] h-[250px] bg-cyan-500 rounded-full blur-[100px] opacity-30 bottom-10 right-10 animate-ping" />
      <div className="absolute w-[200px] h-[200px] bg-pink-600 rounded-full blur-[100px] opacity-20 top-1/3 right-1/4 animate-bounce" />

  
      <motion.div
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96 border-4 border-cyan-400 z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 160 }}
      >
        <div className="text-center mb-6 text-6xl">
          {showPassword ? '🙈' : '🐵'}
        </div>

        <h2 className="text-lg font-retro text-cyan-400 text-center mb-6 tracking-wider">
          LOGIN TO START
        </h2>

        <form onSubmit={handlelogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full p-3 mb-4 bg-black border border-cyan-400 text-cyan-300 font-retro placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full p-3 bg-black border border-cyan-400 text-cyan-300 font-retro placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-cyan-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <p className="text-center text-cyan-400 mt-3">
            New user?{' '}
            <a href="/signup" className="underline">
              Signup here
            </a>
          </p>

          <motion.button
            type="submit"
            className="w-full bg-cyan-500 py-2 font-retro text-black hover:bg-cyan-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ENTER WEBSITE
          </motion.button>

          {error && (
            <motion.p
              className="text-red-500 text-center mt-3 font-retro text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
