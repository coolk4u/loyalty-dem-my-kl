
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Award, Gift, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const CounterRedeemPoints = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const rewards = [
    {
      id: 'R001',
      name: 'MYK Laticrete Water Bottle',
      description: 'Eco-friendly stainless steel water bottle with MYK Laticrete branding',
      points: 150,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop'
    },
    {
      id: 'R002',
      name: 'MYK Laticrete Cup Set',
      description: 'Premium ceramic cup set of 4 with MYK Laticrete logo',
      points: 300,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop'
    },
    {
      id: 'R003',
      name: 'MYK Laticrete Lunch Tiffin Box',
      description: 'Multi-compartment lunch box for professionals',
      points: 450,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
    },
    {
      id: 'R004',
      name: 'MYK Laticrete Bluetooth Speaker',
      description: 'Portable wireless speaker with MYK Laticrete branding',
      points: 1200,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop'
    },
    {
      id: 'R005',
      name: 'MYK Laticrete Premium Kit',
      description: 'Exclusive MYK Laticrete application tools set',
      points: 2000,
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=300&h=300&fit=crop'
    },
    {
      id: 'R006',
      name: 'MYK Laticrete Training Voucher',
      description: 'Free technical training session on MYK Laticrete products',
      points: 800,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    }
  ];

  const availablePoints = 2000;

  const handleRewardRedeem = (reward: any) => {
    toast({
      title: "Reward Redeemed",
      description: `${reward.name} will be delivered within 5-7 business days`,
    });
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
            <h1 className="text-2xl font-bold text-gray-900">Counter Staff Rewards</h1>
            <p className="text-gray-600">Use your points for MYK Laticrete rewards</p>
          </div>
        </div>
      </div>

      {/* Points Balance */}
      <div className="px-6 mb-6">
        <Card className="glass-card-dark border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Available Points</p>
                <p className="text-3xl font-bold text-gray-900">{availablePoints}</p>
                <p className="text-xs text-gray-600 mt-1">Note: Bank transfer not available for counter staff</p>
              </div>
              <Star className="w-12 h-12 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Rewards */}
      <div className="px-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Gift className="w-5 h-5 mr-2" />
          Available MYK Laticrete Rewards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward) => {
            const canRedeem = availablePoints >= reward.points;
            
            return (
              <Card key={reward.id} className="glass-card-dark border-gray-200">
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <img
                      src={reward.image}
                      alt={reward.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{reward.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-600 font-bold">{reward.points} points</span>
                        <Button
                          size="sm"
                          onClick={() => handleRewardRedeem(reward)}
                          disabled={!canRedeem}
                          className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white"
                        >
                          {canRedeem ? 'Redeem' : 'Insufficient Points'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CounterRedeemPoints;
