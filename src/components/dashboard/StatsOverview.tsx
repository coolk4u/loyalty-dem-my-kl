
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, IndianRupee, Star, QrCode, FileText } from 'lucide-react';

const StatsOverview = () => {
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
              <p className="text-2xl font-bold text-white">15,420</p>
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
          <p className="text-sm text-loyalty-silver">QR Scans</p>
          <p className="font-bold text-white">342</p>
        </Card>

        <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
          <FileText className="w-6 h-6 text-orange-400 mx-auto mb-2" />
          <p className="text-sm text-loyalty-silver">Surveys</p>
          <p className="font-bold text-white">18</p>
        </Card>

        <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
          <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <p className="text-sm text-loyalty-silver">Referrals</p>
          <p className="font-bold text-white">8</p>
        </Card>
      </div>
    </div>
  );
};

export default StatsOverview;
