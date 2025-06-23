
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, History, Search, Filter, Download, TrendingUp, TrendingDown, Package, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CounterTransactionHistory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const transactions = [
    {
      id: 'TXN001',
      customerName: 'Rajesh Kumar',
      type: 'purchase',
      amount: 2450,
      points: 245,
      date: '2024-06-23',
      time: '14:30',
      description: 'Cement purchase - 50kg bags'
    },
    {
      id: 'TXN002',
      customerName: 'Priya Sharma',
      type: 'redeem',
      amount: 0,
      points: -500,
      date: '2024-06-23',
      time: '12:15',
      description: 'Redeemed discount voucher'
    },
    {
      id: 'TXN003',
      customerName: 'Mohammed Ali',
      type: 'purchase',
      amount: 1680,
      points: 168,
      date: '2024-06-23',
      time: '10:45',
      description: 'Tiles and adhesive purchase'
    },
    {
      id: 'TXN004',
      customerName: 'Anita Singh',
      type: 'bonus',
      amount: 0,
      points: 100,
      date: '2024-06-22',
      time: '16:20',
      description: 'Birthday bonus points'
    },
    {
      id: 'TXN005',
      customerName: 'Rajesh Kumar',
      type: 'redeem',
      amount: 0,
      points: -300,
      date: '2024-06-22',
      time: '11:30',
      description: 'Redeemed free delivery'
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'purchase':
        return <Package className="w-5 h-5 text-blue-600" />;
      case 'redeem':
        return <Award className="w-5 h-5 text-red-600" />;
      case 'bonus':
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      default:
        return <History className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'purchase':
        return 'text-blue-600 bg-blue-100';
      case 'redeem':
        return 'text-red-600 bg-red-100';
      case 'bonus':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getPointsDisplay = (points: number) => {
    const isPositive = points > 0;
    return (
      <div className="flex items-center space-x-1">
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
        <span className={`font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '+' : ''}{points}
        </span>
      </div>
    );
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || transaction.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen enterprise-bg text-gray-900">
      {/* Header */}
      <div className="flex items-center space-x-4 p-6 pt-12">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/counter-dashboard')}
          className="text-gray-900 hover:bg-gray-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center space-x-3">
          <History className="w-8 h-8 text-purple-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Transaction History</h1>
            <p className="text-gray-600">View all customer transactions and activities</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-6 mb-6 space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by customer name or transaction ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Transactions</option>
            <option value="purchase">Purchases</option>
            <option value="redeem">Redemptions</option>
            <option value="bonus">Bonus Points</option>
          </select>
          
          <Button variant="outline" size="sm" className="ml-auto">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="px-6 space-y-4">
        {filteredTransactions.map((transaction) => (
          <Card key={transaction.id} className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  {getTransactionIcon(transaction.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{transaction.customerName}</h3>
                  <p className="text-sm text-gray-600">{transaction.id}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTransactionColor(transaction.type)}`}>
                  {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              {transaction.amount > 0 && (
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-semibold text-gray-900">₹{transaction.amount.toLocaleString()}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">Points</p>
                {getPointsDisplay(transaction.points)}
              </div>
            </div>
            
            <div className="mb-3">
              <p className="text-sm text-gray-900">{transaction.description}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">{transaction.date} at {transaction.time}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CounterTransactionHistory;
