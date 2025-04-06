
import React from 'react';
import { Button } from '@/components/ui/button';
import FlowDemo from './FlowDemo';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-studio-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-flow-300/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Automate Your Tasks</span> With Visual Flows
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build powerful automations without coding using StudioFlow's intuitive 
            drag-and-drop interface. Connect apps, automate workflows, and save time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary text-lg h-12">Get Started for Free</Button>
            <Button variant="outline" className="text-lg h-12">Watch Demo</Button>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16">
          <FlowDemo />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
            <div className="h-8 w-24 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
