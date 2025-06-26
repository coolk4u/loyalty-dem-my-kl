
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'mason') {
      navigate('/mason-dashboard');
    } else if (userRole === 'contractor') {
      navigate('/contractor-dashboard');
    } else if (userRole === 'counter-staff') {
      navigate('/counter-dashboard');
    }
  }, [navigate]);

  return <Login />;
};

export default Index;
