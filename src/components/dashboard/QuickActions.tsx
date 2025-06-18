
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, FileText } from 'lucide-react';
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
        
        <Button className="bg-orange-500 hover:bg-orange-500/90 text-white p-6 h-auto flex-col space-y-2">
          <FileText className="w-6 h-6" />
          <span>Take Survey</span>
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
