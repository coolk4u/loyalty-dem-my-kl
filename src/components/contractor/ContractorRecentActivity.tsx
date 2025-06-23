
import React from 'react';
import { Card } from '@/components/ui/card';
import { QrCode, Award, UserPlus, TrendingUp } from 'lucide-react';

const ContractorRecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'point_earned',
      mason: 'Rajesh Kumar',
      description: 'earned 50 points via QR scan',
      time: '2 hours ago',
      icon: QrCode,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'new_mason',
      mason: 'Amit Sharma',
      description: 'joined your network',
      time: '1 day ago',
      icon: UserPlus,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'milestone',
      mason: 'Suresh Patel',
      description: 'reached 1000 points milestone',
      time: '2 days ago',
      icon: Award,
      color: 'text-yellow-600'
    },
    {
      id: 4,
      type: 'point_earned',
      mason: 'Mohan Singh',
      description: 'earned 100 points via survey',
      time: '3 days ago',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="px-6 mb-8">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Recent Activity</h3>
      <Card className="glass-card-dark border-gray-200 backdrop-blur-lg p-4 shadow-enterprise">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <activity.icon className={`w-5 h-5 ${activity.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">
                  <span className="font-semibold">{activity.mason}</span> {activity.description}
                </p>
                <p className="text-gray-600 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ContractorRecentActivity;
