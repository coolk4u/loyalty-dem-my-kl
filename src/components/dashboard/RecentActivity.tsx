
import React from 'react';
import { Card } from '@/components/ui/card';
import { IndianRupee, FileText, QrCode } from 'lucide-react';

const RecentActivity = () => {
  return (
    <div className="px-6 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-white">Recent Activity</h3>
      <div className="space-y-3">
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <IndianRupee className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Reward Claimed</p>
              <p className="text-loyalty-silver text-sm">₹11,250 cashback from Asian Paints loyalty program</p>
            </div>
            <span className="text-loyalty-silver text-xs">2h ago</span>
          </div>
        </Card>

        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-orange-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Survey Completed</p>
              <p className="text-loyalty-silver text-sm">Earned 500 points from product feedback survey</p>
            </div>
            <span className="text-loyalty-silver text-xs">1d ago</span>
          </div>
        </Card>

        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-loyalty-accent/20 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-loyalty-accent" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">QR Code Scanned</p>
              <p className="text-loyalty-silver text-sm">Earned 50 points from Birla White cement purchase</p>
            </div>
            <span className="text-loyalty-silver text-xs">2d ago</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RecentActivity;
