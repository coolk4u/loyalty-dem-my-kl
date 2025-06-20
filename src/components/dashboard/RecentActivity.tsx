
import React from 'react';
import { Card } from '@/components/ui/card';
import { IndianRupee, FileText, QrCode } from 'lucide-react';

const RecentActivity = () => {
  return (
    <div className="px-6 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Activity</h3>
      <div className="space-y-3">
        <Card className="bg-glass-gradient border-blue-100 backdrop-blur-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <IndianRupee className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 font-medium">Reward Claimed</p>
              <p className="text-gray-600 text-sm">₹2,850 cashback from MYK Laticrete tile adhesive purchase</p>
            </div>
            <span className="text-gray-500 text-xs">2h ago</span>
          </div>
        </Card>

        <Card className="bg-glass-gradient border-blue-100 backdrop-blur-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 font-medium">Survey Completed</p>
              <p className="text-gray-600 text-sm">Earned 750 points from MYK Laticrete product feedback survey</p>
            </div>
            <span className="text-gray-500 text-xs">1d ago</span>
          </div>
        </Card>

        <Card className="bg-glass-gradient border-blue-100 backdrop-blur-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 font-medium">QR Code Scanned</p>
              <p className="text-gray-600 text-sm">Earned 100 points from MYK Laticrete grout purchase</p>
            </div>
            <span className="text-gray-500 text-xs">2d ago</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RecentActivity;
