
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Award, Gift, Star, CreditCard, Truck, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CounterRedeemPoints = () => {
  const navigate = useNavigate();

  const rewards = [
    {
      id: 'R001',
      name: 'MYK Laticrete Discount Voucher',
      description: '15% off on next MYK Laticrete product purchase',
      points: 500,
      type: 'voucher',
      icon: CreditCard,
      color: 'text-blue-600'
    },
    {
      id: 'R002',
      name: 'Free MYK Laticrete Delivery',
      description: 'Free home delivery for MYK Laticrete orders above ₹2000',
      points: 300,
      type: 'service',
      icon: Truck,
      color: 'text-green-600'
    },
    {
      id: 'R003',
      name: 'MYK Laticrete Cash Reward',
      description: '₹200 cash back on MYK Laticrete purchases',
      points: 1000,
      type: 'cash',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      id: 'R004',
      name: 'MYK Laticrete Product Bundle',
      description: 'Free MYK Laticrete toolkit with purchase above ₹5000',
      points: 1500,
      type: 'product',
      icon: ShoppingBag,
      color: 'text-purple-600'
    },
    {
      id: 'R005',
      name: 'MYK Laticrete Premium Kit',
      description: 'Exclusive MYK Laticrete application tools set',
      points: 2000,
      type: 'product',
      icon: Gift,
      color: 'text-orange-600'
    },
    {
      id: 'R006',
      name: 'MYK Laticrete Training Voucher',
      description: 'Free technical training session on MYK Laticrete products',
      points: 800,
      type: 'training',
      icon: Award,
      color: 'text-indigo-600'
    }
  ];

  const availablePoints = 2000;

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
            <p className="text-gray-600">Use your points for MYK Laticrete rewards</p>
          </div>
        </div>
      </div>

      {/* Points Balance */}
      <div className="px-6 mb-6">
        <Card className="glass-card-dark border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Available Points:</span>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">{availablePoints}</span>
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </Card>
      </div>

      {/* Available Rewards */}
      <div className="px-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Available MYK Laticrete Rewards</h3>
        <div className="space-y-4">
          {rewards.map((reward) => {
            const canRedeem = availablePoints >= reward.points;
            const IconComponent = reward.icon;
            
            return (
              <Card 
                key={reward.id} 
                className={`glass-card-dark border-gray-200 p-4 ${canRedeem ? 'cursor-pointer hover:shadow-lg' : 'opacity-50'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-6 h-6 ${reward.color}`} />
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
    </div>
  );
};

export default CounterRedeemPoints;
