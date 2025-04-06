
import React from 'react';
import { motion } from 'framer-motion';

interface FlowContainerProps {
  children: React.ReactNode;
}

const FlowContainer: React.FC<FlowContainerProps> = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="relative w-full max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-4 md:p-8 border border-gray-200"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlowContainer;
