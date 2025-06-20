
import React from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import StatsOverview from './dashboard/StatsOverview';
import LoyaltyStatus from './dashboard/LoyaltyStatus';
import QuickActions from './dashboard/QuickActions';
import RecentActivity from './dashboard/RecentActivity';
import PerformanceChart from './dashboard/PerformanceChart';
import BottomSections from './dashboard/BottomSections';

const InfluencerDashboard = () => {
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
        <QuickActions />
        <RecentActivity />
        <PerformanceChart />
        <BottomSections />
      </div>
    </div>
  );
};

export default InfluencerDashboard;
