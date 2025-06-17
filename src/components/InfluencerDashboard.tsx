
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
  DollarSign, 
  Star, 
  Eye,
  MessageCircle,
  Share2,
  Bell,
  Settings
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
            <h1 className="text-xl font-bold">Sarah Chen</h1>
            <p className="text-loyalty-silver text-sm">Gold Influencer</p>
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
                <p className="text-2xl font-bold text-loyalty-gold">$24,567</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-xs">+15.3%</span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-loyalty-gold" />
            </div>
          </Card>

          <Card className="bg-glass-gradient border-white/20 backdrop-blur-lg p-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-loyalty-silver text-sm">Followers</p>
                <p className="text-2xl font-bold text-white">127.2K</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-xs">+8.7%</span>
                </div>
              </div>
              <Users className="w-8 h-8 text-loyalty-accent" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
            <Eye className="w-6 h-6 text-loyalty-accent mx-auto mb-2" />
            <p className="text-sm text-loyalty-silver">Views</p>
            <p className="font-bold text-white">2.4M</p>
          </Card>

          <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
            <Heart className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <p className="text-sm text-loyalty-silver">Likes</p>
            <p className="font-bold text-white">186K</p>
          </Card>

          <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-3 text-center animate-slide-up">
            <MessageCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-sm text-loyalty-silver">Comments</p>
            <p className="font-bold text-white">12.8K</p>
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
            <p className="text-xs text-loyalty-silver">Complete 3 more campaigns to unlock Diamond benefits</p>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button className="bg-loyalty-accent hover:bg-loyalty-accent/90 text-white p-6 h-auto flex-col space-y-2">
            <Gift className="w-6 h-6" />
            <span>Claim Rewards</span>
          </Button>
          
          <Button className="bg-loyalty-royal hover:bg-loyalty-royal/90 text-white p-6 h-auto flex-col space-y-2">
            <Share2 className="w-6 h-6" />
            <span>Share Content</span>
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
                <DollarSign className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Reward Claimed</p>
                <p className="text-loyalty-silver text-sm">$150 cashback from Nike campaign</p>
              </div>
              <span className="text-loyalty-silver text-xs">2h ago</span>
            </div>
          </Card>

          <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Milestone Reached</p>
                <p className="text-loyalty-silver text-sm">Hit 125K followers milestone</p>
              </div>
              <span className="text-loyalty-silver text-xs">1d ago</span>
            </div>
          </Card>

          <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Gift className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">New Campaign</p>
                <p className="text-loyalty-silver text-sm">Adidas collaboration available</p>
              </div>
              <span className="text-loyalty-silver text-xs">2d ago</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Performance Chart Preview */}
      <div className="px-6 pb-8">
        <h3 className="text-lg font-semibold mb-4 text-white">This Week's Performance</h3>
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-loyalty-silver text-sm">Engagement Rate</p>
              <p className="text-2xl font-bold text-white">8.7%</p>
            </div>
            <div className="text-right">
              <p className="text-loyalty-silver text-sm">Avg. per post</p>
              <p className="text-lg font-semibold text-loyalty-accent">2.4K</p>
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
