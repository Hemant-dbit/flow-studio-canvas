
import React from 'react';
import { Button } from '@/components/ui/button';
import FlowDemo from './FlowDemo';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Typing effect variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  // Create an array of letters from "With Visual Flows" for the typing effect
  const withVisualFlowsText = "With Visual Flows";
  const letters = Array.from(withVisualFlowsText);
  
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-studio-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-flow-300/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Automate Your Tasks</span>{" "}
            <span className="inline-flex">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8"
          >
            Build powerful automations without coding using StudioFlow's intuitive 
            drag-and-drop interface. Connect apps, automate workflows, and save time.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button className="btn-primary text-lg h-12 shadow-lg shadow-studio-400/20 hover:shadow-xl hover:shadow-studio-500/20 transition-all duration-300">Get Started for Free</Button>
            <Button variant="outline" className="text-lg h-12 border-2 hover:bg-gray-50 transition-all duration-300">Watch Demo</Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <FlowDemo />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
