
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfluencerDashboard from '@/components/InfluencerDashboard';

const MasonDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole || userRole !== 'mason') {
      navigate('/');
    }
  }, [navigate]);

  const userRole = localStorage.getItem('userRole');
  
  if (!userRole || userRole !== 'mason') {
    return null; // Will redirect via useEffect
  }

  return <InfluencerDashboard />;
};

export default MasonDashboard;
