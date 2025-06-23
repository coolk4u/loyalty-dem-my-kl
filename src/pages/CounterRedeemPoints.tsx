
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Award, Search, Gift, Star, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CounterRedeemPoints = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const customers = [
    {
      id: 'C001',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      points: 2450,
      tier: 'Gold'
    },
    {
      id: 'C002',
      name: 'Priya Sharma',
      phone: '+91 87654 32109',
      points: 1680,
      tier: 'Silver'
    },
    {
      id: 'C003',
      name: 'Mohammed Ali',
      phone: '+91 76543 21098',
      points: 3200,
      tier: 'Platinum'
    }
  ];

  const rewards = [
    {
      id: 'R001',
      name: 'Discount Voucher',
      description: '10% off on next purchase',
      points: 500,
      type: 'voucher'
    },
    {
      id: 'R002',
      name: 'Free Delivery',
      description: 'Free home delivery for orders above ₹1000',
      points: 300,
      type: 'service'
    },
    {
      id: 'R003',
      name: 'Cash Reward',
      description: '₹100 cash back',
      points: 1000,
      type: 'cash'
    },
    {
      id: 'R004',
      name: 'Product Bundle',
      description: 'Free toolkit with purchase',
      points: 1500,
      type: 'product'
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
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  const getRewardIcon = (type: string) => {
    switch (type) {
      case 'voucher':
        return <CreditCard className="w-6 h-6 text-blue-600" />;
      case 'service':
        return <Gift className="w-6 h-6 text-green-600" />;
      case 'cash':
        return <Star className="w-6 h-6 text-yellow-600" />;
      case 'product':
        return <Award className="w-6 h-6 text-purple-600" />;
      default:
        return <Gift className="w-6 h-6 text-gray-600" />;
    }
  };

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
          <Award className="w-8 h-8 text-green-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Redeem Points</h1>
            <p className="text-gray-600">Help customers redeem their loyalty points</p>
          </div>
        </div>
      </div>

      {!selectedCustomer ? (
        <>
          {/* Search Customer */}
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

          {/* Customer List */}
          <div className="px-6 space-y-4">
            {filteredCustomers.map((customer) => (
              <Card 
                key={customer.id} 
                className="glass-card-dark border-gray-200 p-4 cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setSelectedCustomer(customer)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                      <p className="text-sm text-gray-600">{customer.phone}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{customer.points} pts</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(customer.tier)}`}>
                      {customer.tier}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Selected Customer Info */}
          <div className="px-6 mb-6">
            <Card className="glass-card-dark border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{selectedCustomer.name}</h3>
                    <p className="text-sm text-gray-600">{selectedCustomer.phone}</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedCustomer(null)}
                >
                  Change Customer
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Available Points:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{selectedCustomer.points}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(selectedCustomer.tier)}`}>
                    {selectedCustomer.tier}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Available Rewards */}
          <div className="px-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Available Rewards</h3>
            <div className="space-y-4">
              {rewards.map((reward) => {
                const canRedeem = selectedCustomer.points >= reward.points;
                return (
                  <Card 
                    key={reward.id} 
                    className={`glass-card-dark border-gray-200 p-4 ${canRedeem ? 'cursor-pointer hover:shadow-lg' : 'opacity-50'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getRewardIcon(reward.type)}
                        <div>
                          <h4 className="font-semibold text-gray-900">{reward.name}</h4>
                          <p className="text-sm text-gray-600">{reward.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">{reward.points} pts</p>
                        {canRedeem ? (
                          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white mt-2">
                            Redeem
                          </Button>
                        ) : (
                          <p className="text-xs text-red-500 mt-2">Insufficient points</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CounterRedeemPoints;
