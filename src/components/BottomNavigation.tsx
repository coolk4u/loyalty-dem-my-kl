
import React from 'react';
import { Home, QrCode, ClipboardList, Gift, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BottomNavProps {
  userRole: 'mason' | 'contractor' | 'counter-staff';
}

const BottomNavigation = ({ userRole }: BottomNavProps) => {
  const location = useLocation();

  const getNavItems = () => {
    switch (userRole) {
      case 'mason':
        return [
          { icon: Home, label: 'Home', path: '/' },
          { icon: QrCode, label: 'QR Scan', path: '/qr-scanner' },
          { icon: ClipboardList, label: 'Survey', path: '/survey' },
          { icon: Gift, label: 'Rewards', path: '/rewards' },
          { icon: User, label: 'Profile', path: '/profile' },
        ];
      case 'contractor':
        return [
          { icon: Home, label: 'Home', path: '/contractor-dashboard' },
          { icon: QrCode, label: 'QR Scan', path: '/contractor-qr-scanner' },
          { icon: ClipboardList, label: 'Loyalty', path: '/contractor-loyalty-details' },
          { icon: Gift, label: 'Rewards', path: '/contractor-rewards' },
          { icon: User, label: 'Manage', path: '/manage-masons' },
        ];
      case 'counter-staff':
        return [
          { icon: Home, label: 'Home', path: '/counter-dashboard' },
          { icon: QrCode, label: 'Sales', path: '/counter-sales-claim' },
          { icon: ClipboardList, label: 'History', path: '/counter-transaction-history' },
          { icon: Gift, label: 'Rewards', path: '/counter-redeem-points' },
          { icon: User, label: 'Balance', path: '/counter-points-balance' },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <div className="bottom-nav">
      <div className="flex justify-around items-center px-4">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center space-y-1 transition-colors ${
                isActive ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-purple-600' : 'text-gray-600'}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
