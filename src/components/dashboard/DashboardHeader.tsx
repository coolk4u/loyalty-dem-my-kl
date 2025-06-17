
import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Bell, Settings } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between p-6 pt-12">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-loyalty-accent to-loyalty-gold flex items-center justify-center">
          <Crown className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Pavan</h1>
          <p className="text-loyalty-silver text-sm">Gold Mason</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Settings className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
