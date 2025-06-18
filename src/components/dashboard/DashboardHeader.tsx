
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Bell, Settings, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const DashboardHeader = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleBellClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-loyalty-accent to-loyalty-gold flex items-center justify-center">
            <Crown className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Pavan</h2>
            <p className="text-loyalty-gold text-sm">Gold Mason</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 relative"
              onClick={handleBellClick}
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </Button>
            
            {showNotification && (
              <Card className="absolute top-12 right-0 w-72 bg-loyalty-navy border-loyalty-accent/30 p-4 z-50">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">New Survey Available!</h4>
                    <p className="text-loyalty-silver text-xs mt-1">
                      New Cricket match Survey is launched
                    </p>
                    <p className="text-loyalty-gold text-xs mt-2">Earn 150 points</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <User className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
