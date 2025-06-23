
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, HardHat, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const roles = [
    {
      id: 'mason',
      title: 'Mason',
      description: 'Access loyalty program and earn points',
      icon: HardHat,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      id: 'contractor',
      title: 'Contractor',
      description: 'Manage masons and track team performance',
      icon: Users,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      id: 'counter-staff',
      title: 'Counter Staff',
      description: 'Process transactions and assist customers',
      icon: UserCheck,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    }
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    // Store role in localStorage for app-wide access
    localStorage.setItem('userRole', roleId);
    
    if (roleId === 'mason') {
      navigate('/');
    } else if (roleId === 'contractor') {
      navigate('/contractor-dashboard');
    } else if (roleId === 'counter-staff') {
      navigate('/counter-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-white border-gray-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to MYK Laticrete
          </CardTitle>
          <p className="text-gray-600">Select your role to continue</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {roles.map((role) => (
            <Button
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className={`w-full ${role.color} ${role.hoverColor} text-white p-6 h-auto flex items-center space-x-4 transition-all duration-300 hover:scale-105`}
            >
              <role.icon className="w-8 h-8" />
              <div className="text-left">
                <div className="font-semibold text-lg">{role.title}</div>
                <div className="text-sm opacity-90">{role.description}</div>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
