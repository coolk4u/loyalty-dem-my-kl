
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CreditCard, Search, TrendingUp, TrendingDown, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CounterPointsBalance = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 'C001',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      currentPoints: 2450,
      earnedThisMonth: 450,
      redeemedThisMonth: 200,
      tier: 'Gold',
      lastActivity: '2024-06-23'
    },
    {
      id: 'C002',
      name: 'Priya Sharma',
      phone: '+91 87654 32109',
      currentPoints: 1680,
      earnedThisMonth: 320,
      redeemedThisMonth: 150,
      tier: 'Silver',
      lastActivity: '2024-06-22'
    },
    {
      id: 'C003',
      name: 'Mohammed Ali',
      phone: '+91 76543 21098',
      currentPoints: 3200,
      earnedThisMonth: 680,
      redeemedThisMonth: 500,
      tier: 'Platinum',
      lastActivity: '2024-06-23'
    },
    {
      id: 'C004',
      name: 'Anita Singh',
      phone: '+91 65432 10987',
      currentPoints: 890,
      earnedThisMonth: 180,
      redeemedThisMonth: 100,
      tier: 'Bronze',
      lastActivity: '2024-06-21'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'text-purple-600 bg-purple-100';
      case 'Gold':
        return 'text-yellow-600 bg-yellow-100';
      case 'Silver':
        return 'text-gray-600 bg-gray-100';
      case 'Bronze':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  const totalPoints = customers.reduce((sum, customer) => sum + customer.currentPoints, 0);
  const totalEarned = customers.reduce((sum, customer) => sum + customer.earnedThisMonth, 0);
  const totalRedeemed = customers.reduce((sum, customer) => sum + customer.redeemedThisMonth, 0);

  return (
    <div className="min-h-screen enterprise-bg text-gray-900">
      {/* Header */}
      <div className="flex items-center space-x-4 p-6 pt-12">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/counter-dashboard')}
          className="text-gray-900 hover:bg-gray-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center space-x-3">
          <CreditCard className="w-8 h-8 text-yellow-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Points Balance</h1>
            <p className="text-gray-600">View customer loyalty points overview</p>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <Card className="glass-card-dark border-gray-200 p-4 text-center">
            <Star className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Total Points</p>
            <p className="text-xl font-bold text-gray-900">{totalPoints.toLocaleString()}</p>
          </Card>
          
          <Card className="glass-card-dark border-gray-200 p-4 text-center">
            <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Earned (Month)</p>
            <p className="text-xl font-bold text-gray-900">{totalEarned.toLocaleString()}</p>
          </Card>
          
          <Card className="glass-card-dark border-gray-200 p-4 text-center">
            <TrendingDown className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Redeemed (Month)</p>
            <p className="text-xl font-bold text-gray-900">{totalRedeemed.toLocaleString()}</p>
          </Card>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customer by name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Customer Points List */}
      <div className="px-6 space-y-4">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                  <p className="text-sm text-gray-600">{customer.phone}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{customer.currentPoints} pts</p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(customer.tier)}`}>
                  {customer.tier}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-600">Earned (Month)</p>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <p className="text-sm font-semibold text-green-600">+{customer.earnedThisMonth}</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-600">Redeemed (Month)</p>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingDown className="w-3 h-3 text-red-500" />
                  <p className="text-sm font-semibold text-red-600">-{customer.redeemedThisMonth}</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-600">Last Activity</p>
                <p className="text-sm font-semibold text-gray-900">{customer.lastActivity}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CounterPointsBalance;
