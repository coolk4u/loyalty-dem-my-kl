
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, FileText } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="px-6 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <Button className="bg-loyalty-accent hover:bg-loyalty-accent/90 text-white p-6 h-auto flex-col space-y-2">
          <QrCode className="w-6 h-6" />
          <span>Scan QR Code</span>
        </Button>
        
        <Button className="bg-loyalty-royal hover:bg-loyalty-royal/90 text-white p-6 h-auto flex-col space-y-2">
          <FileText className="w-6 h-6" />
          <span>Take Survey</span>
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
