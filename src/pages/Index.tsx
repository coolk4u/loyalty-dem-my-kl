
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfluencerDashboard from '@/components/InfluencerDashboard';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole) {
      navigate('/login');
    } else if (userRole === 'contractor') {
      navigate('/contractor-dashboard');
    } else if (userRole === 'counter-staff') {
      navigate('/counter-dashboard');
    }
  }, [navigate]);

  const userRole = localStorage.getItem('userRole');
  
  if (!userRole || userRole !== 'mason') {
    return null; // Will redirect via useEffect
  }

  return <InfluencerDashboard />;
};

export default Index;
