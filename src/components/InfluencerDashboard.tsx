
import React from 'react';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import DashboardHeader from './dashboard/DashboardHeader';
import StatsOverview from './dashboard/StatsOverview';
import LoyaltyStatus from './dashboard/LoyaltyStatus';
import QuickActions from './dashboard/QuickActions';
import RecentActivity from './dashboard/RecentActivity';
import PerformanceChart from './dashboard/PerformanceChart';
import BottomSections from './dashboard/BottomSections';

const InfluencerDashboard = () => {
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
    <div className="min-h-screen enterprise-bg text-gray-900 overflow-x-hidden relative">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <DashboardHeader />
        <StatsOverview />
        <LoyaltyStatus />
        
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

        <QuickActions />
        <RecentActivity />
        <PerformanceChart />
        <BottomSections />
      </div>
    </div>
  );
};

export default InfluencerDashboard;
