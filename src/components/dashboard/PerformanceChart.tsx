
import React from 'react';
import { Card } from '@/components/ui/card';

const PerformanceChart = () => {
  return (
    <div className="px-6 pb-8">
      <h3 className="text-xl font-bold mb-6 text-white">This Week's Performance</h3>
      <Card className="glass-card-dark border-white/10 backdrop-blur-lg p-6 shadow-enterprise">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <p className="text-enterprise-slate-300 text-sm font-medium">Points Earned</p>
            <p className="text-3xl font-bold text-white">980</p>
            <p className="text-enterprise-success text-sm">↗ +12% from last week</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-enterprise-slate-300 text-sm font-medium">Daily Average</p>
            <p className="text-xl font-bold text-enterprise-accent">140</p>
            <p className="text-enterprise-muted text-sm">Target: 120</p>
          </div>
        </div>
        
        {/* Modern bar chart visualization */}
        <div className="space-y-4">
          <div className="flex items-end space-x-2 h-32 p-4 bg-gradient-to-t from-enterprise-slate-800/50 to-transparent rounded-lg">
            {[65, 78, 52, 89, 95, 73, 84].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                <div
                  className="w-full bg-gradient-to-t from-enterprise-accent to-enterprise-success rounded-t-md shadow-enterprise transition-all duration-500 hover:scale-105"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-between text-sm text-enterprise-slate-300 font-medium">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <span key={index} className="flex-1 text-center">{day}</span>
            ))}
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
          <div className="text-center">
            <p className="text-enterprise-slate-300 text-xs font-medium">Best Day</p>
            <p className="text-white font-bold">Friday</p>
          </div>
          <div className="text-center">
            <p className="text-enterprise-slate-300 text-xs font-medium">Streak</p>
            <p className="text-enterprise-success font-bold">7 days</p>
          </div>
          <div className="text-center">
            <p className="text-enterprise-slate-300 text-xs font-medium">Goal</p>
            <p className="text-enterprise-warning font-bold">95%</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PerformanceChart;
