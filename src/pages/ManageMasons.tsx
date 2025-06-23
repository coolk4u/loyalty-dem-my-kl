
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Users, Phone, MessageCircle, Award, Calendar, UserMinus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ManageMasons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const allMasons = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      points: 1250,
      lastActive: '2 hours ago',
      status: 'active',
      joinDate: 'Jan 2024',
      totalEarnings: 2150
    },
    {
      id: 2,
      name: 'Suresh Patel',
      phone: '+91 87654 32109',
      points: 980,
      lastActive: '1 day ago',
      status: 'active',
      joinDate: 'Dec 2023',
      totalEarnings: 1890
    },
    {
      id: 3,
      name: 'Mohan Singh',
      phone: '+91 76543 21098',
      points: 750,
      lastActive: '3 days ago',
      status: 'inactive',
      joinDate: 'Feb 2024',
      totalEarnings: 1200
    },
    {
      id: 4,
      name: 'Amit Sharma',
      phone: '+91 65432 10987',
      points: 1580,
      lastActive: '1 hour ago',
      status: 'active',
      joinDate: 'Nov 2023',
      totalEarnings: 3250
    },
    {
      id: 5,
      name: 'Vikram Yadav',
      phone: '+91 54321 09876',
      points: 420,
      lastActive: '1 week ago',
      status: 'inactive',
      joinDate: 'Mar 2024',
      totalEarnings: 850
    },
    {
      id: 6,
      name: 'Ramesh Gupta',
      phone: '+91 43210 98765',
      points: 1890,
      lastActive: '30 minutes ago',
      status: 'active',
      joinDate: 'Oct 2023',
      totalEarnings: 4200
    }
  ];

  const filteredMasons = allMasons.filter(mason =>
    mason.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mason.phone.includes(searchTerm)
  );

  const handleRemoveMason = (masonName: string) => {
    toast({
      title: "Mason Removed",
      description: `${masonName} has been removed from your network`,
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/contractor-dashboard">
            <Button variant="ghost" size="icon" className="text-gray-900 hover:bg-gray-200">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Manage Masons</h1>
        </div>
        <Users className="w-6 h-6 text-loyalty-accent" />
      </div>

      <div className="px-6">
        {/* Search Bar */}
        <Card className="bg-white border-gray-200 p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search masons by name or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300 text-gray-900"
            />
          </div>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="bg-white border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{allMasons.length}</p>
              <p className="text-gray-600 text-sm">Total Masons</p>
            </div>
          </Card>
          <Card className="bg-white border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {allMasons.filter(m => m.status === 'active').length}
              </p>
              <p className="text-gray-600 text-sm">Active</p>
            </div>
          </Card>
          <Card className="bg-white border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">
                {allMasons.reduce((sum, m) => sum + m.points, 0)}
              </p>
              <p className="text-gray-600 text-sm">Total Points</p>
            </div>
          </Card>
        </div>

        {/* Masons List */}
        <div className="space-y-4">
          {filteredMasons.map((mason) => (
            <Card key={mason.id} className="bg-white border-gray-200 p-4">
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
                      <span className="text-xs text-green-600 font-medium">
                        Total: {mason.totalEarnings} pts
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-right mr-3">
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
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 w-8 p-0 border-red-200 text-red-600 hover:bg-red-50"
                      onClick={() => handleRemoveMason(mason.name)}
                    >
                      <UserMinus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredMasons.length === 0 && (
          <Card className="bg-white border-gray-200 p-8 text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No masons found matching your search</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ManageMasons;
