
import React from 'react';
import { MousePointer, FileText, Play, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <MousePointer className="w-6 h-6 text-white" />,
    title: "Design Your Flow",
    description: "Drag and drop triggers, actions, and conditions to create your perfect workflow.",
    color: "bg-studio-600"
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Connect Your Apps",
    description: "Choose from over 200 app integrations and connect them with a few clicks.",
    color: "bg-flow-500"
  },
  {
    icon: <Play className="w-6 h-6 text-white" />,
    title: "Activate and Run",
    description: "Turn on your automation and let StudioFlow handle the rest. It's that simple.",
    color: "bg-studio-600"
  },
  {
    icon: <Check className="w-6 h-6 text-white" />,
    title: "Monitor Results",
    description: "Track performance, get notifications, and optimize your workflows over time.",
    color: "bg-flow-500"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How StudioFlow Works</span>
          </h2>
          <p className="text-gray-600">
            Getting started with StudioFlow is easy. Follow these simple steps to create your first automation in minutes.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="md:flex items-center"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 md:order-2'}`}>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <motion.div 
                  className={`mx-auto md:mx-0 my-6 md:my-0 relative z-10 ${index % 2 === 0 ? 'md:order-2' : 'md:pr-12'}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-studio-600 flex items-center justify-center font-bold border-2 border-studio-600">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
