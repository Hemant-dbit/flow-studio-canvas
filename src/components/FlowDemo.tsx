
import React from 'react';
import { ArrowRight, Calendar, Mail, MessageSquare, Settings, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const FlowDemo = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-4 md:p-8 border border-gray-200"
      >
        <div className="flex flex-col items-center">
          {/* Flow nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
            {/* Trigger node */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5,
                y: { 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="w-20 h-20 rounded-full bg-studio-100 flex items-center justify-center mb-4 shadow-md"
              >
                <Mail className="w-8 h-8 text-studio-600" />
              </motion.div>
              <div className="text-center">
                <div className="font-medium">Trigger</div>
                <div className="text-xs text-gray-500">New Email</div>
              </div>
            </motion.div>
            
            {/* Process node */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7,
                y: { 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.3
                }
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="w-20 h-20 rounded-full bg-flow-100 flex items-center justify-center mb-4 shadow-md"
              >
                <Zap className="w-8 h-8 text-flow-600" />
              </motion.div>
              <div className="text-center">
                <div className="font-medium">Process</div>
                <div className="text-xs text-gray-500">Extract Data</div>
              </div>
            </motion.div>
            
            {/* Action node */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.9,
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
                <Calendar className="w-8 h-8 text-studio-600" />
              </motion.div>
              <div className="text-center">
                <div className="font-medium">Action</div>
                <div className="text-xs text-gray-500">Create Event</div>
              </div>
            </motion.div>
          </div>
          
          {/* Connection lines */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hidden md:block absolute top-1/2 left-1/3 w-1/6 h-px bg-gradient-to-r from-studio-300 to-flow-300 transform -translate-y-10"
          >
            <motion.div
              animate={{ x: [0, 30, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear" 
              }}
            >
              <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-flow-400" />
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="hidden md:block absolute top-1/2 right-1/3 w-1/6 h-px bg-gradient-to-r from-flow-300 to-studio-300 transform -translate-y-10"
          >
            <motion.div
              animate={{ x: [0, 30, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
            >
              <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-studio-400" />
            </motion.div>
          </motion.div>
          
          {/* Additional nodes */}
          <div className="hidden lg:grid grid-cols-3 gap-8 w-full mt-12">
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
        </div>
      </motion.div>
    </div>
  );
};

export default FlowDemo;
