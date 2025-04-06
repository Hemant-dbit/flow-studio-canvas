
import React from 'react';
import FlowContainer from './flow/FlowContainer';
import TriggerNode from './flow/TriggerNode';
import ProcessNode from './flow/ProcessNode';
import ActionNode from './flow/ActionNode';
import ConnectionLines from './flow/ConnectionLines';
import AdditionalNodes from './flow/AdditionalNodes';

const FlowDemo = () => {
  return (
    <FlowContainer>
      <div className="flex flex-col items-center">
        {/* Main flow nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
          <TriggerNode 
            title="Trigger" 
            subtitle="New Email" 
          />
          
          <ProcessNode 
            title="Process" 
            subtitle="Extract Data" 
          />
          
          <ActionNode 
            title="Action" 
            subtitle="Create Event" 
          />
        </div>
        
        {/* Connection lines */}
        <ConnectionLines />
        
        {/* Additional nodes */}
        <AdditionalNodes />
      </div>
    </FlowContainer>
  );
};

export default FlowDemo;
