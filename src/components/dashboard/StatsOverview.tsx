
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, IndianRupee, Star, QrCode, FileText } from 'lucide-react';
import axios from 'axios';


const StatsOverview = () => {
  const[totalpoint, setTotalPoint] = useState(0);


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
          setTotalPoint(records[0].Loyalty_Member_Currency.records[0].PointsBalance || 'No Name');
        } else {
          setTotalPoint(0);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // setTotalPoint(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="px-6 mb-8">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-glass-gradient border-white/20 backdrop-blur-lg p-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-loyalty-silver text-sm">Total Earnings</p>
              <p className="text-2xl font-bold text-loyalty-gold">₹18,750</p>
              <div className="flex items-center mt-1">
                <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                <span className="text-green-400 text-xs">+12.5%</span>
              </div>
            </div>
            <IndianRupee className="w-8 h-8 text-loyalty-gold" />
          </div>
        </Card>

        <Card className="bg-glass-gradient border-white/20 backdrop-blur-lg p-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-loyalty-silver text-sm">Total Points</p>
              <p className="text-2xl font-bold text-black">{totalpoint}</p>
              <div className="flex items-center mt-1">
                <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                <span className="text-green-400 text-xs">+8.2%</span>
              </div>
            </div>
            <Star className="w-8 h-8 text-loyalty-accent" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
          <QrCode className="w-6 h-6 text-loyalty-accent mx-auto mb-2" />
          <p className="text-sm text-loyalty-black">QR Scans</p>
          <p className="font-bold text-black">342</p>
        </Card>

        <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
          <FileText className="w-6 h-6 text-orange-400 mx-auto mb-2" />
          <p className="text-sm text-loyalty-black">Surveys</p>
          <p className="font-bold text-white">18</p>
        </Card>

        <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
          <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <p className="text-sm text-loyalty-black">Referrals</p>
          <p className="font-bold text-white">8</p>
        </Card>
      </div>
    </div>
  );
};

export default StatsOverview;
