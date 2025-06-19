
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
    <div className="min-h-screen bg-loyalty-gradient text-white overflow-x-hidden">
      <DashboardHeader />
      <StatsOverview />
      <LoyaltyStatus />
      <QuickActions />
      <RecentActivity />
      <PerformanceChart />
      <BottomSections />
    </div>
  );
};

export default InfluencerDashboard;
