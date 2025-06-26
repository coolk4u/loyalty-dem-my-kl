import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Bell, Settings, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import axios from 'axios';

const DashboardHeader = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [firstName, setFirstName] = useState('Loading...');

  const handleBellClick = () => {
    setShowNotification(!showNotification);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://loyalty-d-dev-ed.develop.my.salesforce.com/services/data/v62.0/query?q=SELECT+Id,+Contact.FirstName,Contact.LastName,(Select+PointsBalance+from+Loyalty_Member_Currency)+FROM+LoyaltyProgramMember+WHERE+MembershipNumber='MYKL00002'",
          {
            headers: {
              Authorization: `Bearer 00Dao00001B9wPP!AQEAQN7fgqrIFgxkG6KU0xRZIqFl4hDgx_hlM5GNr.foANr.gcGesFo8R0iAxztmjmLei3adSA9im9pwJ3fLVviOzchC53PP`,
              Accept: '*/*',
              'Content-Type': 'application/json',
            },
          }
        );
        const records = response.data.records;
        if (records && records.length > 0) {
          setFirstName(records[0].Contact.FirstName || 'No Name');
        } else {
          setFirstName('No Contacts');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setFirstName('Error');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-loyalty-accent to-loyalty-gold flex items-center justify-center">
            <Crown className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-black">{firstName}</h2>
            <p className="text-loyalty-gold text-sm">Gold Mason</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:bg-white/10 relative"
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
