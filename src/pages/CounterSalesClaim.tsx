
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Package, Search, CheckCircle, Clock, XCircle, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CounterSalesClaim = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newClaim, setNewClaim] = useState({
    customerName: '',
    amount: '',
    items: ['']
  });

  const salesClaims = [
    {
      id: 'SC001',
      customerName: 'Rajesh Kumar',
      amount: 2450,
      points: 245,
      date: '2024-06-23',
      status: 'pending',
      items: ['Cement - 50kg', 'Steel Rods - 10mm'],
      createdBy: 'You'
    },
    {
      id: 'SC002',
      customerName: 'Priya Sharma',
      amount: 1680,
      points: 168,
      date: '2024-06-23',
      status: 'approved',
      items: ['Tiles - 2x2ft', 'Adhesive - 20kg'],
      createdBy: 'You'
    },
    {
      id: 'SC003',
      customerName: 'Mohammed Ali',
      amount: 3200,
      points: 320,
      date: '2024-06-22',
      status: 'rejected',
      items: ['Concrete Mix - 40kg', 'Waterproofing'],
      createdBy: 'You'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'rejected':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredClaims = salesClaims.filter(claim =>
    claim.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    claim.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddItem = () => {
    setNewClaim(prev => ({
      ...prev,
      items: [...prev.items, '']
    }));
  };

  const handleItemChange = (index: number, value: string) => {
    setNewClaim(prev => ({
      ...prev,
      items: prev.items.map((item, i) => i === index ? value : item)
    }));
  };

  const handleSubmitClaim = () => {
    // Handle form submission logic here
    console.log('Submitting claim:', newClaim);
    setShowCreateForm(false);
    setNewClaim({ customerName: '', amount: '', items: [''] });
  };

  return (
    <div className="min-h-screen enterprise-bg text-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/counter-dashboard')}
            className="text-gray-900 hover:bg-gray-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <Package className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Sales Claims</h1>
              <p className="text-gray-600">Create and track your sales transactions</p>
            </div>
          </div>
        </div>
        <Button 
          onClick={() => setShowCreateForm(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Claim
        </Button>
      </div>

      {/* Create Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-white p-6">
            <h2 className="text-xl font-bold mb-4">Create New Sales Claim</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={newClaim.customerName}
                  onChange={(e) => setNewClaim(prev => ({ ...prev, customerName: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter customer name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  value={newClaim.amount}
                  onChange={(e) => setNewClaim(prev => ({ ...prev, amount: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Items
                </label>
                {newClaim.items.map((item, index) => (
                  <input
                    key={index}
                    type="text"
                    value={item}
                    onChange={(e) => handleItemChange(index, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                    placeholder="Enter item description"
                  />
                ))}
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleAddItem}
                  className="w-full"
                >
                  Add Item
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <Button 
                onClick={handleSubmitClaim}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
              >
                Submit Claim
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowCreateForm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Search */}
      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by customer name or claim ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Claims List */}
      <div className="px-6 space-y-4">
        {filteredClaims.map((claim) => (
          <Card key={claim.id} className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{claim.customerName}</h3>
                  <p className="text-sm text-gray-600">Claim ID: {claim.id}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(claim.status)}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(claim.status)}`}>
                  {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-sm text-gray-600">Amount</p>
                <p className="font-semibold text-gray-900">₹{claim.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Points</p>
                <p className="font-semibold text-gray-900">{claim.points}</p>
              </div>
            </div>
            
            <div className="mb-3">
              <p className="text-sm text-gray-600 mb-1">Items</p>
              <div className="space-y-1">
                {claim.items.map((item, index) => (
                  <p key={index} className="text-sm text-gray-900">• {item}</p>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{claim.date}</p>
                <p className="text-xs text-gray-500">Created by: {claim.createdBy}</p>
              </div>
              {claim.status === 'pending' && (
                <div className="text-sm text-gray-600">
                  Awaiting manager approval
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CounterSalesClaim;
