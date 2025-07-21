import React from 'react';
import { motion } from 'framer-motion';

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center text-cyan-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛟 Help & Support
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {[
          {
            title: "🔐 How to create an account?",
            content: "Click on 'Sign Up' on the login page, enter your email and password, then click Sign Up.",
          },
          {
            title: "❌ Forgot your password?",
            content: "Currently, password reset is not available. Contact support for help.",
          },
          {
            title: "🎮 How to buy a game?",
            content: "Click on a game card to open its details. Then click the 'Buy on Steam' button.",
          },
          {
            title: "💳 What payment methods are supported?",
            content: "Since purchases redirect to Steam, all Steam-supported payment methods are valid.",
          },
          {
            title: "📧 How can I contact support?",
            content: "Email us at support tripathishakti22@gmail.com or DM us on Twitter @UltraGamingSupport.",
          },
        ].map((faq, index) => (
          <motion.div
            key={index}
            className="border border-purple-500 rounded-lg p-4 bg-black bg-opacity-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-xl text-purple-400 font-semibold">{faq.title}</h2>
            <p className="text-purple-200 mt-2">{faq.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-purple-500">
        Need more help? <span className="text-cyan-300 underline cursor-pointer">Contact Us</span>
      </div>
    </div>
  );
};

export default Help;
