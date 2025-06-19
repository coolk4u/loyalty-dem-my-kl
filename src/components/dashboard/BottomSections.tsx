
import React from 'react';
import { Card } from '@/components/ui/card';
import { FileText, Presentation, Download, Facebook, Instagram, Linkedin, Bell, Camera, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BottomSections = () => {
  const marketingMaterials = [
    { name: 'Product Catalog', icon: FileText, type: 'PDF' },
    { name: 'Training Slides', icon: Presentation, type: 'PPT' },
    { name: 'Usage Guide', icon: Download, type: 'PDF' }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, color: 'text-blue-500' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-500' }
  ];

  const notifications = [
    {
      id: 1,
      title: 'New Cricket Survey Available',
      description: 'Complete the cricket match survey and earn 200 points',
      time: '2 hours ago',
      icon: FileText,
      color: 'text-orange-500'
    },
    {
      id: 2,
      title: 'Upload Selfie Challenge',
      description: 'Upload your selfie with MYK products for bonus points',
      time: '5 hours ago',
      icon: Camera,
      color: 'text-green-500'
    }
  ];

  return (
    <div className="px-6 space-y-6">
      {/* Marketing Materials */}
      <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Marketing Materials</h3>
        <div className="grid grid-cols-3 gap-4">
          {marketingMaterials.map((material, index) => (
            <Button
              key={index}
              variant="outline"
              className="border-white/20 bg-loyalty-navy/30 text-white hover:bg-loyalty-navy/50 hover:text-white p-4 h-auto flex-col space-y-2"
            >
              <material.icon className="w-6 h-6 text-white" />
              <span className="text-xs text-center text-white font-medium">{material.name}</span>
              <span className="text-xs text-loyalty-gold font-semibold">{material.type}</span>
            </Button>
          ))}
        </div>
      </Card>

      {/* Social Media Connect */}
      <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Social Media Connect</h3>
        <div className="flex justify-center space-x-6">
          {socialMedia.map((social, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <social.icon className={`w-10 h-10 ${social.color}`} />
            </div>
          ))}
        </div>
      </Card>

      {/* Notification Feed */}
      <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Notification Feed</h3>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3 p-3 bg-loyalty-navy/30 rounded-lg">
              <div className={`w-8 h-8 ${notification.color} bg-white/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                <notification.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm">{notification.title}</h4>
                <p className="text-loyalty-silver text-xs mt-1">{notification.description}</p>
                <p className="text-loyalty-gold text-xs mt-2">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BottomSections;
