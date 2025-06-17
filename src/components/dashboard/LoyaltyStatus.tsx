
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const LoyaltyStatus = () => {
  return (
    <div className="px-6 mb-8">
      <Card className="bg-gradient-to-r from-loyalty-gold/20 to-loyalty-accent/20 border-loyalty-gold/30 backdrop-blur-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Star className="w-6 h-6 text-loyalty-gold" />
            <h3 className="text-lg font-semibold text-white">Loyalty Status</h3>
          </div>
          <Badge className="bg-loyalty-gold text-loyalty-deep-blue font-semibold">
            Gold Tier
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-loyalty-silver">Points to Diamond</span>
            <span className="text-white font-semibold">2,340 pts</span>
          </div>
          <div className="w-full bg-loyalty-navy rounded-full h-2">
            <div className="bg-gradient-to-r from-loyalty-gold to-loyalty-accent h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-xs text-loyalty-silver">Complete 3 more surveys or scan 15 QR codes to unlock Diamond benefits</p>
        </div>
      </Card>
    </div>
  );
};

export default LoyaltyStatus;
