import React from 'react';
import { Button } from '@/components/ui/button';
import FlowDemo from './FlowDemo';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden animate-fade-in-slow">
      {/* Animated Background Gradient Circles */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-studio-300/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-flow-300/20 rounded-full blur-3xl animate-pulse-slower -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text block animate-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Automate Your Tasks
            </span>{' '}
            <span className="inline-block animate-slide-in-delay text-gray-800">
              With Visual Flows
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-150">
            Build powerful automations without coding using StudioFlow's intuitive 
            drag-and-drop interface. Connect apps, automate workflows, and save time.
          </p>

          <div className="flex flex-col sm:flex-row  gap-4 animate-fade-in-up delay-300">
            <Button className="btn-primary text-lg h-12 transition-transform duration-300 hover:scale-105">
              Get Started for Free
            </Button>
            <Button variant="outline" className="text-lg h-12 transition-transform duration-300 hover:scale-105">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-16 animate-float-up delay-500">
          <FlowDemo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
