
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, UserPlus, FileText, BarChart3, Users, Share2, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContractorQuickActions = () => {
  return (
    <div className="px-6 mb-8">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/contractor-qr-scanner">
          <Button className="glass-card-dark hover:bg-enterprise-accent/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-enterprise-accent/20 flex items-center justify-center group-hover:bg-enterprise-accent/30 transition-colors">
              <QrCode className="w-6 h-6 text-enterprise-accent" />
            </div>
            <span className="font-semibold text-gray-900">Add Mason via QR</span>
          </Button>
        </Link>
        
        <Link to="/manage-masons">
          <Button className="glass-card-dark hover:bg-blue-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <span className="font-semibold text-gray-900">Manage Masons</span>
          </Button>
        </Link>

        <Link to="/contractor-loyalty-details">
          <Button className="glass-card-dark hover:bg-green-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
              <BarChart3 className="w-6 h-6 text-green-400" />
            </div>
            <span className="font-semibold text-gray-900">Points Activity</span>
          </Button>
        </Link>

        <Link to="/contractor-rewards">
          <Button className="glass-card-dark hover:bg-yellow-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
              <Gift className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="font-semibold text-gray-900">Rewards</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContractorQuickActions;
