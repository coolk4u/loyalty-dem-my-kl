
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, TrendingDown, QrCode, FileText, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContractorLoyaltyDetails = () => {
  const transactions = [
    { id: 1, type: 'accrual', mason: 'Rajesh Kumar', source: 'QR Scan', points: 50, date: '2024-06-18', description: 'Product QR scan at store' },
    { id: 2, type: 'accrual', mason: 'Suresh Patel', source: 'Survey', points: 200, date: '2024-06-17', description: 'Cricket match survey completion' },
    { id: 3, type: 'accrual', mason: 'Amit Sharma', source: 'QR Scan', points: 25, date: '2024-06-15', description: 'Product QR scan' },
    { id: 4, type: 'accrual', mason: 'Mohan Singh', source: 'Survey', points: 150, date: '2024-06-14', description: 'Product feedback survey' },
    { id: 5, type: 'accrual', mason: 'Rajesh Kumar', source: 'QR Scan', points: 30, date: '2024-06-13', description: 'Store visit QR scan' },
    { id: 6, type: 'accrual', mason: 'Suresh Patel', source: 'QR Scan', points: 40, date: '2024-06-10', description: 'New product launch scan' },
    { id: 7, type: 'accrual', mason: 'Amit Sharma', source: 'Survey', points: 100, date: '2024-06-11', description: 'Monthly satisfaction survey' },
    { id: 8, type: 'accrual', mason: 'Mohan Singh', source: 'QR Scan', points: 35, date: '2024-06-09', description: 'Demo session attendance' }
  ];

  const getIcon = (source: string) => {
    return source === 'QR Scan' ? <QrCode className="w-5 h-5 text-blue-600" /> : <FileText className="w-5 h-5 text-orange-600" />;
  };

  const totalPoints = transactions.reduce((sum, t) => sum + t.points, 0);
  const totalTransactions = transactions.length;
  const uniqueMasons = [...new Set(transactions.map(t => t.mason))].length;

  return (
    <div className="min-h-screen enterprise-bg text-gray-900">
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/contractor-dashboard">
            <Button variant="ghost" size="icon" className="text-gray-900 hover:bg-black/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Mason Points Activity</h1>
        </div>
      </div>

      <div className="px-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="glass-card-dark border-blue-200 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-gray-600 text-sm">Total Points</p>
                <p className="text-2xl font-bold text-gray-900">{totalPoints}</p>
              </div>
            </div>
          </Card>

          <Card className="glass-card-dark border-blue-200 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-gray-600 text-sm">Transactions</p>
                <p className="text-2xl font-bold text-gray-900">{totalTransactions}</p>
              </div>
            </div>
          </Card>

          <Card className="glass-card-dark border-blue-200 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-600 text-sm">Active Masons</p>
                <p className="text-2xl font-bold text-gray-900">{uniqueMasons}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="glass-card-dark border-blue-200 backdrop-blur-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mason Points History</h3>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  {getIcon(transaction.source)}
                  <div>
                    <p className="text-gray-900 font-medium">
                      <span className="font-semibold">{transaction.mason}</span> - {transaction.description}
                    </p>
                    <p className="text-gray-600 text-sm">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    +{transaction.points} pts
                  </p>
                  <p className="text-gray-600 text-xs">{transaction.source}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContractorLoyaltyDetails;
