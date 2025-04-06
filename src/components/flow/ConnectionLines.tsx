
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ConnectionLinesProps {
  className?: string;
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-10 my-2 hidden md:block ${className}`}>
      {/* Left to center connection */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-1/2 left-1/4 w-1/4 h-px bg-gradient-to-r from-studio-300 to-flow-300"
      >
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="relative"
        >
          <ArrowRight className="absolute top-0 right-0 transform -translate-y-1/2 text-flow-400" />
        </motion.div>
      </motion.div>
      
      {/* Center to right connection */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute top-1/2 left-1/2 w-1/4 h-px bg-gradient-to-r from-flow-300 to-studio-300"
      >
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }}
          className="relative"
        >
          <ArrowRight className="absolute top-0 right-0 transform -translate-y-1/2 text-studio-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConnectionLines;
