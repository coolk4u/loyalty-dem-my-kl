
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Users, QrCode, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReferFriend = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const referralCode = "MYK2024PAVAN";
  const referralLink = `https://myk-laticrete.com/join?ref=${referralCode}`;
  
  const handleWhatsAppShare = () => {
    const message = `Join MYK Laticrete Loyalty Program and earn exclusive rewards! Use my referral code: ${referralCode} or visit: ${referralLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddReferral = () => {
    if (mobileNumber.length === 10) {
      // Simulate adding referral
      alert(`Referral invitation sent to ${mobileNumber}`);
      setMobileNumber('');
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <div className="min-h-screen bg-off-white text-black">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-black">Refer a Friend</h1>
        </div>
        <Users className="w-6 h-6 text-loyalty-accent" />
      </div>

      <div className="px-6 space-y-6">
        {/* Referral Benefits */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <h3 className="text-lg font-semibold text-black mb-4">Referral Benefits</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-loyalty-gold/20 rounded-full flex items-center justify-center">
                <span className="text-loyalty-gold font-bold">500</span>
              </div>
              <p className="text-black">You earn 500 points for each successful referral</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-loyalty-accent/20 rounded-full flex items-center justify-center">
                <span className="text-loyalty-accent font-bold">200</span>
              </div>
              <p className="text-black">Your friend gets 200 bonus points on joining</p>
            </div>
          </div>
        </Card>

        {/* QR Code Section */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <h3 className="text-lg font-semibold text-black mb-4 flex items-center space-x-2">
            <QrCode className="w-5 h-5" />
            <span>Share QR Code</span>
          </h3>
          
          <div className="text-center space-y-4">
            <div className="bg-white p-4 rounded-xl mx-auto w-48 h-48 flex items-center justify-center">
              <div className="text-center">
                <QrCode className="w-32 h-32 text-loyalty-deep-blue mx-auto mb-2" />
                <p className="text-loyalty-deep-blue text-xs font-semibold">Scan to Join MYK Loyalty</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">Referral Code:</p>
              <p className="text-loyalty-gold text-xl font-bold bg-gray-100 py-2 px-4 rounded-lg">
                {referralCode}
              </p>
            </div>

            <Button 
              onClick={handleWhatsAppShare}
              className="bg-green-500 hover:bg-green-600 text-white w-full flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Share via WhatsApp</span>
            </Button>
          </div>
        </Card>

        {/* Manual Referral */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <h3 className="text-lg font-semibold text-black mb-4 flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Add Referral by Mobile</span>
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Friend's Mobile Number
              </label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="Enter 10-digit mobile number"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-loyalty-accent"
                maxLength={10}
              />
            </div>
            
            <Button 
              onClick={handleAddReferral}
              disabled={mobileNumber.length !== 10}
              className="w-full bg-loyalty-accent hover:bg-loyalty-accent/90 text-white disabled:opacity-50"
            >
              Send Invitation
            </Button>
          </div>
        </Card>

        {/* Recent Referrals */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <h3 className="text-lg font-semibold text-black mb-4">Recent Referrals</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <div>
                <p className="text-black font-medium">Rahul S.</p>
                <p className="text-gray-700 text-sm">Joined 2 days ago</p>
              </div>
              <span className="text-loyalty-gold font-bold">+500 pts</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <div>
                <p className="text-black font-medium">Priya M.</p>
                <p className="text-gray-700 text-sm">Joined 1 week ago</p>
              </div>
              <span className="text-loyalty-gold font-bold">+500 pts</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-black font-medium">Amit K.</p>
                <p className="text-gray-700 text-sm">Joined 2 weeks ago</p>
              </div>
              <span className="text-loyalty-gold font-bold">+500 pts</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ReferFriend;
