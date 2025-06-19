
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, TrendingDown, QrCode, FileText, Banknote, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoyaltyDetails = () => {
  const transactions = [
    { id: 1, type: 'accrual', source: 'QR Scan', points: 50, date: '2024-06-18', description: 'Product QR scan at store' },
    { id: 2, type: 'accrual', source: 'Survey', points: 200, date: '2024-06-17', description: 'Cricket match survey completion' },
    { id: 3, type: 'redemption', source: 'Bank Transfer', points: -500, date: '2024-06-16', description: 'Direct bank transfer' },
    { id: 4, type: 'accrual', source: 'QR Scan', points: 25, date: '2024-06-15', description: 'Product QR scan' },
    { id: 5, type: 'accrual', source: 'Survey', points: 150, date: '2024-06-14', description: 'Product feedback survey' },
    { id: 6, type: 'accrual', source: 'QR Scan', points: 30, date: '2024-06-13', description: 'Store visit QR scan' },
    { id: 7, type: 'redemption', source: 'Gift Item', points: -300, date: '2024-06-12', description: 'MYK branded merchandise' },
    { id: 8, type: 'accrual', source: 'Survey', points: 100, date: '2024-06-11', description: 'Monthly satisfaction survey' },
    { id: 9, type: 'accrual', source: 'QR Scan', points: 40, date: '2024-06-10', description: 'New product launch scan' },
    { id: 10, type: 'accrual', source: 'QR Scan', points: 35, date: '2024-06-09', description: 'Demo session attendance' }
  ];

  const getIcon = (type: string, source: string) => {
    if (type === 'accrual') {
      return source === 'QR Scan' ? <QrCode className="w-5 h-5 text-loyalty-accent" /> : <FileText className="w-5 h-5 text-orange-500" />;
    } else {
      return source === 'Bank Transfer' ? <Banknote className="w-5 h-5 text-green-500" /> : <Gift className="w-5 h-5 text-purple-500" />;
    }
  };

  const totalAccruals = transactions.filter(t => t.type === 'accrual').length;
  const totalRedemptions = transactions.filter(t => t.type === 'redemption').length;

  return (
    <div className="min-h-screen bg-loyalty-gradient text-white">
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Loyalty Details</h1>
        </div>
      </div>

      <div className="px-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-loyalty-silver text-sm">Total Accruals</p>
                <p className="text-2xl font-bold text-white">{totalAccruals}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <TrendingDown className="w-8 h-8 text-red-400" />
              <div>
                <p className="text-loyalty-silver text-sm">Total Redemptions</p>
                <p className="text-2xl font-bold text-white">{totalRedemptions}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Last 10 Transactions</h3>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-loyalty-navy/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getIcon(transaction.type, transaction.source)}
                  <div>
                    <p className="text-white font-medium">{transaction.description}</p>
                    <p className="text-loyalty-silver text-sm">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${transaction.type === 'accrual' ? 'text-green-400' : 'text-red-400'}`}>
                    {transaction.type === 'accrual' ? '+' : ''}{transaction.points} pts
                  </p>
                  <p className="text-loyalty-silver text-xs">{transaction.source}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoyaltyDetails;
