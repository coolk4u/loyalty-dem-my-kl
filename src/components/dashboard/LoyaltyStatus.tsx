
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoyaltyStatus = () => {
  return (
    <div className="px-6 mb-8">
      <Link to="/loyalty-details">
        <Card className="bg-gradient-to-r from-loyalty-gold/20 to-loyalty-accent/20 border-loyalty-gold/30 backdrop-blur-lg p-6 hover:from-loyalty-gold/30 hover:to-loyalty-accent/30 transition-all cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Star className="w-6 h-6 text-loyalty-gold" />
              <h3 className="text-lg font-semibold text-gray-900">Loyalty Status</h3>
            </div>
            <Badge className="bg-loyalty-gold text-loyalty-deep-blue font-semibold">
              Gold Tier
            </Badge>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">Points to Diamond</span>
              <span className="text-loyalty-gold font-bold text-lg">2,340 pts</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-gradient-to-r from-loyalty-gold to-loyalty-accent h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-sm text-gray-700 font-medium">Complete 3 more surveys or scan 15 QR codes to unlock Diamond benefits</p>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default LoyaltyStatus;
