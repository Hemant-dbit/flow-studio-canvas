
import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActionNodeProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  delay?: number;
}

const ActionNode: React.FC<ActionNodeProps> = ({ 
  title, 
  subtitle, 
  icon = <Calendar className="w-8 h-8 text-studio-600" />,
  delay = 0.9
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        y: { 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.6
        }
      }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)" }}
        transition={{ duration: 0.2 }}
        className="w-20 h-20 rounded-full bg-studio-100 flex items-center justify-center mb-4 shadow-md"
      >
        {icon}
      </motion.div>
      <div className="text-center">
        <div className="font-medium">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </motion.div>
  );
};

export default ActionNode;
