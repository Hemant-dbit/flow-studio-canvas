import React from 'react';
import {
  Calendar,
  Mail,
  Zap
} from 'lucide-react';

const FlowDemo = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-10 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          {/* Trigger Node */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-2 shadow-md">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-center">
              <div className="font-semibold">Trigger</div>
              <div className="text-xs text-gray-500">New Email Received</div>
            </div>
          </div>

          {/* Flow Connector 1 */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-yellow-400 rounded-full relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-medium">
                Flow Initiated
              </div>
            </div>
          </div>

          {/* Process Node */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mb-2 shadow-md">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-center">
              <div className="font-semibold">Process</div>
              <div className="text-xs text-gray-500">Extract Relevant Data</div>
            </div>
          </div>

          {/* Flow Connector 2 */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-green-600 rounded-full relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-medium whitespace-nowrap">
                Processing Complete
              </div>
            </div>
          </div>

          {/* Action Node */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-2 shadow-md">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-center">
              <div className="font-semibold">Action</div>
              <div className="text-xs text-gray-500">Create Calendar Event</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDemo;
