
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Gift, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ContractorRewards = () => {
  const { toast } = useToast();

  const rewards = [
    {
      id: 1,
      name: 'Water Bottle',
      points: 150,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop',
      description: 'Eco-friendly stainless steel water bottle'
    },
    {
      id: 2,
      name: 'Cup Set',
      points: 300,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop',
      description: 'Premium ceramic cup set of 4'
    },
    {
      id: 3,
      name: 'Lunch Tiffin Box',
      points: 450,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      description: 'Multi-compartment lunch box'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      points: 1200,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      description: 'Portable wireless speaker'
    }
  ];

  const handleRewardRedeem = (reward: any) => {
    toast({
      title: "Reward Redeemed",
      description: `${reward.name} will be delivered within 5-7 business days`,
    });
  };

  return (
    <div className="min-h-screen bg-off-white text-black">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link to="/contractor-dashboard">
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10 mr-3">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-black">Contractor Rewards</h1>
        </div>

        {/* Available Points */}
        <Card className="bg-glass-gradient border-gray-200 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Available Points</p>
                <p className="text-3xl font-bold text-loyalty-gold">1,850</p>
                <p className="text-xs text-gray-600 mt-1">Note: Bank transfer not available for contractors</p>
              </div>
              <Star className="w-12 h-12 text-loyalty-gold" />
            </div>
          </CardContent>
        </Card>

        {/* Product Rewards */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-black mb-4 flex items-center">
            <Gift className="w-5 h-5 mr-2" />
            Available Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map((reward) => (
              <Card key={reward.id} className="bg-glass-gradient border-gray-200">
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <img
                      src={reward.image}
                      alt={reward.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-black">{reward.name}</h3>
                      <p className="text-sm text-gray-700 mb-2">{reward.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-loyalty-gold font-bold">{reward.points} points</span>
                        <Button
                          size="sm"
                          onClick={() => handleRewardRedeem(reward)}
                          disabled={1850 < reward.points}
                          className="bg-loyalty-accent hover:bg-loyalty-accent/90 disabled:opacity-50"
                        >
                          Redeem
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorRewards;
