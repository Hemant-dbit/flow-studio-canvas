
import React from 'react';
import { Zap, Puzzle, Clock, Lock, Cloud, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-studio-500" />,
    title: "No-Code Automation",
    description: "Build complex automation flows without writing a single line of code. Perfect for teams of all technical levels."
  },
  {
    icon: <Puzzle className="w-6 h-6 text-studio-500" />,
    title: "200+ App Integrations",
    description: "Connect with your favorite tools and services. From CRMs to email marketing, we've got you covered."
  },
  {
    icon: <Clock className="w-6 h-6 text-flow-500" />,
    title: "Save Hours Weekly",
    description: "Eliminate repetitive tasks and let StudioFlow handle them automatically, giving you back your valuable time."
  },
  {
    icon: <Lock className="w-6 h-6 text-flow-500" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols keep your data and workflows protected at all times."
  },
  {
    icon: <Cloud className="w-6 h-6 text-studio-500" />,
    title: "Cloud-Based Platform",
    description: "Access your workflows from anywhere. No installations required, just log in and start building."
  },
  {
    icon: <Layers className="w-6 h-6 text-flow-500" />,
    title: "Powerful Logic Controls",
    description: "Create conditional logic, loops, and advanced workflows to handle complex business processes."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeatureSection = () => {
  return (
    <section id="features" className="section bg-gray-50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-studio-100/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Automate Your Work</span>
          </h2>
          <p className="text-gray-600">
            StudioFlow combines powerful features with an intuitive interface, making workflow automation accessible to everyone.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-studio-100 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
