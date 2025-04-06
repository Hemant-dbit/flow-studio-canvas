
import React from 'react';
import { MessageSquare, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdditionalNodesProps {
  className?: string;
}

const AdditionalNodes: React.FC<AdditionalNodesProps> = ({ className = "" }) => {
  return (
    <div className={`hidden lg:grid grid-cols-3 gap-8 w-full mt-8 ${className}`}>
      {/* Condition node */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.1,
          y: { 
            duration: 2.3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.9
          }
        }}
        className="flex flex-col items-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-flow-50 flex items-center justify-center mb-3 shadow-md"
        >
          <MessageSquare className="w-6 h-6 text-flow-500" />
        </motion.div>
        <div className="text-center">
          <div className="text-sm font-medium">Send Message</div>
        </div>
      </motion.div>
      
      {/* Empty space */}
      <div></div>
      
      {/* Settings node */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.3,
          y: { 
            duration: 2.7,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.2
          }
        }}
        className="flex flex-col items-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-studio-50 flex items-center justify-center mb-3 shadow-md"
        >
          <Settings className="w-6 h-6 text-studio-500" />
        </motion.div>
        <div className="text-center">
          <div className="text-sm font-medium">Update Settings</div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdditionalNodes;
