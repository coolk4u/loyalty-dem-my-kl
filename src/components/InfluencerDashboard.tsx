
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Crown, 
  TrendingUp, 
  Users, 
  Heart, 
  Gift, 
  IndianRupee, 
  Star, 
  Eye,
  MessageCircle,
  Share2,
  Bell,
  Settings,
  QrCode,
  Survey
} from 'lucide-react';

const InfluencerDashboard = () => {
  return (
    <div className="min-h-screen bg-loyalty-gradient text-white overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-loyalty-accent to-loyalty-gold flex items-center justify-center">
            <Crown className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Pavan</h1>
            <p className="text-loyalty-silver text-sm">Gold Mason</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-glass-gradient border-white/20 backdrop-blur-lg p-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-loyalty-silver text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-loyalty-gold">₹18,42,567</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-xs">+15.3%</span>
                </div>
              </div>
              <IndianRupee className="w-8 h-8 text-loyalty-gold" />
            </div>
          </Card>

          <Card className="bg-glass-gradient border-white/20 backdrop-blur-lg p-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-loyalty-silver text-sm">Total Points</p>
                <p className="text-2xl font-bold text-white">24,850</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-xs">+8.7%</span>
                </div>
              </div>
              <Star className="w-8 h-8 text-loyalty-accent" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
            <QrCode className="w-6 h-6 text-loyalty-accent mx-auto mb-2" />
            <p className="text-sm text-loyalty-silver">QR Scans</p>
            <p className="font-bold text-white">847</p>
          </Card>

          <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
            <Survey className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-sm text-loyalty-silver">Surveys</p>
            <p className="font-bold text-white">23</p>
          </Card>

          <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
            <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-loyalty-silver">Referrals</p>
            <p className="font-bold text-white">12</p>
          </Card>
        </div>
      </div>

      {/* Loyalty Status */}
      <div className="px-6 mb-8">
        <Card className="bg-gradient-to-r from-loyalty-gold/20 to-loyalty-accent/20 border-loyalty-gold/30 backdrop-blur-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Star className="w-6 h-6 text-loyalty-gold" />
              <h3 className="text-lg font-semibold text-white">Loyalty Status</h3>
            </div>
            <Badge className="bg-loyalty-gold text-loyalty-deep-blue font-semibold">
              Gold Tier
            </Badge>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-loyalty-silver">Points to Diamond</span>
              <span className="text-white font-semibold">2,340 pts</span>
            </div>
            <div className="w-full bg-loyalty-navy rounded-full h-2">
              <div className="bg-gradient-to-r from-loyalty-gold to-loyalty-accent h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-xs text-loyalty-silver">Complete 3 more surveys or scan 15 QR codes to unlock Diamond benefits</p>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button className="bg-loyalty-accent hover:bg-loyalty-accent/90 text-white p-6 h-auto flex-col space-y-2">
            <QrCode className="w-6 h-6" />
            <span>Scan QR Code</span>
          </Button>
          
          <Button className="bg-loyalty-royal hover:bg-loyalty-royal/90 text-white p-6 h-auto flex-col space-y-2">
            <Survey className="w-6 h-6" />
            <span>Take Survey</span>
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-white">Recent Activity</h3>
        <div className="space-y-3">
          <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <IndianRupee className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Reward Claimed</p>
                <p className="text-loyalty-silver text-sm">₹11,250 cashback from Asian Paints loyalty program</p>
              </div>
              <span className="text-loyalty-silver text-xs">2h ago</span>
            </div>
          </Card>

          <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Survey className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Survey Completed</p>
                <p className="text-loyalty-silver text-sm">Earned 500 points from product feedback survey</p>
              </div>
              <span className="text-loyalty-silver text-xs">1d ago</span>
            </div>
          </Card>

          <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <QrCode className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">QR Code Scanned</p>
                <p className="text-loyalty-silver text-sm">Earned 50 points from Birla White cement purchase</p>
              </div>
              <span className="text-loyalty-silver text-xs">2d ago</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Performance Chart Preview */}
      <div className="px-6 pb-8">
        <h3 className="text-lg font-semibold mb-4 text-white">This Week's Activity</h3>
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-loyalty-silver text-sm">Points Earned</p>
              <p className="text-2xl font-bold text-white">1,240</p>
            </div>
            <div className="text-right">
              <p className="text-loyalty-silver text-sm">Daily Average</p>
              <p className="text-lg font-semibold text-loyalty-accent">177</p>
            </div>
          </div>
          
          {/* Simple bar chart visualization */}
          <div className="flex items-end space-x-2 h-24">
            {[65, 78, 52, 89, 95, 73, 84].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-loyalty-accent to-loyalty-gold rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-loyalty-silver">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
