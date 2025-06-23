
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LogOut, UserCheck, Package, Receipt, TrendingUp, DollarSign, Star, History, Award, CreditCard, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

      {/* Main Stats */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-gray-600 text-sm">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">₹45,680</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500 text-xs">+15.2%</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-gray-600 text-sm">Points Earned</p>
                <p className="text-2xl font-bold text-gray-900">2,850</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500 text-xs">+8.7%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <Receipt className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-600 text-sm">Transactions</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
                <p className="text-xs text-gray-500">Today</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-gray-600 text-sm">Avg. Sale</p>
                <p className="text-2xl font-bold text-gray-900">₹360</p>
                <p className="text-xs text-gray-500">Per transaction</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/counter-sales-claim">
            <Button className="glass-card-dark hover:bg-blue-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:scale-105">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="font-semibold">Sales Claim</span>
            </Button>
          </Link>
          
          <Link to="/counter-redeem-points">
            <Button className="glass-card-dark hover:bg-green-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 text-green-600" />
              <span className="font-semibold">Redeem Points</span>
            </Button>
          </Link>

          <Link to="/counter-points-balance">
            <Button className="glass-card-dark hover:bg-yellow-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:scale-105">
              <CreditCard className="w-8 h-8 text-yellow-600" />
              <span className="font-semibold">Points Balance</span>
            </Button>
          </Link>

          <Link to="/counter-transaction-history">
            <Button className="glass-card-dark hover:bg-purple-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:scale-105">
              <History className="w-8 h-8 text-purple-600" />
              <span className="font-semibold">Transaction History</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CounterDashboard;
