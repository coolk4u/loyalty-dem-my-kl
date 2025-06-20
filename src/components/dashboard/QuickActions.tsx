
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, FileText, MapPin, Package, Users, HelpCircle, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  return (
    <div className="px-6 mb-8">
      <h3 className="text-xl font-bold mb-6 text-white">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/qr-scanner">
          <Button className="glass-card-dark hover:bg-enterprise-accent/20 border border-white/10 text-white p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-enterprise-accent/20 flex items-center justify-center group-hover:bg-enterprise-accent/30 transition-colors">
              <QrCode className="w-6 h-6 text-enterprise-accent" />
            </div>
            <span className="font-semibold">Scan QR Code</span>
          </Button>
        </Link>
        
        <Link to="/survey">
          <Button className="glass-card-dark hover:bg-orange-500/20 border border-white/10 text-white p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
              <FileText className="w-6 h-6 text-orange-400" />
            </div>
            <span className="font-semibold">Take Survey</span>
          </Button>
        </Link>

        <Link to="/coverage-calculator">
          <Button className="glass-card-dark hover:bg-purple-500/20 border border-white/10 text-white p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <span className="font-semibold">Coverage</span>
          </Button>
        </Link>

        <Link to="/products">
          <Button className="glass-card-dark hover:bg-blue-500/20 border border-white/10 text-white p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Package className="w-6 h-6 text-blue-400" />
            </div>
            <span className="font-semibold">Products</span>
          </Button>
        </Link>

        <Link to="/refer-friend">
          <Button className="glass-card-dark hover:bg-green-500/20 border border-white/10 text-white p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <span className="font-semibold">Refer a Friend</span>
          </Button>
        </Link>

        <Button className="glass-card-dark hover:bg-indigo-500/20 border border-white/10 text-white p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
          <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
            <HelpCircle className="w-6 h-6 text-indigo-400" />
          </div>
          <span className="font-semibold">Help</span>
        </Button>

        <Link to="/rewards" className="col-span-2">
          <Button className="glass-card-dark hover:bg-yellow-500/20 border border-white/10 text-white p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:shadow-enterprise-lg hover:scale-105 group">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
              <Gift className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="font-semibold">Rewards & Benefits</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
