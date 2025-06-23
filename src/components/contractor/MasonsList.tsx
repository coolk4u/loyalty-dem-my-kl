
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Award, Calendar } from 'lucide-react';

const MasonsList = () => {
  const masons = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      points: 1250,
      lastActive: '2 hours ago',
      status: 'active',
      joinDate: 'Jan 2024'
    },
    {
      id: 2,
      name: 'Suresh Patel',
      phone: '+91 87654 32109',
      points: 980,
      lastActive: '1 day ago',
      status: 'active',
      joinDate: 'Dec 2023'
    },
    {
      id: 3,
      name: 'Mohan Singh',
      phone: '+91 76543 21098',
      points: 750,
      lastActive: '3 days ago',
      status: 'inactive',
      joinDate: 'Feb 2024'
    },
    {
      id: 4,
      name: 'Amit Sharma',
      phone: '+91 65432 10987',
      points: 1580,
      lastActive: '1 hour ago',
      status: 'active',
      joinDate: 'Nov 2023'
    }
  ];

  return (
    <div className="px-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">My Masons</h3>
        <Button variant="outline" size="sm" className="text-gray-900 border-gray-300">
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {masons.map((mason) => (
          <Card key={mason.id} className="glass-card-dark border-gray-200 backdrop-blur-lg p-4 shadow-enterprise">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">
                    {mason.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold">{mason.name}</h4>
                  <p className="text-gray-600 text-sm">{mason.phone}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="flex items-center text-xs text-gray-500">
                      <Award className="w-3 h-3 mr-1" />
                      {mason.points} pts
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {mason.joinDate}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className={`text-xs px-2 py-1 rounded-full ${
                    mason.status === 'active' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {mason.status}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{mason.lastActive}</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MasonsList;
