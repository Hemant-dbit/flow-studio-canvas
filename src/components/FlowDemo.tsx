
import React from 'react';
import { ArrowRight, Calendar, Mail, MessageSquare, Settings, Zap } from 'lucide-react';

const FlowDemo = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-4 md:p-8 border border-gray-200">
        <div className="flex flex-col items-center">
          {/* Flow nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
            {/* Trigger node */}
            <div className="flex flex-col items-center animate-float">
              <div className="w-20 h-20 rounded-full bg-studio-100 flex items-center justify-center mb-4 shadow-md">
                <Mail className="w-8 h-8 text-studio-600" />
              </div>
              <div className="text-center">
                <div className="font-medium">Trigger</div>
                <div className="text-xs text-gray-500">New Email</div>
              </div>
            </div>
            
            {/* Process node */}
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 rounded-full bg-flow-100 flex items-center justify-center mb-4 shadow-md">
                <Zap className="w-8 h-8 text-flow-600" />
              </div>
              <div className="text-center">
                <div className="font-medium">Process</div>
                <div className="text-xs text-gray-500">Extract Data</div>
              </div>
            </div>
            
            {/* Action node */}
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="w-20 h-20 rounded-full bg-studio-100 flex items-center justify-center mb-4 shadow-md">
                <Calendar className="w-8 h-8 text-studio-600" />
              </div>
              <div className="text-center">
                <div className="font-medium">Action</div>
                <div className="text-xs text-gray-500">Create Event</div>
              </div>
            </div>
          </div>
          
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/6 h-px bg-gray-300 transform -translate-y-10">
            <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/6 h-px bg-gray-300 transform -translate-y-10">
            <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          {/* Additional nodes */}
          <div className="hidden lg:grid grid-cols-3 gap-8 w-full mt-12">
            {/* Condition node */}
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.9s' }}>
              <div className="w-16 h-16 rounded-full bg-flow-50 flex items-center justify-center mb-3 shadow-md">
                <MessageSquare className="w-6 h-6 text-flow-500" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Send Message</div>
              </div>
            </div>
            
            {/* Empty space */}
            <div></div>
            
            {/* Settings node */}
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 rounded-full bg-studio-50 flex items-center justify-center mb-3 shadow-md">
                <Settings className="w-6 h-6 text-studio-500" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Update Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDemo;
