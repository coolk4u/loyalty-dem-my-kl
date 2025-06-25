
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { LogOut, UserCheck, Package, Receipt, TrendingUp, IndianRupee, Star, History, Award, CreditCard, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';

const CounterDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const bannerImages = [
    {
      id: 1,
      title: "MYK Laticrete Premium Products",
      description: "High-quality construction materials for professionals",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "MYK Laticrete Waterproofing Solutions",
      description: "Advanced waterproofing technology for lasting protection",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "MYK Laticrete Tile Adhesives",
      description: "Professional-grade adhesives for perfect tile installation",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen enterprise-bg text-gray-900 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
            <UserCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Rohan</h1>
            <p className="text-gray-600">Create and manage your sales transactions</p>
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
              <IndianRupee className="w-8 h-8 text-green-600" />
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
                <p className="text-gray-600 text-sm">Points Balance</p>
                <p className="text-2xl font-bold text-gray-900">2,000</p>
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

      {/* Carousel Banner */}
      <div className="px-6 mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {bannerImages.map((banner) => (
              <CarouselItem key={banner.id}>
                <Card className="glass-card-dark border-gray-200 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
                        <p className="text-sm opacity-90">{banner.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Sales Graph */}
      <div className="px-6 mb-8">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Sales Performance - Last 3 Months</h3>
        <Card className="glass-card-dark border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">₹1,35,840</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Monthly Average</p>
              <p className="text-lg font-semibold text-blue-600">₹45,280</p>
            </div>
          </div>
          
          {/* Simple bar chart visualization */}
          <div className="flex items-end space-x-4 h-32 mb-4">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t mb-2" style={{ height: '65%' }}></div>
              <span className="text-xs text-gray-600">Apr</span>
              <span className="text-xs font-semibold text-gray-900">₹42K</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t mb-2" style={{ height: '78%' }}></div>
              <span className="text-xs text-gray-600">May</span>
              <span className="text-xs font-semibold text-gray-900">₹48K</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t mb-2" style={{ height: '95%' }}></div>
              <span className="text-xs text-gray-600">Jun</span>
              <span className="text-xs font-semibold text-gray-900">₹46K</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-8">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/counter-sales-claim">
            <Button className="glass-card-dark hover:bg-blue-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:scale-105">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="font-semibold">Create Sales Claim</span>
            </Button>
          </Link>
          
          <Link to="/counter-redeem-points">
            <Button className="glass-card-dark hover:bg-green-500/20 border border-gray-200 text-gray-900 p-6 h-auto flex-col space-y-3 w-full transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 text-green-600" />
              <span className="font-semibold">Rewards</span>
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

      {/* Marketing Materials */}
      <div className="px-6 pb-8">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Latest Updates</h3>
        <div className="space-y-4">
          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Double Points Weekend!</h4>
                <p className="text-sm text-gray-600 mb-2">Earn 2x points on all sales this weekend. Valid till Sunday midnight.</p>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">New Product Launch</h4>
                <p className="text-sm text-gray-600 mb-2">Discover our latest waterproofing solutions with enhanced durability.</p>
                <Button size="sm" variant="outline">
                  Explore Products
                </Button>
              </div>
            </div>
          </Card>

          <Card className="glass-card-dark border-gray-200 p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Monthly Sales Target</h4>
                <p className="text-sm text-gray-600 mb-2">You're 85% towards your monthly target. Keep it up!</p>
                <Button size="sm" variant="outline">
                  View Progress
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <BottomNavigation userRole="counter-staff" />
    </div>
  );
};

export default CounterDashboard;
