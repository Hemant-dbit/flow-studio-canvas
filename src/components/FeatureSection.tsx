import React from 'react';
import { Zap, Puzzle, Clock, Lock, Cloud, Layers, ChevronDown } from 'lucide-react';

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

const FeatureSection = () => {
  return (
    <section id="features" className="section bg-gray-50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-studio-100/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Automate Your Work</span>
          </h2>
          <p className="text-gray-600">
            StudioFlow combines powerful features with an intuitive interface, making workflow automation accessible to everyone.
          </p>

          {/* Down Arrow Animation */}
          <div className="flex justify-center mt-6 animate-bounce-slow">
            <ChevronDown className="w-6 h-6 text-studio-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
