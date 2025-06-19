
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, FileText, MapPin, Package, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  return (
    <div className="px-6 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/qr-scanner">
          <Button className="bg-loyalty-accent hover:bg-loyalty-accent/90 text-white p-6 h-auto flex-col space-y-2 w-full">
            <QrCode className="w-6 h-6" />
            <span>Scan QR Code</span>
          </Button>
        </Link>
        
        <Link to="/survey">
          <Button className="bg-orange-500 hover:bg-orange-500/90 text-white p-6 h-auto flex-col space-y-2 w-full">
            <FileText className="w-6 h-6" />
            <span>Take Survey</span>
          </Button>
        </Link>

        <Link to="/coverage-calculator">
          <Button className="bg-purple-500 hover:bg-purple-500/90 text-white p-6 h-auto flex-col space-y-2 w-full">
            <MapPin className="w-6 h-6" />
            <span>Coverage</span>
          </Button>
        </Link>

        <Link to="/products">
          <Button className="bg-blue-500 hover:bg-blue-500/90 text-white p-6 h-auto flex-col space-y-2 w-full">
            <Package className="w-6 h-6" />
            <span>Products</span>
          </Button>
        </Link>

        <Link to="/refer-friend">
          <Button className="bg-green-500 hover:bg-green-500/90 text-white p-6 h-auto flex-col space-y-2 w-full">
            <Users className="w-6 h-6" />
            <span>Refer a Friend</span>
          </Button>
        </Link>

        <Button className="bg-indigo-500 hover:bg-indigo-500/90 text-white p-6 h-auto flex-col space-y-2 w-full">
          <HelpCircle className="w-6 h-6" />
          <span>Help</span>
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
