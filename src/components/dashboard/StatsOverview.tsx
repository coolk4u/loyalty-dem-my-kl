
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, IndianRupee, Star, QrCode, FileText } from 'lucide-react';

const StatsOverview = () => {
  return (
    <div className="px-6 mb-8">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-glass-gradient border-blue-200 backdrop-blur-lg p-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Earnings</p>
              <p className="text-2xl font-bold text-loyalty-gold">₹18,750</p>
              <div className="flex items-center mt-1">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-xs">+12.5%</span>
              </div>
            </div>
            <IndianRupee className="w-8 h-8 text-loyalty-gold" />
          </div>
        </Card>

        <Card className="bg-glass-gradient border-blue-200 backdrop-blur-lg p-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Points</p>
              <p className="text-2xl font-bold text-gray-900">15,420</p>
              <div className="flex items-center mt-1">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-xs">+8.2%</span>
              </div>
            </div>
            <Star className="w-8 h-8 text-loyalty-accent" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="bg-card-gradient border-blue-100 backdrop-blur-lg p-3 text-center animate-slide-up">
          <QrCode className="w-6 h-6 text-loyalty-accent mx-auto mb-2" />
          <p className="text-sm text-gray-600">QR Scans</p>
          <p className="font-bold text-gray-900">342</p>
        </Card>

        <Card className="bg-card-gradient border-blue-100 backdrop-blur-lg p-3 text-center animate-slide-up">
          <FileText className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Surveys</p>
          <p className="font-bold text-gray-900">18</p>
        </Card>

        <Card className="bg-card-gradient border-blue-100 backdrop-blur-lg p-3 text-center animate-slide-up">
          <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Referrals</p>
          <p className="font-bold text-gray-900">8</p>
        </Card>
      </div>
    </div>
  );
};

export default StatsOverview;
