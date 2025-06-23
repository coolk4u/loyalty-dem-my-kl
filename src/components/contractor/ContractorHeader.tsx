
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContractorHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between p-6 pt-12">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
          <Users className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contractor Portal</h1>
          <p className="text-gray-600">Manage your mason network</p>
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
  );
};

export default ContractorHeader;
