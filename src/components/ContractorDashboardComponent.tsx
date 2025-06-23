
import React from 'react';
import ContractorHeader from './contractor/ContractorHeader';
import ContractorStatsOverview from './contractor/ContractorStatsOverview';
import ContractorQuickActions from './contractor/ContractorQuickActions';
import MasonsList from './contractor/MasonsList';
import ContractorRecentActivity from './contractor/ContractorRecentActivity';

const ContractorDashboardComponent = () => {
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
        <ContractorHeader />
        <ContractorStatsOverview />
        <ContractorQuickActions />
        <MasonsList />
        <ContractorRecentActivity />
      </div>
    </div>
  );
};

export default ContractorDashboardComponent;
