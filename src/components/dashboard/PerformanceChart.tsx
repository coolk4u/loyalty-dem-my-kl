
import React from 'react';
import { Card } from '@/components/ui/card';

const PerformanceChart = () => {
  return (
    <div className="px-6 pb-8">
      <h3 className="text-lg font-semibold mb-4 text-black">This Week's Activity</h3>
      <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-loyalty-silver text-black">Points Earned</p>
            <p className="text-2xl font-bold text-black">980</p>
          </div>
          <div className="text-right">
            <p className="text-loyalty-silver text-black">Daily Average</p>
            <p className="text-lg font-semibold text-loyalty-accent">140</p>
          </div>
        </div>
        
        {/* Simple bar chart visualization */}
        <div className="flex items-end space-x-2 h-24">
          {[65, 78, 52, 89, 95, 73, 84].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-loyalty-accent to-loyalty-gold rounded-t"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        
        <div className="flex justify-between mt-2 text-xs text-black">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </Card>
    </div>
  );
};

export default PerformanceChart;
