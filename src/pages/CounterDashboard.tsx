
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LogOut, UserCheck, Package, Receipt, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CounterDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="min-h-screen enterprise-bg text-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
            <UserCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Counter Staff Portal</h1>
            <p className="text-gray-600">Process transactions and assist customers</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleLogout}
          className="text-gray-900 hover:bg-gray-200"
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <Receipt className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-600 text-sm">Today's Transactions</p>
                <p className="text-2xl font-bold text-gray-900">42</p>
              </div>
            </div>
          </Card>
          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-gray-600 text-sm">Points Processed</p>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button className="glass-card-dark hover:bg-blue-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full">
            <Package className="w-8 h-8 text-blue-600" />
            <span className="font-semibold">Process Sale</span>
          </Button>
          <Button className="glass-card-dark hover:bg-green-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full">
            <UserCheck className="w-8 h-8 text-green-600" />
            <span className="font-semibold">Customer Assistance</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CounterDashboard;
