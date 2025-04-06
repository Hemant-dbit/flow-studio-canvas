import React from 'react';
import { MousePointer, FileText, Play, Check } from 'lucide-react';

const steps = [
  {
    icon: "MousePointer",
    title: "Design Your Flow",
    description: "Drag and drop triggers, actions, and conditions to create your perfect workflow.",
    color: "bg-studio-600"
  },
  {
    icon: "FileText",
    title: "Connect Your Apps",
    description: "Choose from over 200 app integrations and connect them with a few clicks.",
    color: "bg-flow-500"
  },
  {
    icon: "Play",
    title: "Activate and Run",
    description: "Turn on your automation and let StudioFlow handle the rest. It's that simple.",
    color: "bg-studio-600"
  },
  {
    icon: "Check",
    title: "Monitor Results",
    description: "Track performance, get notifications, and optimize your workflows over time.",
    color: "bg-flow-500"
  }
];

// Dynamically render icon components by name
const getIconComponent = (name) => {
  const icons = { MousePointer, FileText, Play, Check };
  const Icon = icons[name];
  return <Icon className="w-6 h-6 text-white" />;
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How StudioFlow Works</span>
          </h2>
          <p className="text-gray-600">
            Getting started with StudioFlow is easy. Follow these simple steps to create your first automation in minutes.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block z-0"></div>

          <div className="space-y-16 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`md:flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
                >
                  <div className={`md:w-1/2 px-4 flex items-center gap-4 ${isEven ? 'justify-end text-right' : 'justify-start text-left'}`}>
                    <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center shadow-md relative`}>
                      {getIconComponent(step.icon)}
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-studio-600 flex items-center justify-center font-bold border-2 border-studio-600 text-xs">
                        {index + 1}
                      </span>
                    </div>
                    <div className="max-w-sm">
                      <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
