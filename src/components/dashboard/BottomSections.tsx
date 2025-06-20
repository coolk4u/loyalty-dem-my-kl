
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
    { name: 'Facebook', icon: Facebook, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500', bgColor: 'bg-pink-500/10' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600', bgColor: 'bg-blue-600/10' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-500', bgColor: 'bg-red-500/10' }
  ];

  const notifications = [
    {
      id: 1,
      title: 'New Cricket Survey Available',
      description: 'Complete the cricket match survey and earn 200 points',
      time: '2 hours ago',
      icon: FileText,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20'
    },
    {
      id: 2,
      title: 'Upload Selfie Challenge',
      description: 'Upload your selfie with MYK products for bonus points',
      time: '5 hours ago',
      icon: Camera,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    }
  ];

  return (
    <div className="px-6 space-y-8 pb-8">
      {/* Marketing Materials */}
      <Card className="glass-card-dark border-white/10 backdrop-blur-lg p-6 shadow-enterprise">
        <h3 className="text-xl font-bold text-white mb-6">Marketing Materials</h3>
        <div className="grid grid-cols-3 gap-4">
          {marketingMaterials.map((material, index) => (
            <Button
              key={index}
              variant="outline"
              className="border-white/20 glass-card-dark text-white hover:bg-white/10 hover:text-white p-4 h-auto flex-col space-y-3 transition-all duration-300 hover:shadow-enterprise"
            >
              <div className="w-10 h-10 rounded-full bg-enterprise-accent/20 flex items-center justify-center">
                <material.icon className="w-5 h-5 text-enterprise-accent" />
              </div>
              <span className="text-sm text-center text-white font-medium">{material.name}</span>
              <span className="text-xs text-yellow-400 font-semibold px-2 py-1 bg-yellow-400/10 rounded-full">{material.type}</span>
            </Button>
          ))}
        </div>
      </Card>

      {/* Social Media Connect */}
      <Card className="glass-card-dark border-white/10 backdrop-blur-lg p-6 shadow-enterprise">
        <h3 className="text-xl font-bold text-white mb-6">Social Media Connect</h3>
        <div className="flex justify-center space-x-6">
          {socialMedia.map((social, index) => (
            <div
              key={index}
              className={`w-16 h-16 ${social.bgColor} backdrop-blur-sm rounded-xl flex items-center justify-center shadow-enterprise hover:shadow-enterprise-lg transition-all duration-300 cursor-pointer hover:scale-110 border border-white/10`}
            >
              <social.icon className={`w-8 h-8 ${social.color}`} />
            </div>
          ))}
        </div>
      </Card>

      {/* Notification Feed */}
      <Card className="glass-card-dark border-white/10 backdrop-blur-lg p-6 shadow-enterprise">
        <h3 className="text-xl font-bold text-white mb-6">Notification Feed</h3>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-4 p-4 glass-card-dark rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className={`w-10 h-10 ${notification.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                <notification.icon className={`w-5 h-5 ${notification.color}`} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm mb-1">{notification.title}</h4>
                <p className="text-enterprise-slate-300 text-sm mb-2">{notification.description}</p>
                <p className="text-enterprise-accent text-xs font-medium">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BottomSections;
