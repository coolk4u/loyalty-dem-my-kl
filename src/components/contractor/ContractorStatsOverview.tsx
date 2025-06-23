
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, TrendingUp, Award, DollarSign } from 'lucide-react';

const ContractorStatsOverview = () => {
  const stats = [
    {
      title: 'Total Masons',
      value: '24',
      change: '+3 this month',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/20'
    },
    {
      title: 'Team Points',
      value: '12,450',
      change: '+890 this week',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-500/20'
    },
    {
      title: 'Active Masons',
      value: '18',
      change: '75% active rate',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-500/20'
    },
    {
      title: 'Monthly Growth',
      value: '15%',
      change: 'vs last month',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/20'
    }
  ];

  return (
    <div className="px-6 mb-8">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Overview</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="glass-card-dark border-gray-200 backdrop-blur-lg p-4 shadow-enterprise">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContractorStatsOverview;
